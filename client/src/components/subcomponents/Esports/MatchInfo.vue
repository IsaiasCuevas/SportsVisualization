<template>
  <div class="match-info">
    <img v-if="loading" class="loading" src="../../../assets/30.gif" alt />
    <div v-if="teams && !loading">
      <md-table v-model="team_data" md-card @md-selected="onSelect">
        <md-table-row
          slot="md-table-row"
          slot-scope="{ item }"
          md-selectable="multiple"
          md-auto-select
        >
          <md-table-cell md-label="Abbrev" md-sort-by="name">{{ item.abbreviation }}</md-table-cell>
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <div v-if="!teams && !loading">
      <div class="cs-match-container">
        <div class="home-team-header">
          <span
            class="csgo_team_name"
          >{{page_data.data.competitors[0].name ? page_data.data.competitors[0].name : 'Uknown'}}</span>
          <span
            v-bind:class="page_data.sport.home_score > page_data.sport.away_score ? 'win score' : 'lose score' "
          >{{page_data.sport.home_score}}</span>
        </div>
        <div class="away-team-header">
          <span
            class="csgo_team_name"
          >{{page_data.data.competitors[1].name ? page_data.data.competitors[1].name : 'Uknown'}}</span>
          <span
            v-bind:class="page_data.sport.away_score > page_data.sport.home_score ? 'win score' : 'lose score' "
          >{{page_data.sport.away_score}}</span>
        </div>

        <ul class="map-list">
          <li v-bind:key="index + 'game'" v-for="(game, index) in page_data.sport.period_scores">
            <img
              class="map_image"
              :src="require(`@/assets/${game.map_name ? game.map_name : 'unknown'}.jpg`)"
            />
            <br />
            <span>
              <span
                v-bind:class="game.home_score > game.away_score ? 'win' : 'lose' "
              >{{game.home_score}}</span>:
              <span
                v-bind:class="game.away_score> game.home_score ? 'win' : 'lose' "
              >{{game.away_score}}</span>
            </span>
          </li>
        </ul>

        <div class="game_stats" v-if="page_data.data.season">
          <CSGOCompare v-bind:id="page_data.data.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CSGOCompare from "./CSGO/MatchStatCompare";
import { bus } from "../../../main";
import axios from "axios";
export default {
  name: "MatchInfo",
  components: {
    CSGOCompare
  },
  data() {
    return {
      selected: [],
      page_data: [{ statistics: {} }],
      team_data: null,
      teams: false,
      loading: false
    };
  },
  //Will listen for events to be triggered on the bus and will react accordingly.
  async created() {
    //When the "changeID" event is triggered the GET request will be made and the response will be displayed.
    bus.$on("changeID", async data => {
      this.loading = true;
      this.teams = false;
      try {
        const res = await axios.get(`/api/esports/match/${data}`);
        this.page_data = res.data;
        this.loading = false;
      } catch (err) {
        this.loading = false;
      }
    });
    //When the "getTeams" event is triggered the GET request will be made and the response will be displayed.
    bus.$on("getTeams", async () => {
      this.loading = true;
      this.teams = true;
      try {
        const res = await axios.get(`/api/esports/teams`);
        this.team_data = res.data;
        this.loading = false;
      } catch (err) {
        this.loading = false;
      }
    });
  },
  methods: {
    onSelect(items) {
      this.selected = items;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
.match-info {
  border: 1px solid black;
  background: #ffffff;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 3px 1px 2px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 1px 1px 3px rgba(0, 0, 0.5, 0.3) inset;
  -webkit-box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.3) inset;
}
.cs-match-container {
  background: #ffffff;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 15% 0.25fr 1.5fr;
  border-bottom: 1px solid black;
}
.map-list {
  grid-row: 2;
  grid-column: 2;
  list-style-type: none;
}
.home-team-header {
  font-size: 24px;
  font-family: "Oswald", sans-serif;
  grid-column: 1/3;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 10px;
}
.away-team-header {
  font-size: 24px;
  font-family: "Oswald", sans-serif;
  grid-column: 4/6;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 10px;
}
.game_stats {
  grid-row: 3;
  grid-column: 1/7;
}
.map_image {
  height: 100px;
  width: 200px;
}
.win {
  color: green;
  font-size: 18px;
}
.lose {
  color: red;
  font-size: 18px;
}
.score {
  grid-row: 2;
  justify-self: center;
  margin: 10px;
  font-size: 28px;
  padding-top: 25px;

}
.event_info {
  grid-row: 1;
  grid-column: 3;
  margin: 15px;
  padding: 10px;
  justify-self: center;
  align-self: end;
}
.csgo_team_name {
  font-size: 42px;
  margin-top: 25px;
}
.loading{
  text-align: center;
  justify-self: center;
  padding-left: 45%;
  padding-top: 25%;
}
</style>