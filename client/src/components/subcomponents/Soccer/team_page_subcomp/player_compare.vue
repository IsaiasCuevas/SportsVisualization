<template>
  <div class>
    <div
      v-if="player1.player_name != '' && player2.player_name != ''"
      style="text-align: center; justify-self: center; font-size: 24px;"
    >
      <a v-bind:href="'/soccer/team/' + id + '/players'" class="indepth"
        >View in depth analysis</a
      >
    </div>

    <div class="player1">
      <img
        v-if="player1.player_name != ''"
        src="../../../../assets/player.png"
        class="player_picture"
      />
      <br />
      {{ player1.player_name }}
    </div>
    <div class="align_center compare_stat" v-if="player1.player_name == ''">
      Select Players to Compare
    </div>
    <div class="player-comparison" v-if="player1.player_name != ''">
      <div
        class="p1_num"
        v-bind:class="
          player1.player_age < player2.player_age
            ? 'underline-text'
            : 'no-underline'
        "
      >
        {{ player1.player_age }}
      </div>
      <div class="compare_stat">Age</div>
      <div
        class="p2_num"
        v-bind:class="
          player1.player_age > player2.player_age
            ? 'underline-text'
            : 'no-underline'
        "
      >
        {{ player2.player_age }}
      </div>
      <div class="p1_num">{{ player1.player_country }}</div>
      <div class="compare_stat">Country</div>
      <div class="p2_num">{{ player2.player_country }}</div>
      <div
        class="p1_num"
        v-bind:class="
          player1.player_match_played > player2.player_match_played
            ? 'underline-text'
            : 'no-underline'
        "
      >
        {{ player1.player_match_played }}
      </div>
      <div class="compare_stat">Matches Played</div>
      <div
        class="p2_num"
        v-bind:class="
          player1.player_match_played < player2.player_match_played
            ? 'underline-text'
            : 'no-underline'
        "
      >
        {{ player2.player_match_played }}
      </div>
    </div>
    <div class="player2">
      <img
        v-if="player2.player_name != ''"
        src="../../../../assets/player.png"
        class="player_picture"
      />
      <br />
      {{ player2.player_name }}
    </div>
    <div class="player_chooser">
      <carousel
        :navigationEnabled="true"
        :paginationEnabled="false"
        :perPage="6"
      >
        <slide v-bind:key="index + 'player'" v-for="(players, index) in team">
          <slide>
            <div class="card2" v-on:click="selectPlayers(team[index])">
              <img src="../../../../assets/player.png" class="player_picture" />
              <br />
              {{ team[index].player_name }}
            </div>
          </slide>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "PlayerCompare",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      player1: { player_name: "" },
      player2: { player_name: "" }
    };
  },
  props: ["team", "img_url", "id"],
  methods: {
    selectPlayers: function(player) {
      if (this.player1.player_name == "") {
        this.player1 = player;
      } else if (this.player2.player_name == "") {
        this.player2 = player;
      } else if (
        this.player1.player_name != "" &&
        this.player2.player_name != ""
      ) {
        this.player1 = { player_name: "" };
        this.player2 = { player_name: "" };
        this.player1 = player;
      }
    }
  }
};
</script>

<style scoped>
.player_compare {
  font-family: "Oswald", sans-serif;
  grid-column: 2/6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0;
  border-radius: 5px;
  box-shadow: 0 3px 1px 2px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 1px 1px 2px rgba(0, 0, 0.5, 0.3) inset;
  -webkit-box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.3) inset;
}
.player_chooser {
  margin-top: 10px;
  grid-column: 1/6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  margin: 0;
}
.card2 {
  border-radius: 5%;
  background: lightgray;
  padding: 15px;
  text-align: center;
  text-shadow: none;
  font-size: 22px;
  font-family: "Oswald", sans-serif;
  margin: 5px;
  justify-content: center;
  align-self: center;
  color: black;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 1px 1px -1px rgba(0, 0, 0.5, 0.3) inset;
  -webkit-box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
}
.card2 img {
  height: 150px;
}

.player1 {
  grid-row: 1;
  grid-column: 1;
  font-size: 2em;
  justify-self: center;
  width: 80%;
  height: 80%;
  border-radius: 2%;
  background-color: #e8eff8;
  text-align: center;
  margin-top: 5%;
  padding-bottom: 1em;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0.5 1px 1px -1px rgba(0, 0, 0.5, 0.3) inset;
  -webkit-box-shadow: 0.5 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
  background-repeat: no-repeat;
}
.player1 img {
  height: 150px;
  padding: 5px;
}
.player2 {
  grid-row: 1;
  grid-column: 3;
  font-size: 2em;
  justify-self: center;
  width: 80%;
  height: 80%;
  border-radius: 2%;
  background-color: #e8eff8;
  text-align: center;
  margin-top: 5%;
  padding-bottom: 1em;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0.5 1px 1px -1px rgba(0, 0, 0.5, 0.3) inset;
  -webkit-box-shadow: 0.5 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
}
.player2 img {
  height: 150px;
  padding: 5px;
}
.player-comparison {
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-top: 50px;
  grid-row: 1;
  grid-column: 2;
  display: grid;
  text-align: center;
  grid-template-columns: 0.75fr 1.75fr 0.75fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1.25fr;
  padding: 0;
  margin-bottom: 10px;
}
.p1_num {
  justify-self: center;
}
.p2_num {
  justify-self: center;
}
.compare_stat {
  justify-self: center;
  font-size: 18px;
}
.VueCarousel {
  grid-column: 1/6;
  grid-row: 1;
  height: 100%;
  padding: 0;
  width: calc(100% - 50px);
  margin: 0 auto;
}
.VueCarousel-slide {
  grid-column: 1/6;
  display: grid;
  grid-template-rows: 150px, 25px, 25px;

  font-family: Arial;
  font-size: 24px;
  height: 100%;
  margin: none;
  padding: 10px;
  border: none;
}
.VueCarousel-navigation {
  padding: 0;
  height: 0;
}
.VueCarousel-pagination {
  padding: 0;
  height: 0;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
  top: 35%;
}
.align_center {
  align-self: center;
}
.underline-text {
  text-decoration: underline;
  font-size: 18px;
  color: black;
  text-shadow: 2px 2px 2px 1px black;
}
.indepth {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 10px;
  align-self: center;
  color: black;
  background: black;
}
</style>
