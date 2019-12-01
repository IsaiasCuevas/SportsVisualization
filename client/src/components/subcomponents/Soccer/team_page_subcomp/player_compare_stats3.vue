<template>
  <div class="advanced_stats">
    <p
      style="text-align: center; font-size: 32px;"
      v-if="this.p1.player_red_cards == '0' && this.p2.player_red_cards == '0'"
    >Neither players have recieved a Red Card</p>
    <apexchart v-else type="pie" height="400" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "PlayerCompareStats3",
  props: ["p1", "p2"],
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        parseInt(this.p1.player_red_cards),
        parseInt(this.p2.player_red_cards)
      ],
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
          text: "Red Cards",
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