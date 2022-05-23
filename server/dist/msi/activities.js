"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbActivitiesColumns = exports.emailActivity = exports.DeleteActivity = exports.UpdateActivity = exports.InsertActivity = exports.AllActivity = exports.ActivityTemplates = void 0;
const crypto_1 = require("crypto");
const db_ops_1 = require("../db-ops");
const email_1 = require("./email");
const dbActivitiesColumns = [
    "title",
    "status",
    "affectedSystems",
    "startDatetime",
    "endDatetime",
    "impact",
    "noImpact",
    "stakeholders",
    "teams",
    "riskAndMitigation",
    "remarks",
    "contactPersons",
    "createDatetime",
    "updateDatetime",
    "type",
];
exports.dbActivitiesColumns = dbActivitiesColumns;
const dbTemplatesColumns = ["id", "group1", "group2", "created", "updated"];
function InsertActivity(data) {
    if (!data || !data.title)
        return;
    try {
        let fields = `"id"`;
        let id = (0, crypto_1.randomUUID)();
        let values = "'" + id + "'";
        for (let val of dbActivitiesColumns) {
            if (["createDatetime", "updateDatetime"].includes(val)) {
                continue;
            }
            if (data[val]) {
                data[val] = data[val].replace(/'/g, "''");
                fields += `,"${val}"`;
                values += `,'${data[val]}'`;
            }
        }
        fields += `,"createDatetime"`;
        values += ",'" + new Date().toISOString() + "'";
        let sql = `insert into "Activities"(${fields}) values(${values});`;
        console.log("sql: ", sql);
        let db = (0, db_ops_1.dbOpen)();
        let stmt = db.prepare(sql);
        stmt.run();
        db.close();
        if (data["type"] == "Template") {
            fields = `"id"`;
            values = "'" + id + "'";
            fields += `,"group1"`;
            values += `,'${data["group1"]}'`;
            fields += `,"group2"`;
            values += `,'${data["group2"]}'`;
            fields += `,"created"`;
            values += ",'" + new Date().toISOString() + "'";
            sql = `insert into "Templates"(${fields}) values(${values});`;
            console.log(sql);
            db = (0, db_ops_1.dbOpen)();
            stmt = db.prepare(sql);
            stmt.run();
            db.close();
        }
        return id;
    }
    catch (e) {
        console.log(e);
        return "";
    }
}
exports.InsertActivity = InsertActivity;
function UpdateActivity(data) {
    if (!data || !data.id || !data.title)
        return;
    try {
        let sql = `update "Activities" set `;
        for (let val of dbActivitiesColumns) {
            if (val == "updateDatetime") {
                continue;
            }
            if (data[val]) {
                data[val] = data[val].replace(/'/g, "''");
                sql += `"${val}"='${data[val]}',`;
            }
        }
        sql += `"updateDatetime"='${new Date().toISOString()}' `;
        sql += `where "id"='${data.id}';`;
        console.log("sql: ", sql);
        let db = (0, db_ops_1.dbOpen)();
        let stmt = db.prepare(sql);
        stmt.run();
        db.close();
        if (data["type"] == "Template") {
            let sql = `update "Templates" set `;
            for (let val of dbTemplatesColumns) {
                if (["id", "updated"].includes(val)) {
                    continue;
                }
                if (data[val]) {
                    data[val] = data[val].replace(/'/g, "''");
                    sql += `"${val}"='${data[val]}',`;
                }
            }
            sql += `"updated"='${new Date().toISOString()}' `;
            sql += `where "id"='${data.id}';`;
            console.log("update template sql: ", sql);
            let db = (0, db_ops_1.dbOpen)();
            let stmt = db.prepare(sql);
            stmt.run();
            db.close();
        }
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}
exports.UpdateActivity = UpdateActivity;
function DeleteActivity(id) {
    try {
        let db = (0, db_ops_1.dbOpen)();
        let stmt = db.prepare(`delete from Activities where id='${id}';`);
        stmt.run();
        stmt = db.prepare(`delete from Templates where id='${id}';`);
        stmt.run();
        db.close();
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}
exports.DeleteActivity = DeleteActivity;
function SelectActivity(id) {
    try {
        let db = (0, db_ops_1.dbOpen)();
        let stmt = db.prepare(`select * from Activities where id='${id}';`);
        let record = stmt.get();
        db.close();
        return record;
    }
    catch (e) {
        console.log(e);
        return e;
    }
}
function AllActivity() {
    try {
        let db = (0, db_ops_1.dbOpen)();
        let stmt = db.prepare(`select * from Activities where id not in (select id from Templates) order by "startDatetime" desc;`);
        let items = stmt.all();
        db.close();
        return items;
    }
    catch (e) {
        console.log(e);
    }
}
exports.AllActivity = AllActivity;
function ActivityTemplates() {
    try {
        let db = (0, db_ops_1.dbOpen)();
        let stmt = db.prepare(`select a.*,t.group1,t.group2 from Activities a, Templates t where a.id=t.id order by "group1","group2";`);
        let items = stmt.all();
        db.close();
        return items;
    }
    catch (e) {
        console.log(e);
    }
}
exports.ActivityTemplates = ActivityTemplates;
function emailActivity(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let ret = yield (0, email_1.emailActivity)(data);
        return ret;
    });
}
exports.emailActivity = emailActivity;
let startDate = new Date();
startDate.setDate(new Date().getDate() - 5);
for (let i = 0; i < 10; ++i) {
    let act1 = {};
    for (let val of dbActivitiesColumns) {
        act1[val] = "act" + i;
    }
    act1.startDatetime = startDate.toISOString();
    act1.endDatetime = startDate.toISOString();
    startDate.setDate(startDate.getDate() + 1);
}
