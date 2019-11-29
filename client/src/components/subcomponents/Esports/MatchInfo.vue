<template>
  <div class="match-info">
    <img v-if="loading" class="loading" src="../../../assets/30.gif" alt />
    <div v-if="teams && !loading">
      <div class="team-search">
        <span>You must have ONLY two selected teams to compare them.</span>
        <a
          :href="'/esports/team/' + selected[0].id + '/' + selected[1].id"
          v-if="selected.length == 2"
          >Compare Teams</a
        >
      </div>
      <md-table v-model="team_data" md-card @md-selected="onSelect">
        <md-table-row
          slot="md-table-row"
          slot-scope="{ item }"
          md-selectable="multiple"
          md-auto-select
        >
          <md-table-cell md-label="Abbrev" md-sort-by="name">{{
            item.abbreviation
          }}</md-table-cell>
          <md-table-cell md-label="Name" md-sort-by="name">{{
            item.name
          }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>

    <div v-if="!teams && !loading">
      <div class="cs-match-container">
        <div class="home-team-header">
          <div style="justify-self: center;">
            <img
              :src="'https://ls.sportradar.com/ls/crest/big/' + homeid + '.png'"
            />
          </div>
          <div style="align-self: center;">
            <span class="csgo_team_name">{{
              page_data.data.competitors[0].name
                ? page_data.data.competitors[0].name
                : "Uknown"
            }}</span>
          </div>

          <div style="justify-self: center;">
            <span
              v-bind:class="
                page_data.sport.home_score > page_data.sport.away_score
                  ? 'win score'
                  : 'lose score'
              "
              >{{ page_data.sport.home_score }}</span
            >
          </div>
        </div>
        <div class="game-time"></div>
        <div class="away-team-header">
          <div style="justify-self: center;">
            <img
              style="justify-self: center;"
              :src="'https://ls.sportradar.com/ls/crest/big/' + awayid + '.png'"
            />
          </div>
          <div style="align-self: center;">
            <span class="csgo_team_name">{{
              page_data.data.competitors[1].name
                ? page_data.data.competitors[1].name
                : "Uknown"
            }}</span>
          </div>
          <div style="justify-self: center;">
            <span
              v-bind:class="
                page_data.sport.away_score > page_data.sport.home_score
                  ? 'win score'
                  : 'lose score'
              "
              >{{ page_data.sport.away_score }}</span
            >
          </div>
        </div>
        <div class="divider"></div>

        <div class="map-list">
          <div
            v-bind:key="index + 'game'"
            v-for="(game, index) in page_data.sport.period_scores"
          >
            <img
              class="map_image"
              :src="
                require(`@/assets/${
                  game.map_name ? game.map_name : 'unknown'
                }.jpg`)
              "
            />
            <br />
            <span>
              <span
                v-bind:class="
                  game.home_score > game.away_score ? 'win' : 'lose'
                "
                >{{ game.home_score }}</span
              >:
              <span
                v-bind:class="
                  game.away_score > game.home_score ? 'win' : 'lose'
                "
                >{{ game.away_score }}</span
              >
            </span>
          </div>
        </div>
        <div class="match-links">
          <a
            class="link"
            v-for="(game, index) in page_data.data.streams"
            :key="index"
            :href="game.url"
            target="_blank"
            >Link</a
          >
        </div>
        <div class="match_tl">
          <CSGOMatchTimeline
            :match_id="page_data.data.id"
            :home_name="page_data.data.competitors[0].name"
            :away_name="page_data.data.competitors[1].name"
          />
        </div>

        <div class="game_stats" v-if="page_data.data.season">
          <CSGOCompare v-bind:id="page_data.data.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CSGOMatchTimeline from "./CSGO/CSGOMatchTimeline";
import CSGOCompare from "./CSGO/MatchStatCompare";
import { bus } from "../../../main";
import axios from "axios";
export default {
  name: "MatchInfo",
  components: {
    CSGOCompare,
    CSGOMatchTimeline
  },
  data() {
    return {
      selected: [],
      page_data: [{ statistics: {} }],
      team_data: null,
      teams: false,
      loading: false,
      homeid: null,
      awayid: null
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
        const homeid = this.page_data.data.competitors[0].id;
        const awayid = this.page_data.data.competitors[1].id;
        const hid = homeid.split(":");
        const aid = awayid.split(":");
        this.homeid = hid[2];
        this.awayid = aid[2];

        this.loading = false;
      } catch (err) {
        this.loading = false;
      }
    });
    //When the "getTeams" event is triggered the GET request will be made and the response will be displayed.
    bus.$on("getTeams", async () => {
      this.loading = true;
      this.teams = true;
      this.selected = [];
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
    },
    matchPage(team1id, team2id) {
      this.$route.router.go("/");
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
  background: #f3f3f3;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: auto;
}
.map-list {
  grid-row: 2;
  grid-column: 2;
  list-style-type: none;
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  justify-self: center;
  border-radius: 5px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
  background: white;
}
.home-team-header {
  font-size: 24px;
  font-family: "Oswald", sans-serif;
  grid-column: 2;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-rows: 1fr 0.75fr 0.3fr;
  grid-gap: 5px;
  margin-top: 25px;
}
.away-team-header {
  font-size: 24px;
  font-family: "Oswald", sans-serif;
  grid-column: 4;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-rows: 1fr 0.75fr 0.3fr;
}
.game-time {
  grid-column: 3;
  justify-self: center;
  align-self: center;
}
.game_stats {
  grid-row: 4;
  grid-column: 1/7;
}
.map_image {
  height: 100px;
  width: 250px;
  margin-top: 20px;
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
  margin-bottom: 10px;
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
  padding-left: 5px;
  justify-self: center;
}
.loading {
  text-align: center;
  justify-self: center;
  padding-left: 45%;
  padding-top: 25%;
}
.md-content.md-theme-default {
  background-color: #ececec !important;
}
.team-search {
  grid-column: 4;
  margin-top: 10px;
  color: black;
}
.team-search:hover {
  color: black;
}
.team-search a {
  border: 1px solid black;
  padding: 5px 10px;
  margin: 10px;
  background: rgba(255, 0, 0, 0.384);
}
.team-search a:link {
  color: black;
}

/* visited link */
.team-search a:visited {
  color: black;
}

/* mouse over link */
.team-search a:hover {
  color: black;
  text-decoration: none;
  background: #e0e0e0;
}

/* selected link */
.team-search a:active {
  color: black;
}
.match-links {
  display: grid;
  grid-template-rows: 50px 50px 50px 50px;
}
.link {
  border: 1px solid black;
  text-align: center;
  color: black !important;
  border-radius: 5px;
  font-size: 18px;
  align-self: center;
  padding: 10px;
}
.link:hover {
  border: 1px solid black;
  text-align: center;
  color: black !important;
  text-decoration: none;
  background: #ececec;
}
.match_tl {
  grid-row: 3;
  grid-column: 1/6;
}
</style>
