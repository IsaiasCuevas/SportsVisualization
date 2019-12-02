<template>
  <div>
    <div class="chart">
      <div class="csgo-home-player-card">
        <div class="csgo-home-card-player">{{ home.nickname }}</div>
        <div class="home-card-stats">
          <div class="player_image">
            <img
              :src="
                'https://ls.sportradar.com/ls/players/eslsmall/' +
                  hplayer_id +
                  '.png'
              "
            />
          </div>
          <div>
            <div>
              <span class="stat_name">Kills: </span>
              <span class="stat_value">{{ home.statistics.kills }}</span>
            </div>
            <div>
              <span class="stat_name">Assists: </span>
              <span class="stat_value">{{ home.statistics.assists }}</span>
            </div>
            <div>
              <span class="stat_name">Deaths: </span>
              <span class="stat_value">{{ home.statistics.deaths }}</span>
            </div>
            <div>
              <span class="stat_name">K/D: </span>
              <span class="stat_value">{{ home.statistics.kd_ratio }}</span>
            </div>
            <div>
              <span class="stat_name">HS %: </span>
              <span class="stat_value">{{
                home.statistics.headshot_percent
              }}</span>
            </div>
            <div>
              <span class="stat_name">HS: </span>
              <span class="stat_value">{{ home.statistics.headshots }}</span>
            </div>
          </div>
        </div>
      </div>
      {{ home.statistics.trend }}
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
          <div class="player_image">
            <img
              :src="
                'https://ls.sportradar.com/ls/players/eslsmall/' +
                  aplayer_id +
                  '.png'
              "
            />
          </div>
          <div>
            <div>
              <span class="stat_name">Kills: </span>
              <span class="stat_value">{{ away.statistics.kills }}</span>
            </div>
            <div>
              <span class="stat_name">Assists: </span>
              <span class="stat_value">{{ away.statistics.assists }}</span>
            </div>
            <div>
              <span class="stat_name">Deaths: </span>
              <span class="stat_value"> {{ away.statistics.deaths }}</span>
            </div>
            <div>
              <span class="stat_name">K/D: </span>
              <span class="stat_value">{{ away.statistics.kd_ratio }}</span>
            </div>
            <div>
              <span class="stat_name">HS %: </span>
              <span class="stat_value">
                {{ away.statistics.headshot_percent }}</span
              >
            </div>
            <div>
              <span class="stat_name">HS: </span>
              <span class="stat_value"> {{ away.statistics.headshots }}</span>
            </div>
          </div>
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
        colors: ["#0b3771", "#c00101"],
        title: {
          text: this.home.nickname + " vs " + this.away.nickname,
          align: "center",
          style: {
            fontSize: "21px"
          }
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
  background: white;
  border-radius: 5px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
}
.csgo-away-player-card {
  grid-column: 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.6fr;
  text-align: center;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
}
.home-card-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.away-card-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  font-size: 18px;
  margin: 10px;
}
.stat_value {
  font-size: 16px;
}
.player_image {
  margin: 10px;
}
</style>
