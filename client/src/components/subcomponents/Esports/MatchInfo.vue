<template>
  <div>
    <img v-if="loading" src="../../../assets/30.gif" alt />
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
    <div v-if="!teams && !loading">{{page_data}}</div>
  </div>
</template>

<script>
import { bus } from "../../../main";
import axios from "axios";
export default {
  name: "MatchInfo",
  data() {
    return {
      selected: [],
      page_data: null,
      team_data: null,
      teams: false,
      loading: false
    };
  },
  async created() {
    bus.$on("changeID", async data => {
      this.loading = true;
      this.teams = false;
      try {
        const res = await axios.get(`/api/esports/match/${data}`);
        this.page_data = res.data;
        console.log(this.page_data);
        this.loading = false;
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    });

    bus.$on("getTeams", async () => {
      this.loading = true;
      this.teams = true;
      try {
        const res = await axios.get(`/api/esports/teams`);
        this.team_data = res.data;
        console.log(this.team_data);
        this.loading = false;
      } catch (err) {
        console.log(err);
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
.md-table-cell {
  width: 15px;
}
</style>