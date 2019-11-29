<template>
  <div class="csgo-timeline-container">
    <span class="map-number" v-if="!loading">Map 1</span>
    <div class="timeline-labels" v-if="!loading">
      <span class="home-timeline-label">{{ home_name }}:</span>
      <br />
      <br />
      <span class="away-timeline-label">{{ away_name }}</span>
    </div>
    <div class="csgo-timeline" v-if="!loading">
      <ul class="cs_timeline">
        <li :key="index + 'round'" v-for="(round, index) in tl_data">
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'terrorists_win' && round.period == 1"
            src="../../../../assets/t_win.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>CT`s Eliminated'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'target_bombed' && round.period == 1"
            src="../../../../assets/bomb_exploded.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>Targer Bombed'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'bomb_defused' && round.period == 1"
            src="../../../../assets/bomb_defused.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>Bomb Defused'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="
              round.winning_reason == 'counter_terrorists_win' &&
                round.period == 1
            "
            src="../../../../assets/ct_win.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>T`s Eliminated'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'target_saved' && round.period == 1"
            src="../../../../assets/stopwatch.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>T`s Saved'
            }"
          />
        </li>
      </ul>
    </div>
    <span class="map-number" v-if="!loading">Map 2</span>
    <div class="timeline-labels" v-if="!loading">
      <span class="home-timeline-label">{{ home_name }}:</span>
      <br />
      <br />
      <span class="away-timeline-label">{{ away_name }}</span>
    </div>
    <div class="csgo-timeline" v-if="!loading">
      <ul class="cs_timeline">
        <li :key="index + 'round'" v-for="(round, index) in tl_data">
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'terrorists_win' && round.period == 2"
            src="../../../../assets/t_win.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>CT`s Eliminated'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'target_bombed' && round.period == 2"
            src="../../../../assets/bomb_exploded.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>Target Bombed'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'bomb_defused' && round.period == 2"
            src="../../../../assets/bomb_defused.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>Bomb Defused'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="
              round.winning_reason == 'counter_terrorists_win' &&
                round.period == 2
            "
            src="../../../../assets/ct_win.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>T`s Eliminated'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'target_saved' && round.period == 2"
            src="../../../../assets/stopwatch.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>T`s Saved'
            }"
          />
        </li>
      </ul>
    </div>
    <span class="map-number" v-if="!loading">Map 3</span>
    <div class="timeline-labels" v-if="!loading">
      <span class="home-timeline-label">{{ home_name }}:</span>
      <br />
      <br />
      <span class="away-timeline-label">{{ away_name }}</span>
    </div>
    <div class="csgo-timeline" v-if="!loading">
      <ul class="cs_timeline">
        <li :key="index + 'round'" v-for="(round, index) in tl_data">
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'terrorists_win' && round.period == 3"
            src="../../../../assets/t_win.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>CT`s Eliminated'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'target_bombed' && round.period == 3"
            src="../../../../assets/bomb_exploded.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>Target Bombed'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'bomb_defused' && round.period == 3"
            src="../../../../assets/bomb_defused.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>Bomb Defused'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="
              round.winning_reason == 'counter_terrorists_win' &&
                round.period == 3
            "
            src="../../../../assets/ct_win.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>T`s Eliminated'
            }"
          />
          <img
            :class="round.winner == 'home' ? 'home_win' : 'away_win'"
            class="tl_image"
            v-if="round.winning_reason == 'target_saved' && round.period == 3"
            src="../../../../assets/stopwatch.png"
            v-tooltip="{
              content:
                'Winner: <br>' +
                (round.winner == 'home' ? home_name : away_name) +
                '<br> <br> Reason: <br>T`s Saved'
            }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CSGOMatchTimeline",
  props: ["match_id", "home_name", "away_name"],
  data() {
    return {
      tl_data: null,
      loading: true
    };
  },
  async mounted() {
    setTimeout(async () => {
      this.loading = true;
      try {
        const response = await axios.get(
          `api/esports/match/timeline/${this.match_id}`
        );
        const data = response.data;
        this.tl_data = data;
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  }
};
</script>

<style>
.cs_timeline {
  border: 1px solid black;
  list-style-type: none;
  border-radius: 5px;
  padding: 10px;
  background: #f3f3f3;
}
.cs_timeline li {
  display: inline;
}
.tl_image {
  height: 35px !important;
}
.map-number {
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
}
.home_win {
  margin-bottom: 50px;
}
.away_win {
  margin-top: 50px;
}
.csgo-timeline-container {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
}
.timeline-labels {
  grid-column: 1;
  justify-self: center;
  align-self: center;
}
.csgo-timeline {
  justify-self: start;
  grid-column: 2;
}
</style>
