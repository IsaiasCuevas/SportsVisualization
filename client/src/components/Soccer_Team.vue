<template>
  <div>
    <div v-if="loading">
      <img src="../assets/30.gif" />
    </div>
    {{team_data.team_name}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Soccer_Team",
  data() {
    return {
      loading: false,
      team_data: [],
      teamid: 0
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