<template>
  <div class="charts-container">
    <h1 class="timeline-title">Match Timeline</h1>
    <MatchTimeline class="timeline-row" v-bind:eventID="match.event_key" />
    <br />
    <div class="charts">
      <div class="chart_card">
        <div class="card-stat-header">
          <h1 class="stats-comparison-title">{{match.event_home_team}}</h1>
          <h1></h1>
          <h1 class="stats-comparison-title">{{match.event_away_team}}</h1>
        </div>
        <div
          class="stat-comparison"
          :key="'stats' + index"
          v-for="(stats, index) in match.statistics"
        >
          <div
            class="stat-comparison-home"
            v-bind:class="[stats.home<stats.away ? 'red' : 'green' ]"
          >{{stats.home}}</div>
          <div class="stats-comparison-title">{{stats.type}}</div>
          <div
            class="stat-comparison-away"
            v-bind:class="[stats.away<stats.home ? 'red' : 'green' ]"
          >{{stats.away}}</div>
        </div>
      </div>
      <div class="chart_card2">
        <apexchart type="donut" width="350" :options="donutchartOptions" :series="donutseries" />
        <apexchart
          class="chart"
          type="bar"
          height="170"
          width="350"
          :options="GoalAttempts"
          :series="GoalAttemptsStats"
        />
        <apexchart
          class="chart"
          type="bar"
          height="170"
          width="350"
          :options="ShotsOnGoal"
          :series="ShotsOnGoalStats"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import MatchTimeline from "./MatchTimeline";
export default {
  name: "TeamMatchupStats",
  components: {
    apexchart: VueApexCharts,
    MatchTimeline
  },
  props: ["match"],
  created() {
    console.log(this.hi);
  },
  data() {
    return {
      hi: this.match,
      GoalAttemptsStats: [
        {
          name: "Home",
          data: [this.match.statistics[1].home]
        },
        {
          name: "Away",
          data: [this.match.statistics[1].away]
        }
      ],
      GoalAttempts: {
        chart: {
          background: "#f0f2f5",
          stacked: true,

          toolbar: {
            show: false
          }
        },
        colors: ["#252525", "#de9a35"],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "50%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        legend: {
          show: false
        },
        grid: {
          xaxis: {
            show: false,
            showLines: false
          },
          labels: {
            show: false
          }
        },
        yaxis: {
          showLines: false,
          min: -50,
          max: 50,
          labels: {
            show: false
          }
        },
        tooltip: {
          shared: false,
          x: {
            show: false,
            formatter: function(val) {
              return val;
            }
          },
          y: {
            formatter: function(val) {
              return Math.abs(val) + "";
            }
          }
        },
        title: {
          text: "Goal Attempts",
          align: "center",
          margin: 10,
          floating: true,
          style: {
            fontFamily: "Oswald",
            fontSize: "24px",
            color: "black"
          }
        },
        labels: {
          formatter: function(val) {
            return Math.abs(Math.round(val)) + "%";
          }
        }
      },
      ShotsOnGoalStats: [
        {
          name: "Home",
          data: [this.match.statistics[2].home]
        },
        {
          name: "Away",
          data: [this.match.statistics[2].away]
        }
      ],
      ShotsOnGoal: {
        chart: {
          background: "#f0f2f5",
          stacked: true,

          toolbar: {
            show: false
          }
        },
        colors: ["#252525", "#de9a35"],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: "bottom",
          horizontalAlign: "center",
          floating: false,
          fontSize: "22px",
          fontFamily: "Oswald, Arial",
          width: undefined,
          height: undefined,
          formatter: undefined,
          tooltipHoverFormatter: undefined,
          offsetX: 0,
          offsetY: 0,
          labels: {
            colors: undefined,
            useSeriesColors: false
          }
        },

        grid: {
          xaxis: {
            showLines: true,
            labels: {
              show: false
            }
          }
        },
        yaxis: {
          showLines: true,
          min: -20,
          max: 20,
          labels: {
            show: false
          }
        },
        tooltip: {
          shared: false,
          x: {
            show: false,
            formatter: function(val) {
              return val;
            }
          },
          y: {
            formatter: function(val) {
              return Math.abs(val) + "";
            }
          }
        },
        title: {
          text: "Shots On Goal",
          align: "center",
          margin: 0,
          floating: true,
          style: {
            fontFamily: "Oswald",
            fontSize: "24px",
            color: "black"
          }
        },
        labels: {
          formatter: function(val) {
            return Math.abs(Math.round(val)) + "%";
          }
        }
      },
      donutseries: [
        parseFloat(this.match.statistics[0].home) / 100.0,
        parseFloat(this.match.statistics[0].away) / 100.0
      ],
      donutchartOptions: {
        background: "#f0f2f5",
        colors: ["#252525", "#de9a35"],
        title: {
          text: this.match.statistics[0].type,
          align: "center",
          margin: 0,
          floating: false,
          style: {
            fontFamily: "Oswald",
            fontSize: "24px",
            color: "black"
          }
        },
        legend: {
          show: false
        },
        labels: ["Home", "Away"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 150
              }
            }
          }
        ]
      }
    };
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
.charts-container {
  grid-row: 2;
  grid-column: 2/7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.01fr 0.05fr 0.5fr;
  margin: 0;
  background-color: #ffffff;
}
.charts {
  grid-row: 3;
  grid-column: 1/7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.25fr;
  margin: 0;
  background-color: #ffffff;
}

.chart_card {
  font-family: "Oswald", sans-serif;
  grid-row: 1;
  padding: 5px;
  grid-column: 1/3;
  margin: 7px;
  border-radius: 10px;
  display: grid;
  border: 1px solid black;
  background: #f0f2f5;

  box-shadow: 0 1px 0px 1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 1px 1px 1px rgba(0, 0, 0.5, 0.3) inset;
  -webkit-box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
}

.chart_card2 {
  background: #f0f2f5;
  margin: 5px;
  padding: 5px;
  grid-row: 1;
  grid-column: 6;
  border-radius: 10px;
  box-shadow: 1px 3px 1px 1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 1px 1px 1px 2px rgba(0, 0, 0.5, 0.3) inset;
  -webkit-box-shadow: 2px 1px 2px 1.5px rgba(0, 0, 0, 0.3) inset;
}
.red {
  background-color: red;
  border: 1px solid black;
  color: white;
}
.green {
  background: rgb(0, 255, 25);
  background: linear-gradient(
    90deg,
    rgba(0, 255, 25, 1) 0%,
    rgba(0, 163, 14, 1) 25%,
    rgba(9, 121, 16, 1) 52%,
    rgba(0, 163, 14, 1) 75%,
    rgba(0, 255, 25, 1) 100%
  );
  border: 1px solid black;
}
.stat-comparison {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  background-color: #f0f2f5;
}
.stat-comparison-home {
  text-align: center;
  align-self: center;
  font-size: 25px;
  padding: 5px;
  border-radius: 10px;
}
.stat-comparison-away {
  text-align: center;
  align-self: center;
  font-size: 25px;
  padding: 5px;
  border-radius: 10px;
}
.stats-comparison-title {
  font-size: 28px;

  text-align: center;
  align-self: center;
}
.card-stat-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #f0f2f5;
}
.timeline {
  grid-row: 1;
  grid-column: 1/5;
}
.timeline-row {
  grid-row: 2;
  grid-column: 1/5;
}
.timeline-title {
  font-family: "Oswald", sans-serif;
  font-size: 36px;
  grid-column: 2/4;
  justify-self: center;
}
</style>

