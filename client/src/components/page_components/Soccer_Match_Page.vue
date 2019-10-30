<template>
  <div class="match-page">
    <MatchPageHeader
      v-bind:stats="team_data"
      v-on:changeLineup="changeLineup()"
      v-on:changeStats="changeStats()"
    />
    <Lineups
      v-if="stat_type == 'lineup'"
      v-bind:stats="team_data"
      v-on:changeHome="changeHome()"
      v-on:changeAway="changeAway()"
    />
    <PitchLineup
      v-if="stat_type == 'lineup'"
      class="pitch-1"
      v-bind:stats="team_data"
      v-bind:who="who"
    />
    <TeamMatchupStats v-if="stat_type == 'stats'" v-bind:match="team_data" class="stats" />
    <div class="loading" v-if="loading">
      <img src="../../assets/30.gif" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Lineups from "../subcomponents/Soccer/match_page_subcomp/Lineups";
import PitchLineup from "../subcomponents/Soccer/match_page_subcomp/PitchLineup";
import MatchPageHeader from "../subcomponents/Soccer/match_page_subcomp/MatchPageHeader";
import TeamMatchupStats from "../subcomponents/Soccer/match_page_subcomp/TeamMatchupStats";
import MatchTimeline from "../subcomponents/Soccer/match_page_subcomp/MatchTimeline";
export default {
  name: "Soccer_Match_Page",
  components: {
    Lineups,
    PitchLineup,
    MatchPageHeader,
    TeamMatchupStats,
    MatchTimeline
  },
  data() {
    return {
      loading: false,
      team_data: [],
      who: "home",
      stat_type: "lineup"
    };
  },
  methods: {
    changeHome: function() {
      this.who = "home";
    },
    changeAway: function() {
      this.who = "away";
    },
    changeLineup: function() {
      this.stat_type = "lineup";
    },
    changeStats: function() {
      this.stat_type = "stats";
    }
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
.match-page {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1.3fr;
}
.pitch-1 {
  grid-column: 3/7;
  grid-row: 2;
}
.stats {
  grid-row: 2;
}
.loading {
  grid-row: 5;
  grid-column: 4;
  justify-self: center;
}
</style>