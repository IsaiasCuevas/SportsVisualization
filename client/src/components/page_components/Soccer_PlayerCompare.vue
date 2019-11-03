<template>
  <div class="player_compare_page">
    <TeamPageHeader
      v-if="!loading"
      v-bind:name="team_name"
      v-bind:img_link="team_img_link"
      v-bind:coach="team_coach"
    />
    <div class="team_page">
      <PlayerCompareExt class="player_compare-ext" v-bind:team="players" v-if="!loading" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TeamPageHeader from "../subcomponents/Soccer/team_page_subcomp/team_page_header";
import PlayerCompareExt from "../subcomponents/Soccer/team_page_subcomp/player_compare_ext";
export default {
  name: "Soccer_PlayerCompare",
  components: {
    PlayerCompareExt,
    TeamPageHeader
  },
  data() {
    return {
      team_coach: "",
      team_name: "",
      team_img_link: "",
      loading: false,
      teamid: 0,
      players: []
    };
  },
  async created() {
    this.loading = true;
    this.teamid = this.$route.params.teamid;
    try {
      const res = await axios.get(
        `/api/soccer/team/${this.$route.params.teamid}`
      );
      console.log(res);
      this.players = res.data.result[0].players;
      this.team_name = res.data.result[0].team_name;
      this.team_img_link = res.data.result[0].team_logo;
      this.team_coach = res.data.result[0].coaches[0];

      this.loading = false;
    } catch (err) {
      this.loading = false;
    }
  }
};
</script>

<style>
.player_compare_page {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
}
.team_page {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.15fr 0.1fr 0.5fr 1fr;
}
</style>