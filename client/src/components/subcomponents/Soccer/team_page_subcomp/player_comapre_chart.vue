<template>
  <div class="advanced_stats">
    <apexchart type="bar" height="500" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "PlayerCompareChart",
  props: ["p1", "p2"],
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: this.p1.player_name,
          data: [
            this.p1.player_age,
            this.p1.player_match_played,
            this.p1.player_goals,
            this.p1.player_yellow_cards,
            this.p1.player_red_cards
          ]
        },
        {
          name: this.p2.player_name,
          data: [
            this.p2.player_age,
            this.p2.player_match_played,
            this.p2.player_goals,
            this.p2.player_yellow_cards,
            this.p2.player_red_cards
          ]
        }
      ],
      chartOptions: {
        chart: {
          background: "#ffffff",
          stacked: false,

          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,

            barHeight: "85%",
            dataLabels: {
              position: "top"
            }
          }
        },
        title: {
          text: this.p1.player_name + " vs " + this.p2.player_name,
          align: "center",
          margin: 10,
          floating: true,
          style: {
            fontFamily: "Oswald",
            fontSize: "24px",
            color: "black"
          }
        },
        colors: ["#cdcecd", "#e3a953"],

        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "15px",
            colors: ["#000000"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#000000"]
        },

        xaxis: {
          categories: ["Age", "Matches", "Goals", "Y Card", "R Card"],
          labels: {
            style: {
              colors: [],
              fontSize: "18px",
              fontFamily: "Helvetica, Arial, sans-serif",
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: [],
              fontSize: "18px",
              fontFamily: "Helvetica, Arial, sans-serif",
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
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