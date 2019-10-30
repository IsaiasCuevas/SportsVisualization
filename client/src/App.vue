<template>
  <div id="app">
    <Header class="header" v-bind:title="'Sports Visualization'" />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #ffffff;
  height: 100%;
}
</style>
