<template>
  <NavbarVue></NavbarVue>

  <div class="container py-2">
    <div class="text-center">
      <h2>Podcasts</h2>
    </div>

    <div v-for="channel in data.channels" :key="channel.title">
      <ChannelVue :channel="channel"></ChannelVue>
    </div>
  </div>
</template>

<script setup>
import ChannelVue from "../components/Channel.vue";
import NavbarVue from "../components/Navbar.vue";

import axios from "axios";
import { reactive, onBeforeMount } from "vue";

document.title = "Podcast";

let data = reactive({
  channels: [],
});

onBeforeMount(() => {
  axios
    .get("/api/podcast")
    .then((resp) => {
      for (let item of resp.data) {
        data.channels.push(item);
      }
    })
    .catch((err) => {
      data.channels.length = 0;
      console.log("err", err);
    });
});
</script>
