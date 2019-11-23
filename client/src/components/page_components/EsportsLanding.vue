<template>
  <div class="esports-page">
    <MatchCarousel
      v-on:setID="setID($event)"
      v-bind:match_data="match_schedule"
      v-bind:loading="loading"
    />
    <MatchInfo class="matchInfoContainer" />

    <div class="side-nav">
      <ul>
        <li>Home</li>
        <li v-on:click="getTeams()">Teams</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";
import MatchCarousel from "../subcomponents/Esports/MatchCarousel";
import MatchInfo from "../subcomponents/Esports/MatchInfo";
export default {
  name: "EsportsLanding",
  components: {
    MatchCarousel,
    MatchInfo
  },
  data() {
    return {
      loading: false,
      match_schedule: [],
      id: 0
    };
  },
  methods: {
    setID: function(newID) {
      this.id = newID;
    },
    getTeams: function() {
      bus.$emit("getTeams");
    }
  }
};
</script>

<style scoped>
.esports-page {
  display: grid;
  grid-template-columns: 0.75fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 180px;
}
.matchInfoContainer {
  grid-row: 2;
  grid-column: 2/5;
}
.side-nav {
  grid-column: 1;
  grid-row: 2;
  background: #ffffff;
}
.side-nav ul {
  list-style-type: none;
  margin: 50px;
  align-self: center;
  text-align: center;
}
.side-nav li {
  border: 1px solid black;
  padding: 5px;
}
.side-nav li:hover {
  background: #ececec;
}
</style>
