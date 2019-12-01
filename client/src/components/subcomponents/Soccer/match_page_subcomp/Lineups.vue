<template>
  <div class="Lineups">
    <div v-if="!lineup" class="lineup">
      <div class="lineup-select">
        <Button class="home_button" v-on:click="changeHome()">Home</Button>
        <Button class="away_button selected_button" v-on:click="changeAway()">Away</Button>
      </div>
      <div class="modal_team_name">
        <h3>{{stats.event_away_team}}</h3>
      </div>
      <ul>
        <li
          v-for="(away_player, index) in stats.lineups['away_team'].starting_lineups"
          :key="'A'+ index"
        >
          <span class="number">{{away_player.player_number}}</span>
          {{away_player.player}}
        </li>
        <div class="modal_team_name">
          <h4>Subs</h4>
        </div>
        <li v-for="(away_sub, index) in stats.lineups['away_team'].substitutes" :key="'B'+ index">
          <span class="number">{{away_sub.player_number}}</span>
          {{away_sub.player}}
        </li>
      </ul>
    </div>

    <div v-if="lineup" class="lineup">
      <div class="lineup-select">
        <Button class="home_button selected_button" v-on:click="changeHome()">Home</Button>
        <Button class="away_button" v-on:click="changeAway()">Away</Button>
      </div>
      <div class="modal_team_name">
        <h3>{{stats.event_home_team}}</h3>
      </div>
      <ul>
        <li
          v-for="(home_player , index)  in stats.lineups['home_team'].starting_lineups"
          :key="'C'+ index"
        >
          <span class="number">{{home_player.player_number}}</span>
          {{home_player.player}}
        </li>
        <div class="modal_team_name">
          <h4>Subs</h4>
        </div>

        <li v-for="(home_sub, index)  in stats.lineups['home_team'].substitutes" :key="'D'+ index">
          <span class="number">{{home_sub.player_number}}</span>
          {{home_sub.player}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lineups",

  data() {
    return {
      lineup: true //True means home, false means away
    };
  },
  methods: {
    changeHome: function() {
      this.lineup = true;
      this.$emit("changeHome");
    },
    changeAway: function() {
      this.lineup = false;
      this.$emit("changeAway");
    }
  },
  props: ["stats"]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
/* width */
::-webkit-scrollbar {
  width: 5px;
  border: 1px solid black;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: gray;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.Lineups {
  grid-column: 2;
  border: 1px solid black;
  height: 100%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.247);
  overflow: scroll;
  overflow-x: hidden;
}
.Lineups button {
  border: none;
}
.lineup {
  margin: 0;
}

.lineup ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  justify-self: center;
  font-size: 18px;
}
.lineup-select {
  width: auto;
  height: 10%;
  justify-self: center;
  text-align: center;
}
.number {
  font-weight: bold;
  font-size: 24px;
  padding: 10px;
}
.home_button {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  margin: 0;
  padding: 10px;
  width: 50%;
  background-color: #ffffff;
  border: none;
}
.home_button:hover {
  border-bottom: 3px solid black;
}
.away_button {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  margin: 0;
  padding: 10px;
  width: 50%;
  background-color: #ffffff;
  border-left: 5px solid rgba(196, 19, 19, 0.247);
  border-bottom: 1px solid black;
}
.away_button:hover {
  border-bottom: 3px solid black;
}
.selected_button {
  background-color: #ffffff;
}
.modal_team_name {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  text-align: center;
}
</style>