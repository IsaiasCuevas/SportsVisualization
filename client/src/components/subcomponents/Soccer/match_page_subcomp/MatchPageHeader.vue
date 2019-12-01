<template>
  <div class="match_page_header">
    <div class="match_header">
      <div class="header_home">
        <h1 class="header_team">
          <a
            class="home_team_link"
            v-bind:href="'/soccer/team/' +stats.home_team_key"
          >{{stats.event_home_team}}</a>
        </h1>
        <ul class="home_goals">
          <li :key="'scorer' + index" v-for=" (scorer, index) in stats.goalscorers">
            <img
              v-if="scorer.home_scorer != ''"
              class="mini_ball"
              src="../../../../assets/soccer2.png"
            />
            {{scorer.home_scorer}}
            <span
              v-if="scorer.home_scorer != ''"
            >({{scorer.time}}')</span>
          </li>
        </ul>
      </div>
      <div class="header_score">
        <h2>{{stats.event_final_result}}</h2>
      </div>
      <div class="header_away">
        <h1 class="header_team">
          <a
            class="home_team_link"
            v-bind:href="'/soccer/team/' +stats.away_team_key"
          >{{stats.event_away_team}}</a>
        </h1>
        <ul class="away_goals">
          <li :key="'scorer' + index" v-for=" (scorer, index) in stats.goalscorers">
            <img
              v-if="scorer.away_scorer != ''"
              class="mini_ball"
              src="../../../../assets/soccer2.png"
            />
            {{scorer.away_scorer}}
            <span
              v-if="scorer.away_scorer != ''"
            >({{scorer.time}}')</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="choose_type_stats">
      <button
        class="lineup_stat_button"
        v-on:click="changeLineup()"
        v-bind:class="{ selected_button: activeButton }"
      >Lineups</button>
      <button
        class="stats_stat_button"
        v-on:click="changeStats()"
        v-bind:class="{ selected_button: !activeButton }"
      >Stats</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchPageheader",
  components: {},
  props: ["stats"],
  data() {
    return { activeButton: true };
  },
  methods: {
    changeLineup: function() {
      this.activeButton = true;
      this.$emit("changeLineup");
    },
    changeStats: function() {
      this.activeButton = false;
      this.$emit("changeStats");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
.match_page_header {
  background: #ffffff;
  grid-column: 1/8;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.1fr;
}
.match_header {
  border: 1px solid black;
  grid-column: 1/8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.header_away {
  font-family: "Oswald", sans-serif;
  grid-column: 4/5;
  justify-self: center;
}
.header_away ul {
  padding: 0;
  list-style-type: none;
}
.header_score {
  font-family: "Oswald", sans-serif;
  grid-column: 3/4;
  justify-self: center;
  align-self: center;
}
.header_score h2 {
  font-size: 28px;
}
.header_home {
  font-family: "Oswald", sans-serif;
  grid-column: 2/3;
  justify-self: center;
}
.header_home ul {
  padding: 0;
  list-style-type: none;
}
.choose_type_stats {
  grid-row: 2;
  grid-column: 2/7;
  display: grid;
  margin-bottom: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 1px solid black;
}
.stats_stat_button {
  background: #ffffff;
  border: none;
  grid-column: 3/5;
  padding: 15px;
  font-size: 20px;
}
.lineup_stat_button {
  background: #ffffff;

  grid-column: 1/3;
  font-size: 20px;
  padding: 15px;
}
.stats_stat_button:hover {
  background-color: lightgray;
}
.lineup_stat_button:hover {
  background-color: lightgray;
}
.selected_button {
  background-color: lightgray;
  border-bottom: 1px solid black;
}
.header_team {
  font-size: 56px;
}
</style>