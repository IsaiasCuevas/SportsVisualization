<template>
  <div class="soccer_team_page">
    <div class="loading23" v-if="loading">
      <img src="../../assets/30.gif" />
    </div>
    <div class="team_page">
      <TeamPageHeader
        v-if="!loading"
        v-bind:name="team_name"
        v-bind:img_link="team_img_link"
        v-bind:coach="team_coach"
      />
      <PlayerCompare
        class="player_compare"
        v-bind:team="cards"
        v-bind:img_url="team_img_link"
        v-bind:id="teamid"
        v-if="!loading"
      />
      <div class="table" v-if="!loading">
        <md-table v-model="users" md-sort="player_goals" md-sort-order="desc" md-fixed-header>
          <md-table-toolbar>
            <h1 class="md-title">Scorers</h1>
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label md-numeric>{{ item.player_number }}</md-table-cell>
            <md-table-cell md-label="Name">{{ item.player_name }}</md-table-cell>
            <md-table-cell md-label="Goals" md-sort-by="player_goals">{{ item.player_goals }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <div class="table2" v-if="!loading">
        <md-table v-model="cards" md-sort="player_yellow_cards" md-sort-order="asc" md-fixed-header>
          <md-table-toolbar>
            <h1 class="md-title">Discipline</h1>
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label md-numeric>{{ item.player_number }}</md-table-cell>
            <md-table-cell md-label="Name">{{ item.player_name }}</md-table-cell>
            <md-table-cell md-label="Yellow Cards">{{ item.player_yellow_cards }}</md-table-cell>
            <md-table-cell md-label="Red Cards">{{ item.player_red_cards }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
    <div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TeamPageHeader from "../subcomponents/Soccer/team_page_subcomp/team_page_header";
import PlayerCompare from "../subcomponents/Soccer/team_page_subcomp/player_compare";
export default {
  name: "Soccer_Team",
  components: {
    TeamPageHeader,
    PlayerCompare
  },
  data() {
    return {
      currentSort: "name",
      currentSortOrder: "asc",
      users: [],
      cards: [],
      loading: true,
      team_data: [],
      teamid: 0,
      team_name: "",
      team_img_link: "",
      team_coach: ""
    };
  },
  async created() {
    this.loading = true;
    this.teamid = this.$route.params.teamid;
    try {
      const res = await axios.get(
        `/api/soccer/team/${this.$route.params.teamid}`
      );
      this.team_data = res.data.result[0];
      this.team_name = this.team_data.team_name;
      this.team_img_link = this.team_data.team_logo;
      this.team_coach = this.team_data.coaches[0];
      this.users = this.team_data.players;
      this.cards = this.team_data.players;
      console.log(this.team_data);
      this.loading = false;
    } catch (err) {
      this.loading = false;
    }
  }
};
</script>

<style >
.soccer_team_page {
  display: grid;
  grid-template-columns: 1fr;
  background: #ffffff;
}
.loading23 {
  text-align: center;
  margin-top: 50px;
  grid-column: 1;
}
.team_page {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.15fr 0.1fr 1fr 1fr;
}

.team_body {
  grid-row: 2;
  grid-column: 3/5;
  overflow-y: hidden;
  margin: 10px;
  padding: 0;
  background: white;
}
.more {
  grid-row: 4;
}
.player_compare {
  grid-row: 3;
  background: #f0f2f5;
}
.table {
  grid-row: 4;
  grid-column: 2/4;
  border-radius: 5px;
  font-size: 32px;
  font-family: "Oswald", sans-serif;
  background: #f0f2f5;
  box-shadow: 1px 1px 1px #999;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 1px 1px -1px rgba(0, 0, 0.5, 0.3) inset;
  -webkit-box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
  margin: 25px 5px;
}
.table2 {
  font-family: "Oswald", sans-serif;
  grid-row: 4;
  grid-column: 4/6;
  border-radius: 5px;
  background: #f0f2f5;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 1px 1px -1px rgba(0, 0, 0.5, 0.3) inset;
  -webkit-box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
  margin: 25px 5px;
}
.md-title {
  font-size: 32px;
}
.md-table-cell-container {
  width: 5%;
}
.md-table-cell {
  background: #f0f2f5;
  width: 25%;
}
.md-table-head {
  width: 25%;
}
.md-table {
  margin: 5px;
}
.md-table-toolbar h1 {
  text-align: center;
  background: white;
  font-size: 50px;
}
</style>