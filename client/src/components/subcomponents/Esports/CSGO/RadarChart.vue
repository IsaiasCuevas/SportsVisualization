<template>
  <div>
    <div class="chart">
      <div class="csgo-home-player-card">
        <div class="csgo-home-card-player">{{ home.nickname }}</div>
        <div class="home-card-stats">
          <ul>
            <li>
              <img
                v-bind:src="
                  'https:/ls.sportradar.com/ls/players/eslsmall/' +
                    hplayer_id +
                    '.png'
                "
              />
            </li>
            <li>
              <span class="stat_name">Kills:</span>
              {{ home.statistics.kills }}
            </li>
            <li>
              <span class="stat_name">Assists:</span>
              {{ home.statistics.assists }}
            </li>
            <li>
              <span class="stat_name">Deaths:</span>
              {{ home.statistics.deaths }}
            </li>
            <li>
              <span class="stat_name">K/D:</span>
              {{ home.statistics.kd_ratio }}
            </li>
            <li>
              <span class="stat_name">HS %:</span>
              {{ home.statistics.headshot_percent }}
            </li>
            <li>
              <span class="stat_name">HS:</span>
              {{ home.statistics.headshots }}
            </li>
          </ul>
        </div>
      </div>
      <apexchart
        class="RadarChart"
        type="radar"
        height="300"
        :options="chartOptions"
        :series="series"
      />
      <div class="csgo-away-player-card">
        <div class="csgo-away-card-player">{{ away.nickname }}</div>
        <div class="away-card-stats">
          <ul>
            <li>
              <img
                v-bind:src="
                  'https:/ls.sportradar.com/ls/players/eslsmall/' +
                    aplayer_id +
                    '.png'
                "
              />
            </li>
            <li>
              <span class="stat_name">Kills:</span>
              {{ away.statistics.kills }}
            </li>
            <li>
              <span class="stat_name">Assists:</span>
              {{ away.statistics.assists }}
            </li>
            <li>
              <span class="stat_name">Deaths:</span>
              {{ away.statistics.deaths }}
            </li>
            <li>
              <span class="stat_name">K/D:</span>
              {{ away.statistics.kd_ratio }}
            </li>
            <li>
              <span class="stat_name">HS %:</span>
              {{ away.statistics.headshot_percent }}
            </li>
            <li>
              <span class="stat_name">HS:</span>
              {{ away.statistics.headshots }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "RadarChart",
  props: ["away", "home", "hplayer_id", "aplayer_id"],
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
          opacity: 0.5
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
  margin: 10px;
  padding: 30px;
}
.RadarChart {
  grid-column: 2;
}
.csgo-home-player-card {
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.6fr;
  text-align: center;
  background: #ececec;
  border-radius: 5px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
}
.csgo-away-player-card {
  grid-column: 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.6fr;
  text-align: center;
  background: #ececec;
  border-radius: 5px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
}
.home-card-stats ul {
  padding: 0;
  list-style-type: none;
  justify-self: center;
  text-align: center;
}
.away-card-stats ul {
  padding: 0;
  list-style-type: none;
  justify-self: center;
  text-align: center;
}
.csgo-home-card-player {
  padding-top: 15px;
  font-size: 28px;
}
.csgo-away-card-player {
  font-size: 28px;
  padding-top: 15px;
}
.stat_name {
  font-weight: bold;
  font-size: 16px;
}
</style>
