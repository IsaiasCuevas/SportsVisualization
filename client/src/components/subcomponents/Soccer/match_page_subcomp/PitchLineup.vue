<template>
  <div>
    <div class="pitch" v-if="who == 'away'">
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[0].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[0].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[0].player_country}"
      >{{stats.lineups.away_team.starting_lineups[0].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[1].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[1].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[1].player_country}"
      >{{stats.lineups.away_team.starting_lineups[1].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[2].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[2].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[2].player_country}"
      >{{stats.lineups.away_team.starting_lineups[2].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[3].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[3].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[3].player_country}"
      >{{stats.lineups.away_team.starting_lineups[3].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[4].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[4].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[4].player_country}"
      >{{stats.lineups.away_team.starting_lineups[4].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[5].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[5].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[5].player_country}"
      >{{stats.lineups.away_team.starting_lineups[5].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[6].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[6].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[6].player_country}"
      >{{stats.lineups.away_team.starting_lineups[6].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[7].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[7].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[7].player_country}"
      >{{stats.lineups.away_team.starting_lineups[7].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[8].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[8].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[8].player_country}"
      >{{stats.lineups.away_team.starting_lineups[8].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[9].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[9].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[9].player_country}"
      >{{stats.lineups.away_team.starting_lineups[9].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.away_team.starting_lineups[10].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.away_team.starting_lineups[10].player_number +'<br>Country: '+ stats.lineups.away_team.starting_lineups[10].player_country}"
      >{{stats.lineups.away_team.starting_lineups[10].player}}</div>
    </div>
    <div class="pitch" v-if="who == 'home'">
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[0].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[0].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[0].player_country}"
      >{{stats.lineups.home_team.starting_lineups[0].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[1].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[1].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[1].player_country}"
      >{{stats.lineups.home_team.starting_lineups[1].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[2].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[2].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[2].player_country}"
      >{{stats.lineups.home_team.starting_lineups[2].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[3].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[3].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[3].player_country}"
      >{{stats.lineups.home_team.starting_lineups[3].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[4].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[4].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[4].player_country}"
      >{{stats.lineups.home_team.starting_lineups[4].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[5].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[5].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[5].player_country}"
      >{{stats.lineups.home_team.starting_lineups[5].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[6].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[6].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[6].player_country}"
      >{{stats.lineups.home_team.starting_lineups[6].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[7].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[7].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[7].player_country}"
      >{{stats.lineups.home_team.starting_lineups[7].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[8].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[8].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[8].player_country}"
      >{{stats.lineups.home_team.starting_lineups[8].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[9].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[9].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[9].player_country}"
      >{{stats.lineups.home_team.starting_lineups[9].player}}</div>
      <div
        v-bind:class="'p' + stats.lineups.home_team.starting_lineups[10].player_position"
        v-tooltip="{ content:  '#: ' + stats.lineups.home_team.starting_lineups[10].player_number +'<br>Country: '+ stats.lineups.home_team.starting_lineups[10].player_country}"
      >{{stats.lineups.home_team.starting_lineups[10].player}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PitchLineup",
  data() {
    return {};
  },
  props: ["stats", "who"]
};
</script>

<style>
.pitch {
  font-family: "Oswald", sans-serif;
  grid-column: 3/6;
  grid-row: 2/3;
  background-image: url("../../../../assets/soccer-pitch.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  border: 1px solid black;
}
.p1 {
  padding: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-weight: bold;
  border-radius: 10px;
  grid-row: 1;
  grid-column: 1/7;
  align-self: end;
  justify-self: center;
}
.p2 {
  padding: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  font-weight: bolder;
  border-radius: 10px;
  grid-row: 2;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
}
.p3 {
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-weight: bold;
  grid-row: 2;
  grid-column: 3/4;
  align-self: center;
  justify-self: center;
  border-radius: 10px;
}
.p4 {
  padding: 5px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  font-weight: bold;
  grid-row: 2;
  grid-column: 4/5;
  align-self: center;
  justify-self: center;
}
.p5 {
  padding: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  font-weight: bold;
  grid-row: 2;
  grid-column: 5/6;
  align-self: center;
  justify-self: center;
  border-radius: 10px;
}
.p6 {
  padding: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
  margin-right: 10px;
  grid-row: 3;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
}
.p7 {
  padding: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  margin: 5px;
  border-radius: 10px;
  font-weight: bold;
  grid-row: 3;
  grid-column: 3/4;
  align-self: center;
  justify-self: center;
}
.p8 {
  padding: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  border-radius: 10px;
  font-weight: bold;
  grid-row: 3;
  margin: 5px;
  grid-column: 4/5;
  align-self: center;
  justify-self: end;
}
.p9 {
  padding: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  grid-row: 3;
  grid-column: 5/6;
  align-self: center;
  justify-self: end;
}
.p10 {
  padding: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  font-weight: bold;
  grid-row: 4;
  border-radius: 10px;
  grid-column: 3/4;
  justify-self: center;
  align-self: center;
}
.p11 {
  padding: 5px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.748);
  color: white;
  font-size: 24px;
  font-weight: bold;
  grid-row: 4;
  border-radius: 10px;
  grid-column: 4/5;
  align-self: center;
  justify-self: center;
}
</style>