<template>
  <div>
    <div class="modalcharts">
      <apexchart
        type="pie"
        width="250"
        :options="chartOptions"
        :series="series"
      />
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions3"
        :series="series3"
      />
      <apexchart
        type="pie"
        width="250"
        :options="chartOptions2"
        :series="series2"
      />
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "ModalChart",
  props: ["team1", "team2"],
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [this.team1.statistics.maps_won, this.team1.statistics.maps_lost],
      chartOptions: {
        labels: ["Maps Won", "Maps Lost"],
        legend: {
          show: true,
          position: "bottom"
        },
        colors: ["#56c376", "#ff0000"],
        title: {
          text: this.team1.name + "'s Win/Loss %",
          align: "this",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "18px",
            color: "#000000"
          }
        }
      },
      series2: [
        this.team2.statistics.maps_won,
        this.team2.statistics.maps_lost
      ],
      chartOptions2: {
        labels: ["Maps Won", "Maps Lost"],
        legend: {
          show: true,
          position: "bottom"
        },
        colors: ["#56c376", "#ff0000"],
        title: {
          text: this.team2.name + "'s Win/Loss %",
          align: "this",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "18px",
            color: "#000000"
          }
        }
      },
      series3: [
        {
          name: this.team1.name,
          data: [
            this.team1.statistics.maps_won,
            this.team1.statistics.maps_played,
            this.team1.statistics.maps_lost
          ]
        },
        {
          name: this.team2.name,
          data: [
            this.team2.statistics.maps_won,
            this.team2.statistics.maps_played,
            this.team2.statistics.maps_lost
          ]
        }
      ],
      chartOptions3: {
        chart: {
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ["Maps Won", "Maps Played", "Maps Lost"]
        },
        colors: ["#1091c8", "#ff0000"]
      }
    };
  }
};
</script>

<style>
.modalcharts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  justify-self: center;
}
</style>
