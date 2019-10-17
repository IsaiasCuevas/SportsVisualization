<template>
  <div class="match_content">
    <div class="stat-type" :key="'stats' + index" v-for="(stats, index) in stats.statistics">
      <div class="home-stat">{{stats.home}}</div>
      <div class="stats-title">{{stats.type}}</div>
      <div class="away-stat">{{stats.away}}</div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchContent",

  data() {
    return {};
  },
  props: ["stats"]
};
</script>

<style>
.match_content {
  grid-column: 1/6;
  border: 1px solid black;
  padding: 15px;
}
.stat-type {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
.stats-title {
  grid-column: 2/3;
  justify-self: center;
  font-size: 24px;
  font-weight: bold;
}
.home-stat {
  grid-column: 1/2;
  font-size: 24px;
}
.away-stat {
  grid-column: 3/4;
  font-size: 24px;
  justify-self: end;
}
</style>