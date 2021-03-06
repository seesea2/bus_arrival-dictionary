"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientDir = exports.assetsDir = exports.srcDir = exports.serverDir = void 0;
const path_1 = require("path");
const srcDir = (0, path_1.resolve)(__dirname);
exports.srcDir = srcDir;
const serverDir = (0, path_1.resolve)((0, path_1.join)(srcDir, "/.."));
exports.serverDir = serverDir;
const assetsDir = (0, path_1.resolve)((0, path_1.join)(serverDir, "/assets"));
exports.assetsDir = assetsDir;
const clientDir = (0, path_1.resolve)((0, path_1.join)(serverDir, "/../client"));
exports.clientDir = clientDir;
