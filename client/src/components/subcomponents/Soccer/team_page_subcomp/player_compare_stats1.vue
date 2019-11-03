<template>
  <div class="advanced_stats">
    <p
      style="text-align: center; font-size: 32px;"
      v-if="this.p1.player_goals == '0' && this.p2.player_goals == '0'"
    >Neither players have scored a Goal</p>
    <apexchart v-else type="pie" height="500" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "PlayerCompareStats1",
  props: ["p1", "p2"],
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [parseInt(this.p1.player_goals), parseInt(this.p2.player_goals)],
      chartOptions: {
        labels: [this.p1.player_name, this.p2.player_name],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#ffffff"],
            fontSize: "25px"
          },
          offsetX: 30
        },
        title: {
          text: "Goals Scored",
          align: "center",
          margin: 15,
          floating: false,
          style: {
            fontFamily: "Oswald",
            fontSize: "25px",
            color: "black"
          }
        },
        colors: ["#252525", "#e3a953"],
        legend: {
          fontSize: "20px"
        }
      }
    };
  }
};
</script>

<style>
.advanced_stats {
  padding: 10px;
}
</style>