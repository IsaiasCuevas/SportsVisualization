<template>
  <div>
    <div v-if="loading">
      <img src="../../../../assets/30.gif" alt />
    </div>
    <div v-if="!loading" class="csgo-match-compare">
      <div class="tables">
        <nav-tabs-card>
          <md-tabs class="md-success" md-alignment="left">
            <md-tab md-label="All Maps" class="csgo-match-compare">
              <md-table
                v-model="match_data.statistics.teams[0].players"
                md-card
                @md-selected="onSelect"
              >
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="single"
                  md-auto-select
                >
                  <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                  <md-table-cell md-label="IGN">{{
                    item.nickname
                  }}</md-table-cell>
                  <md-table-cell md-label="Kills">{{
                    item.statistics.kills
                  }}</md-table-cell>
                  <md-table-cell md-label="Deaths">{{
                    item.statistics.deaths
                  }}</md-table-cell>
                </md-table-row>
              </md-table>
              <md-table
                v-model="match_data.statistics.teams[1].players"
                md-card
                @md-selected="onSelect2"
              >
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="single"
                  md-auto-select
                >
                  <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                  <md-table-cell md-label="IGN">{{
                    item.nickname
                  }}</md-table-cell>
                  <md-table-cell md-label="Kills">{{
                    item.statistics.kills
                  }}</md-table-cell>
                  <md-table-cell md-label="Deaths">{{
                    item.statistics.deaths
                  }}</md-table-cell>
                </md-table-row>
              </md-table>
            </md-tab>

            <md-tab
              v-bind:key="index + 'match'"
              v-for="(match, index) in match_data.statistics.maps"
              md-label="Map"
              class="csgo-match-compare"
            >
              <md-table
                v-model="match_data.statistics.maps[index].teams[0].players"
                md-card
                @md-selected="onSelect"
              >
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="single"
                  md-auto-select
                >
                  <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                  <md-table-cell md-label="IGN">{{
                    item.nickname
                  }}</md-table-cell>
                  <md-table-cell md-label="Kills">{{
                    item.statistics.kills
                  }}</md-table-cell>
                  <md-table-cell md-label="Deaths">{{
                    item.statistics.deaths
                  }}</md-table-cell>
                </md-table-row>
              </md-table>
              <md-table
                v-model="match_data.statistics.maps[0].teams[1].players"
                md-card
                @md-selected="onSelect2"
              >
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="single"
                  md-auto-select
                >
                  <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                  <md-table-cell md-label="IGN">{{
                    item.nickname
                  }}</md-table-cell>
                  <md-table-cell md-label="Kills">{{
                    item.statistics.kills
                  }}</md-table-cell>
                  <md-table-cell md-label="Deaths">{{
                    item.statistics.deaths
                  }}</md-table-cell>
                </md-table-row>
              </md-table>
            </md-tab>
          </md-tabs>
        </nav-tabs-card>
      </div>

      <div class="csgo-chart" v-if="away_player != null && home_player != null">
        <RadarChart v-bind:away="away_player" v-bind:home="home_player" />
      </div>
    </div>
  </div>
</template>

<script>
import RadarChart from "./RadarChart";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import axios from "axios";
export default {
  name: "CSGOCompare",
  props: ["id"],
  components: {
    RadarChart
  },
  data() {
    return {
      home_player: null,
      away_player: null,
      match_data: null,
      map_stats: null,
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    try {
      const res = await axios.get(`/api/esports/match/summary/${this.id}`);
      this.match_data = res.data;
      this.map_stats = res.data.statistics.maps;
      this.loading = false;
    } catch (err) {
      this.loading = false;
    }
  },
  methods: {
    onSelect(items) {
      this.home_player = items;
    },
    onSelect2(items) {
      this.away_player = items;
    }
  }
};
</script>

<style>
.csgo-match-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
}
.tables {
  grid-column: 1/3;
}
.csgo-chart{
  grid-column: 1/3;


}
</style>
