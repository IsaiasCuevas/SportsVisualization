<template>
  <div class="stats-header">
    <div class="home">
      <h1>
        <a
          class="home_team_link"
          v-bind:href="'/team/' +stats.home_team_key"
        >{{stats.event_home_team}}</a>
      </h1>
    </div>
    <div class="divider">
      <h1>-</h1>
    </div>
    <div class="away">
      <h1>
        <a
          class="away_team_link"
          v-bind:href="'/team/' +stats.away_team_key"
        >{{stats.event_away_team}}</a>
      </h1>
    </div>

    <div class="goals">
      <ul class="home_goals">
        <li :key="'scorer' + index" v-for=" (scorer, index) in stats.goalscorers">
          <img v-if="scorer.home_scorer != ''" class="mini_ball" src="../../../assets/soccer2.png" />
          {{scorer.home_scorer}}
          <span v-if="scorer.home_scorer != ''">({{scorer.time}}')</span>
        </li>
      </ul>
      <ul class="away_goals">
        <li :key="'scorer' + index" v-for=" (scorer, index) in stats.goalscorers">
          <img v-if="scorer.away_scorer != ''" class="mini_ball" src="../../../assets/soccer2.png" />
          {{scorer.away_scorer}}
          <span v-if="scorer.away_scorer != ''">({{scorer.time}}')</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchHeader",

  data() {
    return {};
  },
  props: ["stats"]
};
</script>

<style>
.stats-header {
  border: 1px solid black;
  grid-column: 1/6;
  height: 100%;
  min-height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: darkgrey;
}
.away {
  grid-column: 4/5;
  justify-self: center;
  align-self: center;
}

.home {
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
}
.divider {
  grid-column: 3/4;
  justify-self: center;
  align-self: center;
  padding: 5px;
  font-size: 24px;
}
.away h1 {
  font-family: "Oswald", sans-serif;
  font-size: 52px;
}
.home h1 {
  font-family: "Oswald", sans-serif;
  font-size: 52px;
}
.goals {
  grid-column: 1/6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.goals ul {
  padding: 0;
  list-style-type: none;
}
.home_goals {
  font-size: 18px;
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
}
.away_goals {
  font-size: 18px;
  grid-column: 4/5;
  justify-self: center;
  align-self: center;
}
.mini_ball {
  height: 15px;
  width: 15px;
}
.home_team_link {
  color: black;
  text-decoration: underline;
}
.away_team_link {
  color: black;
  text-decoration: underline;
}
</style>