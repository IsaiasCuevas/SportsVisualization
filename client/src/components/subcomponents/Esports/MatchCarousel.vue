<template>
  <div class="match-carousel">
    <img v-if="loading" src="../../../assets/30.gif" alt />
    <Carousel v-if="!loading" :navigationEnabled="true" :paginationEnabled="false" :perPage="6">
      <Slide v-bind:key="index + 'match'" v-for="(i, index) in match">
        <div class="header-card" v-on:click="setID(i.sport_event.id)">
          <div class="time" v-if="i.sport_event_status.match_status == 'ended'">Finished</div>
          <div class="time" v-if="i.sport_event_status.match_status != 'ended'">time</div>
          <div class="home">{{i.sport_event.competitors[0].name}}</div>
          <div class="home-score">
            {{i.sport_event_status.period_scores[0].home_score}}
            <span>({{i.sport_event_status.home_score}})</span>
          </div>
          <div class="away">{{i.sport_event.competitors[1].name}}</div>
          <div class="away-score">
            {{i.sport_event_status.period_scores[0].away_score}}
            <span>({{i.sport_event_status.away_score}})</span>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { bus } from "../../../main";
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "MatchCarousel",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      match: null,
      loading: false
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      try {
        const res = await axios.get("api/esports");
        const data = res.data;

        this.match = data;
        console.log(this.match);
        this.loading = false;
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
    },
    setID: function(newID) {
      bus.$emit("changeID", newID);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.match-carousel {
  margin-top: 10px;
  grid-column: 2/5;
  color: black;
  padding: 10px;
}
.match-schedule {
  grid-column: 4;
  grid-row: 2;
}
.VueCarousel-slide {
  font-family: var(--heading-font-family);
  color: #000000;
  border: none;
  height: 100%;

  background: #ffffff;
}
.header-card {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 35px 35px 35px 35px;
}
.home {
  font-size: 15px;
  grid-column: 1;
  grid-row: 2;
  justify-self: start;
  align-self: center;
  padding: 2px;
  overflow: hidden;
}
.away {
  font-size: 15px;
  grid-column: 1;
  grid-row: 3;
  justify-self: start;
  align-self: center;
  padding: 5px;
  overflow: hidden;
}
.home-score {
  font-size: 12px;
  grid-column: 2;
  grid-row: 2;
  justify-self: center;
  align-self: center;
}
.away-score {
  font-size: 12px;
  grid-column: 2;
  grid-row: 3;
  justify-self: center;
  align-self: center;
}
.time {
  grid-column: 1/3;
  padding: 5px;
  justify-self: end;
}
.button {
  height: 25px;
  border: none;
  grid-row: 4;
  margin: 5px;
}
.header-card:hover {
  background: #ececec;
}
</style>