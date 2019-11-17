<template>
  <div>
    <div class="chart">
      <div class="csgo-home-player-card">{{home}}</div>
      <apexchart
        class="RadarChart"
        type="radar"
        height="300"
        :options="chartOptions"
        :series="series"
      />
      <div class="csgo-away-player-card">{{away}}</div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "RadarChart",
  props: ["away", "home"],
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: this.home.nickname,
          data: [
            this.home.statistics.kills,
            this.home.statistics.assists,
            this.home.statistics.deaths,
            this.home.statistics.headshots
          ]
        },
        {
          name: this.away.nickname,
          data: [
            this.away.statistics.kills,
            this.away.statistics.assists,
            this.away.statistics.deaths,
            this.away.statistics.headshots
          ]
        }
      ],

      chartOptions: {
        chart: {
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: this.home.nickname + " vs " + this.away.nickname,
          align: "center"
        },
        stroke: {
          width: 0
        },
        fill: {
          opacity: 0.4
        },
        markers: {
          size: 5
        },
        labels: ["Kills", "Assists", "Deaths", "Headshots"]
      }
    };
  }
};
</script>

<style>
.chart {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.RadarChart {
  grid-column: 2;
}
.csgo-home-player-card {
  grid-column: 1;
}
.csgo-away-player-card {
  grid-column: 3;
}
</style>
