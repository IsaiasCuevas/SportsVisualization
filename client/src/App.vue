<template>
  <div id="app">
    <Header />
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
  background-color: rgb(91, 192, 150);
  height: 100%;
}
</style>
