<template>
  <div>
    <div class="team_compare_page">
      <md-button class="md-primary md-raised matchupbutton" @click="getH2H()"
        >Team Matchups
      </md-button>

      <div class="back-button">
        <button v-on:click="goBack" v-if="team1 && team2">Back</button>
      </div>
      <div>
        <md-dialog :md-active.sync="showDialog">
          <md-dialog-title class="modhead">
            <img :src="getTeamPicture(team1.team.id)" />
            <span class="modal-team-name"
              >{{ team1.team.name }} <span style="font-size: 20px;"> vs </span>
              {{ team2.team.name }}</span
            >
            <img :src="getTeamPicture(team2.team.id)" />
          </md-dialog-title>
          <div class="matchup-charts">
            <ModalCharts
              class="modal-charts-comp"
              v-bind:team1="team1.statistics.team"
              v-bind:team2="team2.statistics.team"
            />
          </div>

          <div class="matchup-modal">
            <div
              v-bind:key="index + 'h2h'"
              v-for="(match, index) in h2h_results"
            >
              <md-card md-with-hover>
                <md-card-header>
                  <div class="md-title-date">
                    {{ match.sport_event.scheduled }}
                  </div>
                  <div class="md-title-tname">
                    {{ match.sport_event.tournament.name }}
                  </div>
                </md-card-header>
                <md-card-header>
                  <div class="md-title">
                    {{ team1.team.name }}
                    <span
                      v-bind:class="
                        match.sport_event_status.home_score >
                        match.sport_event_status.away_score
                          ? 'win_color'
                          : 'lose_color'
                      "
                    >
                      {{ match.sport_event_status.home_score }}
                    </span>
                    -

                    <span
                      v-bind:class="
                        match.sport_event_status.home_score <
                        match.sport_event_status.away_score
                          ? 'win_color'
                          : 'lose_color'
                      "
                      >{{ match.sport_event_status.away_score }}</span
                    >
                    {{ team2.team.name }}
                  </div>
                </md-card-header>

                <md-card-content> </md-card-content>
              </md-card>
            </div>
          </div>

          <md-dialog-actions>
            <md-button class="md-primary" @click="showDialog = false"
              >Close</md-button
            >
          </md-dialog-actions>
        </md-dialog>
      </div>
      <div class="team-compare-container">
        <div class="team_compare_home_title" v-if="team1">
          <div class="team_image">
            <img :src="getTeamPicture(team1.team.id)" />
          </div>
          <div class="team_title">
            {{ team1.team.name }}
          </div>

          <div class="team_choose_button" v-on:click="setTeam1Roster()">
            <a>Roster</a>
          </div>
          <div class="team_choose_button" v-on:click="setTeam1Stats()">
            <a>Stats</a>
          </div>
        </div>
        <div class="team_compare_home_info" v-if="team1_roster">
          <div class="team-players">
            <div
              class="player"
              v-bind:key="index + ' player1'"
              v-for="(player, index) in team1.statistics.players"
              v-on:click="setTeam1Player(player)"
            >
              <div>{{ player.nickname }}</div>
              <div><img v-bind:src="getPlayerPicture(player.id)" /></div>
            </div>
          </div>
        </div>

        <div class="team_compare_home_info" v-if="team1_stats">
          <TeamStats
            v-bind:stats="team1.statistics.team"
            v-bind:results="team1_results"
          />
        </div>
        <div class="team_compare_away_title" v-if="team2">
          <div class="team_image">
            <img :src="getTeamPicture(team2.team.id)" />
          </div>
          <div class="team_title">{{ team2.team.name }}</div>

          <div class="team_choose_button" v-on:click="setTeam2Roster()">
            <a>Roster</a>
          </div>
          <div class="team_choose_button" v-on:click="setTeam2Stats()">
            <a>Stats</a>
          </div>
        </div>
        <div class="team_compare_away_info" v-if="team2_roster">
          <div class="team-players">
            <div
              class="player"
              v-bind:key="index + ' player'"
              v-for="(player, index) in team2.statistics.players"
              v-on:click="setTeam2Player(player)"
            >
              <div>{{ player.nickname }}</div>
              <div><img v-bind:src="getPlayerPicture(player.id)" /></div>
            </div>
          </div>
        </div>
        <div class="team_compare_away_info" v-if="team2_stats">
          <TeamStats
            v-bind:stats="team2.statistics.team"
            v-bind:results="team2_results"
          />
        </div>
      </div>
      <div class="highlighted-player1">
        <md-card v-if="team1currentplayer">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ team1currentplayer.nickname }}</div>
              <div class="md-subhead-updates">
                {{ team1currentplayer.statistics.maps_played }} Maps Played
              </div>
              <div class="md-subhead-updates">
                {{ team1currentplayer.statistics.maps_won }} Maps Won
              </div>
              <div class="md-subhead-updates">
                {{ team1currentplayer.statistics.maps_lost }} Maps Lost
              </div>
              <div class="md-subhead-updates">
                {{ team1currentplayer.statistics.kills }} Total Kills
              </div>
              <div class="md-subhead-updates">
                {{ team1currentplayer.statistics.deaths }}Total Deaths
              </div>
            </md-card-header-text>

            <md-card-media md-medium>
              <img
                style="height:125px; width:100px;"
                v-bind:src="getPlayerPicture(team1currentplayer.id)"
              />
            </md-card-media>
          </md-card-header>
        </md-card>
      </div>
      <div class="highlighted-player2">
        <md-card v-if="team2currentplayer">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ team2currentplayer.nickname }}</div>
              <div class="md-subhead-updates">
                {{ team2currentplayer.statistics.maps_played }} Maps Played
              </div>
              <div class="md-subhead-updates">
                {{ team2currentplayer.statistics.maps_won }} Maps Won
              </div>
              <div class="md-subhead-updates">
                {{ team2currentplayer.statistics.maps_lost }} Maps Lost
              </div>
              <div class="md-subhead-updates">
                {{ team2currentplayer.statistics.kills }} Total Kills
              </div>
              <div class="md-subhead-updates">
                {{ team2currentplayer.statistics.deaths }} Total Deaths
              </div>
            </md-card-header-text>

            <md-card-media md-medium>
              <img
                style="height:125px; width:100px;"
                v-bind:src="getPlayerPicture(team2currentplayer.id)"
              />
            </md-card-media>
          </md-card-header>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import ModalCharts from "./ModalCharts";
