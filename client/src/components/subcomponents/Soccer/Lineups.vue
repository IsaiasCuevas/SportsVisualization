<template>
  <div class="Lineups">
    <div v-if="lineup == 'away'" class="lineup">
      <div class="lineup-select">
        <Button class="home_button" v-on:click="lineup = 'home'">Home</Button>
        <Button class="away_button selected_button" v-on:click="lineup = 'away'">Away</Button>
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

    <div v-if="lineup == 'home'" class="lineup">
      <div class="lineup-select">
        <Button class="home_button selected_button" v-on:click="lineup = 'home'">Home</Button>
        <Button class="away_button" v-on:click="lineup = 'away'">Away</Button>
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
      lineup: "home"
    };
  },
  props: ["stats"]
};
</script>

<style>
.Lineups {
  grid-column: 1/2;

  border: 1px solid black;
  height: 100%;
}

.lineup ul {
  padding: 0;
  list-style-type: none;
  justify-self: center;
}
.lineup-select {
  border: 1px solid black;
  width: auto;
  height: 10%;
  justify-self: center;
  text-align: center;
}
.number {
  font-weight: bold;
}
.home_button {
  padding: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.away_button {
  padding: 10px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
.selected_button {
  background-color: beige;
}
</style>