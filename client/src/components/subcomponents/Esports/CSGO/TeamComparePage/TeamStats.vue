<template>
  <div>
    <div class="asd">
      <apexchart
        type="bar"
        height="200"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        type="bar"
        height="200"
        :options="specificchartOptions"
        :series="specificseries"
      />
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "TeamStats",
  props: ["stats"],
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: this.stats.name + " Stats",
          data: [
            this.stats.statistics.matches_won,
            this.stats.statistics.matches_lost,
            this.stats.statistics.maps_played,
            this.stats.statistics.maps_won,
            this.stats.statistics.maps_lost,
            this.stats.statistics.matches_won
          ]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
          toolbar: {
            show: false
          },
          width: "400px"
        },
        plotOptions: {
          bar: {
            columnWidth: "25%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3
        },

        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"]
          }
        },
        xaxis: {
          labels: {},
          categories: [
            "Matches Won",
            "Matches Lost",
            "Maps Played",
            "Maps Won",
            "Maps Lost"
          ]
        },
        yaxis: {
          title: {
            text: "Count"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 25, 100]
          }
        },
        title: {
          text: "General Stats",
          floating: false,
          align: "center",
          style: {
            color: "#000000",
            fontSize: "24px"
          }
        }
      },
      specificseries: [
        {
          name: this.stats.name + " Stats",
          data: [
            this.stats.statistics.rounds_played,
            this.stats.statistics.rounds_won,
            this.stats.statistics.rounds_lost,
            this.stats.statistics.kills,
            this.stats.statistics.deaths,
            this.stats.statistics.assists
          ]
        }
      ],
      specificchartOptions: {
        chart: {
          height: 350,
          type: "bar",
          toolbar: {
            show: false
          },
          width: "800px"
        },
        plotOptions: {
          bar: {
            columnWidth: "25%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3
        },

        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"]
          }
        },
        xaxis: {
          labels: {
            rotate: -90
          },
          categories: [
            "Rounds Played",
            "Rounds Won",
            "Rounds Lost",
            "Kills",
            "Deaths",
            "Assists"
          ]
        },
        yaxis: {
          title: {
            text: "Count"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 25, 100]
          }
        },
        title: {
          text: "Round Stats",
          floating: false,
          align: "center",
          style: {
            color: "#000000",
            fontSize: "24px"
          }
        }
      }
    };
  }
};
</script>

<style>
.asd {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
