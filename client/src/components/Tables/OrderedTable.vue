<template>
  <div>
    <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-row slot="md-table-row" v-for="(i, index) in users.home.players" :key="'0' + index">
        <md-table-cell md-label="Name" md-sort-by="name">{{ i.full_name }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import games from "../../BasketBallData/Game_Summary/4c06f6af-980b-41b3-85c3-5975d8e03956.json"
export default {
  name: "OrderedTable",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }

  },

  data() {
    return {
      selected: [],
      users: games
    };
  }
};
</script>
