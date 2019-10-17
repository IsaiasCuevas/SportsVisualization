<template>
  <div>
    <div v-if="loading">
      <img src="../assets/30.gif" />
    </div>
    {{team_data.event_away_team}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Soccer_Match_Page",
  data() {
    return {
      loading: false,
      team_data: []
    };
  },
  async created() {
    this.loading = true;
    this.teamid = this.$route.params.teamid;
    try {
      const res = await axios.get(
        `/api/soccer/getmatch/${this.$route.params.matchid}`
      );
      this.team_data = res.data.result[0];
      console.log(this.team_data);
      this.loading = false;
    } catch (err) {
      this.loading = false;
    }
  }
};
</script>

<style>
</style>