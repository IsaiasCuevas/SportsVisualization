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
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --accent-color: #641bff;
  --heading-font-family: "Poppins", sans-serif;
  --body-font-family: "Lato", sans-serif;
}
body {
  margin: 0;
  background-color: #ffffff;
  height: 100%;
}
</style>