import TeamStats from "./TeamStats";
import axios from "axios";
export default {
  name: "TeamComparePage",
  components: {
    TeamStats,
    ModalCharts
  },
  data() {
    return {
      showDialog: false,
      isLoading: false,
      team1: null,
      team2: null,
      teamid1: 0,
      teamid2: 0,
      team1_stats: false,
      team1_roster: true,
      team2_stats: false,
      team2_roster: true,
      team1currentplayer: null,
      team2currentplayer: null,
      team1_results: null,
      team2_results: null,
      h2h_results: null
    };
  },
  created() {
    this.teamid1 = this.$route.params.teamid;
    this.teamid2 = this.$route.params.teamid2;
  },
  async mounted() {
    setTimeout(async () => {
      try {
        const res = await axios.get(`/api/esports/team/${this.teamid1}`);
        this.team1 = res.data;
      } catch (err) {
        console.log(err);
      }
    }, 1000);
    setTimeout(async () => {
      try {
        const res = await axios.get(`/api/esports/team/${this.teamid2}`);
        this.team2 = res.data;
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    }, 2000);
  },
  methods: {
    getPlayerPicture: function(id) {
      const idArr = id.split(":");
      return (
        "https:/ls.sportradar.com/ls/players/eslsmall/" + idArr[2] + ".png"
      );
    },
    getTeamPicture: function(id) {
      const idArr = id.split(":");
      return "https://ls.sportradar.com/ls/crest/big/" + idArr[2] + ".png";
    },
    goBack() {
      this.$router.go(-1);
    },
    setTeam1Roster() {
      this.team1_stats = false;
      this.team1_roster = true;
    },
    async setTeam1Stats() {
      this.team1_roster = false;
      this.team1_stats = true;
      if (!this.team1_results) {
        try {
          const res = await axios.get(
            `/api/esports/team/results/${this.teamid1}`
          );
          this.team1_results = res.data;
          console.log(this.team1_results);
        } catch (err) {
          console.log(err);
        }
      }
    },
    setTeam2Roster() {
      this.team2_stats = false;
      this.team2_roster = true;
    },
    async setTeam2Stats() {
      this.team2_roster = false;
      this.team2_stats = true;
      if (!this.team2_results) {
        try {
          const res = await axios.get(
            `/api/esports/team/results/${this.teamid2}`
          );
          this.team2_results = res.data;
          console.log(this.team2_results);
        } catch (err) {
          console.log(err);
        }
      }
    },
    setTeam1Player(player) {
      this.team1currentplayer = player;
    },
    setTeam2Player(player) {
      this.team2currentplayer = player;
    },
    async getH2H() {
      this.showDialog = true;
      if (this.h2h_results == null) {
        try {
          const response = await axios.get(
            `/api/esports/h2h/${this.teamid1}/${this.teamid2}`
          );
          this.h2h_results = response.data;
          console.log(this.h2h_results);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
.team_compare_page {
  display: grid;
  grid-template-columns: 0.25fr 0.5fr 0.5fr 0.25fr 0.3fr;
}
.team-compare-container {
  grid-column: 2/4;
  display: grid;
  grid-template-rows: 0.1fr 0.25fr 0.1fr 0.25fr;
  grid-row-gap: 25px;
  justify-self: center;
}
.team_compare_home_title {
  font-family: "Oswald", sans-serif;
  display: grid;
  grid-template-columns: 50px 200px 80px 80px;
  align-self: center;
  text-decoration: underline;
}
.team_title {
  justify-self: center;
  align-self: center;
  font-size: 42px;
}
.team_compare_away_title {
  font-family: "Oswald", sans-serif;
  display: grid;
  grid-template-columns: 50px 200px 80px 80px;
  align-self: center;
  text-decoration: underline;
}
.team_image {
  padding: 0;
  margin: 0;
}
.team_image img {
  height: 50px;
}
.team-players {
  display: grid;
  grid-template-columns: 175px 175px 175px 175px 175px 175px;
  grid-template-rows: 250px;
  justify-self: center;
}
.player {
  border: 1px solid black;
  display: grid;
  grid-template-rows: 15px;
  justify-self: center;
  align-self: center;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  grid-row-gap: 10px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
  margin: 5px;
  cursor: pointer;
}
.player:hover {
  background: #f8f8f8;
}
.back-button {
  grid-column: 4;
  justify-self: center;
  align-self: center;
  margin: 10px;
}
.back-button button {
  padding: 10px 25px;
  border-radius: 5px;
  background: white;
}
.back-button button:hover {
  background: #f8f8f8;
}

.team_choose_button {
  border: 1px solid black;
  justify-self: center;
  padding: 5px 15px;
  color: black;
  align-self: center;
}
.team_choose_button a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.team_choose_button:hover {
  background: #f8f8f8;
}
.team_choose_button a:link {
  color: black;
}

/* visited link */
.team_choose_button a:visited {
  color: black;
}

/* mouse over link */
.team_choose_button a:hover {
  color: black;
}

/* selected link */
.team_choose_button a:active {
  color: black;
}
.highlighted-player1 {
  grid-row: 2;
  grid-column: 5;
  align-self: center;
  margin-top: -75%;
  margin-left: -50%;
  margin-right: 25%;
}
.highlighted-player2 {
  grid-row: 3;
  grid-column: 5;
  align-self: center;
  margin-left: -50%;
  margin-top: -75%;
  margin-right: 25%;
}
.md-subhead-updates {
  color: black;
}
.modal-team-name {
  font-size: 34px;
  padding: 25px;
}
.matchup-modal {
  height: auto;
  width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  overflow: scroll;
}
.matchup-charts {
  height: auto;
  width: 1050px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.win_color {
  color: green;
}
.lose_color {
  color: red;
}
.md-title-date {
  font-size: 18px;
  text-align: center;
}
.md-title-tname {
  font-size: 24px;
  text-align: center;
}
.modal-charts-comp {
  grid-column: 1/3;
}
.modhead img {
  height: 100px;
}
.matchupbutton {
  grid-column: 2/4;
}
</style>
