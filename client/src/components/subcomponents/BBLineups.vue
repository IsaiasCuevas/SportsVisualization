<template>
  <div class="content">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>grade</md-icon>
          </template>

          <template slot="content">
            <p class="category" v-for="(i, index) in stat.home.leaders.points" :key="'0' + index">{{i.full_name}} ({{i.position}})</p>
            <h3 class="title" v-for="(i, index) in stat.home.leaders.points" :key="'0' + index"> PTS {{i.statistics.points}}</h3>
          </template>

          <template slot="footer">
            <div class="stats" >
             
              {{stats.home['name']}}
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100"
      >
        <stats-card data-background-color="purple">
          <template  slot="header">
          <md-icon >grade</md-icon>
          </template>

          <template slot="content">
            <p class="category" v-for="(i, index) in stat.home.leaders.assists" :key="'0' + index">{{i.full_name}} ({{i.position}})</p>
             <h3 class="title" v-for="(i, index) in stat.home.leaders.assists" :key="'0' + index"> AST {{i.statistics.assists}}</h3>
          </template>

          <template slot="footer">
            <div class="stats" >
             
              {{stats.home['name']}}
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>grade</md-icon>
          </template>

          <template slot="content">
            <p class="category" v-for="(i, index) in stat.away.leaders.points" :key="'0' + index">{{i.full_name}} ({{i.position}})</p>
            <h3 class="title" v-for="(i, index) in stat.away.leaders.points" :key="'0' + index"> PTS {{i.statistics.points}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
             
              {{stats.away['name']}}
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>grade</md-icon>
          </template>

          <template slot="content">
            <p class="category" v-for="(i, index) in stat.away.leaders.assists" :key="'0' + index">{{i.full_name}} ({{i.position}})</p>
             <h3 class="title" v-for="(i, index) in stat.away.leaders.assists" :key="'0' + index"> AST {{i.statistics.assists}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
             
              {{stats.away['name']}}
            </div>
          </template>
        </stats-card>
      </div>

      <!--
      <div v-bind:stats="stats"
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card v-bind:stats="stats">
          <md-card-header data-background-color="purple">
            <h4 class="title">Home Team Roster</h4>
            <p class="category">This is filler so I can put something</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="purple"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
-->

<!-- Roster Tabs -->
<div></div>
<div style="grid-column: 2/4;">
<div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <nav-tabs-card >
          <template slot="content">
            <md-tabs class="md-success" md-alignment="left">
              <md-tab  id="tab-pages" md-label="Quarterly Scores" md-icon="grade">
                <nav-tabs-table>
                      <div class="wrap">
                        <div id="chart">
                          <apexchart type=line height=350 :options="chartOptions3" :series="serie2" />
                       </div>
                    </div>
                </nav-tabs-table>
              </md-tab>
              
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>


</div>

<div></div>

<div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <nav-tabs-card >
          <template slot="content">
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Stats" md-icon="grade">
                <template>
<div class="tab-two">
      <apexchart width="290" type="donut" :options="Points" :series="series"></apexchart>
      <apexchart width="290" type="donut" :options="Assists" :series="series2"></apexchart>
    </div>
  </template>
              </md-tab>
              
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>



<div style="grid-column: 2/4;">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <nav-tabs-card class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
          <template slot="content">
            <span style="color:purple ;" class="md-nav-tabs-title">Roster:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Home" md-icon="grade" >
               <div class="scroll">
                <md-table v-model="users.home.players" md-card  @md-selected="onSelect">
                    <md-table-row slot="md-table-row" slot-scope="{item}"
                     md-selectable="multiple"
                     md-auto-select >
                        <md-table-cell md-label="Name">{{ item.full_name }}</md-table-cell>
                        <md-table-cell md-label="Min">{{ item.statistics.minutes }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="3PT">{{ item.statistics.three_points_made }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="OREB">{{ item.statistics.offensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="DREB">{{ item.statistics.defensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="REB">{{ item.statistics.rebounds }}</md-table-cell>
                        <md-table-cell md-label="AST">{{ item.statistics.assists }}</md-table-cell>                       
                        <md-table-cell md-label="STL">{{ item.statistics.steals }}</md-table-cell>                       
                        <md-table-cell md-label="BLK">{{ item.statistics.blocks }}</md-table-cell>                       
                        <md-table-cell md-label="TO">{{ item.statistics.turnovers }}</md-table-cell>                       
                        <md-table-cell md-label="PF">{{ item.statistics.personal_fouls }}</md-table-cell>                       
                        <md-table-cell md-label="+/-">{{ item.statistics.pls_min }}</md-table-cell>                       
                        <md-table-cell md-label="PTS">{{ item.statistics.points }}</md-table-cell>                       
                    </md-table-row>
                </md-table>
                
                </div>
                   
                <div class="my-table"></div>   
              </md-tab>
              <md-tab id="tab-pages" md-label="Away" md-icon="grade">
                <div class="scroll">
                <md-table v-model="users.away.players" md-card  @md-selected="onSelect">
                    <md-table-row slot="md-table-row" slot-scope="{item}"
                     md-selectable="multiple"
                     md-auto-select >
                        <md-table-cell md-label="Name">{{ item.full_name }}</md-table-cell>
                        <md-table-cell md-label="Min">{{ item.statistics.minutes }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="3PT">{{ item.statistics.three_points_made }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="OREB">{{ item.statistics.offensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="DREB">{{ item.statistics.defensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="REB">{{ item.statistics.rebounds }}</md-table-cell>
                        <md-table-cell md-label="AST">{{ item.statistics.assists }}</md-table-cell>                       
                        <md-table-cell md-label="STL">{{ item.statistics.steals }}</md-table-cell>                       
                        <md-table-cell md-label="BLK">{{ item.statistics.blocks }}</md-table-cell>                       
                        <md-table-cell md-label="TO">{{ item.statistics.turnovers }}</md-table-cell>                       
                        <md-table-cell md-label="PF">{{ item.statistics.personal_fouls }}</md-table-cell>                       
                        <md-table-cell md-label="+/-">{{ item.statistics.pls_min }}</md-table-cell>                       
                        <md-table-cell md-label="PTS">{{ item.statistics.points }}</md-table-cell>                       
                    </md-table-row>
                </md-table>
                </div>
              </md-tab>


              <md-tab id="tab-posts" md-label="Home/Away" md-icon="grade">
                <nav-tabs-table>
                   <div >
                      <h3>Home:</h3>
                    </div>
                  <div width="10%" class="scroll2">
                  <md-table v-model="users.home.players" md-card  @md-selected="onSelect2">
                    <md-table-row slot="md-table-row" slot-scope="{item}"
                     md-selectable="single"
                     md-auto-select >
                        <md-table-cell md-label="Name">{{ item.full_name }}</md-table-cell>
                        <md-table-cell md-label="Min">{{ item.statistics.minutes }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="3PT">{{ item.statistics.three_points_made }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="OREB">{{ item.statistics.offensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="DREB">{{ item.statistics.defensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="REB">{{ item.statistics.rebounds }}</md-table-cell>
                        <md-table-cell md-label="AST">{{ item.statistics.assists }}</md-table-cell>                       
                        <md-table-cell md-label="STL">{{ item.statistics.steals }}</md-table-cell>                       
                        <md-table-cell md-label="BLK">{{ item.statistics.blocks }}</md-table-cell>                       
                        <md-table-cell md-label="TO">{{ item.statistics.turnovers }}</md-table-cell>                       
                        <md-table-cell md-label="PF">{{ item.statistics.personal_fouls }}</md-table-cell>                       
                        <md-table-cell md-label="+/-">{{ item.statistics.pls_min }}</md-table-cell>                       
                        <md-table-cell md-label="PTS">{{ item.statistics.points }}</md-table-cell>                       
                    </md-table-row>
                </md-table>
                    </div>
                    <div >
                      <h3>Away:</h3>
                    </div>
                    <div class="scroll2">
                        <md-table v-model="users.away.players" md-card  @md-selected="onSelect3">
                    <md-table-row slot="md-table-row" slot-scope="{item}"
                     md-selectable="single"
                     md-auto-select >
                        <md-table-cell md-label="Name">{{ item.full_name }}</md-table-cell>
                        <md-table-cell md-label="Min">{{ item.statistics.minutes }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="3PT">{{ item.statistics.three_points_made }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="OREB">{{ item.statistics.offensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="DREB">{{ item.statistics.defensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="REB">{{ item.statistics.rebounds }}</md-table-cell>
                        <md-table-cell md-label="AST">{{ item.statistics.assists }}</md-table-cell>                       
                        <md-table-cell md-label="STL">{{ item.statistics.steals }}</md-table-cell>                       
                        <md-table-cell md-label="BLK">{{ item.statistics.blocks }}</md-table-cell>                       
                        <md-table-cell md-label="TO">{{ item.statistics.turnovers }}</md-table-cell>                       
                        <md-table-cell md-label="PF">{{ item.statistics.personal_fouls }}</md-table-cell>                       
                        <md-table-cell md-label="+/-">{{ item.statistics.pls_min }}</md-table-cell>                       
                        <md-table-cell md-label="PTS">{{ item.statistics.points }}</md-table-cell>                       
                    </md-table-row>
                </md-table>
                        </div>
                </nav-tabs-table>
              </md-tab>

            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
  </div>


  <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <nav-tabs-card >
          <template slot="content">
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Stats" md-icon="grade">
                <template>
<div class="tab-two">
      <apexchart width="290" type="donut" :options="Steals" :series="series3"></apexchart>
      <apexchart width="290" type="donut" :options="Block" :series="series4"></apexchart>
    </div>
  </template>
                   
              </md-tab> 
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>

<div style="grid-column: 1/3;">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <nav-tabs-card class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
          <template slot="content">
            <span class="md-nav-tabs-title">Roster:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Home" md-icon="grade" >
               <div class="scroll">
                
                <md-table v-model="users.home.players" md-card  @md-selected="onSelect4">
                    <md-table-row slot="md-table-row" slot-scope="{item}"
                     md-selectable="single"
                     md-auto-select >
                        <md-table-cell md-label="Name">{{ item.full_name }}</md-table-cell>
                        <md-table-cell md-label="Min">{{ item.statistics.minutes }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="3PT">{{ item.statistics.three_points_made }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="OREB">{{ item.statistics.offensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="DREB">{{ item.statistics.defensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="REB">{{ item.statistics.rebounds }}</md-table-cell>
                        <md-table-cell md-label="AST">{{ item.statistics.assists }}</md-table-cell>                       
                        <md-table-cell md-label="STL">{{ item.statistics.steals }}</md-table-cell>                       
                        <md-table-cell md-label="BLK">{{ item.statistics.blocks }}</md-table-cell>                       
                        <md-table-cell md-label="TO">{{ item.statistics.turnovers }}</md-table-cell>                       
                        <md-table-cell md-label="PF">{{ item.statistics.personal_fouls }}</md-table-cell>                       
                        <md-table-cell md-label="+/-">{{ item.statistics.pls_min }}</md-table-cell>                       
                        <md-table-cell md-label="PTS">{{ item.statistics.points }}</md-table-cell>                       
                    </md-table-row>
                </md-table>
                
                </div>
                   
                <div class="my-table"></div>   
              </md-tab>
              <md-tab id="tab-pages" md-label="Away" md-icon="grade">
                <div class="scroll">
                <md-table v-model="users.away.players" md-card  @md-selected="onSelect4">
                    <md-table-row slot="md-table-row" slot-scope="{item}"
                     md-selectable="single"
                     md-auto-select >
                        <md-table-cell md-label="Name">{{ item.full_name }}</md-table-cell>
                        <md-table-cell md-label="Min">{{ item.statistics.minutes }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="3PT">{{ item.statistics.three_points_made }}</md-table-cell>
                        <md-table-cell md-label="FG">{{ item.statistics.field_goals_made }}</md-table-cell>                       
                        <md-table-cell md-label="OREB">{{ item.statistics.offensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="DREB">{{ item.statistics.defensive_rebounds }}</md-table-cell>                       
                        <md-table-cell md-label="REB">{{ item.statistics.rebounds }}</md-table-cell>
                        <md-table-cell md-label="AST">{{ item.statistics.assists }}</md-table-cell>                       
                        <md-table-cell md-label="STL">{{ item.statistics.steals }}</md-table-cell>                       
                        <md-table-cell md-label="BLK">{{ item.statistics.blocks }}</md-table-cell>                       
                        <md-table-cell md-label="TO">{{ item.statistics.turnovers }}</md-table-cell>                       
                        <md-table-cell md-label="PF">{{ item.statistics.personal_fouls }}</md-table-cell>                       
                        <md-table-cell md-label="+/-">{{ item.statistics.pls_min }}</md-table-cell>                       
                        <md-table-cell md-label="PTS">{{ item.statistics.points }}</md-table-cell>                       
                    </md-table-row>
                </md-table>
                </div>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
  </div>


      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <nav-tabs-card >
          <template slot="content">
            <span class="md-nav-tabs-title">Roster:</span>
            <md-tabs class="md-success" md-alignment="left">
              
              <md-tab id="tab-posts" md-label="Stat %" md-icon="grade">
                <div id="chart" class="tab-two">
                  <apexchart type=radar height=350 :options="chartOptions2" :series="serie" />
                </div>
              </md-tab>
              
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import VueApexCharts from "vue-apexcharts";
import {
  StatsCard,
  NavTabsCard,
  OrderedTable
} from "@/components";
var colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#00D9E9",
  "#FF66C3"
];
export default {
  components: {
    apexchart: VueApexCharts,
    StatsCard,
    NavTabsCard,
    OrderedTable
  },
    Apex: {
    chart: {
      toolbar: {
        show: false
      }
    },
    tooltip: {
      shared: false
    }
  },
  data() {
    return {
      stat: [],
      series: [],
      series2: [],
      series3: [],
      series4: [],
      selected: [],
      selected2: [],
      selected3: [],
      selected4: [],
      test: [],
      renderComponent: false,
    chartOptions3: {
          stroke: {
            curve: 'smooth'
          },
          fill: {
            type: 'solid',
            opacity: [0.35, 1],
          },
          labels: ['1st', '2nd', '3rd', '4th'
          ],
          markers: {
            size: 0
          },
          yaxis: [{
              title: {
                
              },
            },
            {
              opposite: true,
              title: {
                
              },
            },
          ],
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
                }
                return y;

              }
            }
          }
        },
      serie: [],
      seriesQuarter: [
          {
        data: []
        }
           ],
      chartOptions2: {
          labels: ['3PT %', 'FT %', 'EFG %', 'TS %', 'DR %', 'OR %', 'TO %'],
          title: {
              text: 'Player Stat %'
          },
          plotOptions: {
                radar: {
                    size: 140,
                    polygons: {
                        strokeColor: '#e9e9e9',
                        fill: {
                            colors: ['#f8f8f8', '#fff']
                        }
                    }
                }
            },
            colors: ['#FF4560'],
            markers: {
                size: 4,
                colors: ['#fff'],
                strokeColor: '#FF4560',
                strokeWidth: 2,
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val
                    }   
                }
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: function(val, i) {
                        if(i % 2 === 0) {
                            return val
                        } else {
                            return ''
                        }
                    }
                }
            }
        },

      users: [],
    };
  },
  props: ["stats"],
async created() {
    try {
      const res = await axios.get('/api/basketball/boxscore/'+ this.stats.id);
      const res2 = await axios.get('/api/basketball/summary/' + this.stats.id);
      this.stat = res.data;
      this.users = res2.data;
      const games = res.data;

      this.serie2 = [{
          name: games.home.name,
          type: 'area',
          data: [games.home.scoring[0].points, games.home.scoring[1].points, games.home.scoring[2].points, 
                 games.home.scoring[0].points]
        }, {
          name: games.away.name,
          type: 'line',
          data: [games.away.scoring[0].points, games.away.scoring[1].points, games.away.scoring[2].points, 
                 games.away.scoring[0].points]
        }]
    } catch (e) {
    }
  },
  methods: {
    onSelect(i) {
      this.selected = i;
      this.series = [this.selected[0].statistics.points, this.selected[1].statistics.points]
      this.series2 = [this.selected[0].statistics.assists, this.selected[1].statistics.assists]
      this.series3 = [this.selected[0].statistics.steals, this.selected[1].statistics.steals]
      this.series4 = [this.selected[0].statistics.blocks, this.selected[1].statistics.blocks]
      this.Points = {
        labels: [this.selected[0].full_name, this.selected[1].full_name],
        title: {
          text: "Points"
        }
      },
      this.Assists = {
        labels: [this.selected[0].full_name, this.selected[1].full_name],
        title: {
          text: "Assists"
        }
      },
      this.Steals = {
        labels: [this.selected[0].full_name, this.selected[1].full_name],
        title: {
          text: "Steals"
        }
      },
      this.Block = {
        labels: [this.selected[0].full_name, this.selected[1].full_name],
        title: {
          text: "Blocks"
        }
      }
    },
    onSelect2(i) {
      this.selected2 = i;
      this.series = [this.selected2.statistics.points]
      this.series2 = [this.selected2.statistics.assists]
      this.series3 = [this.selected2.statistics.steals]
      this.series4 = [this.selected2.statistics.blocks]
    },
onSelect3(i) {
      this.selected3 = i;
      this.series = [this.selected2.statistics.points, this.selected3.statistics.points]
      this.series2 = [this.selected2.statistics.assists, this.selected3.statistics.assists]
      this.series3 = [this.selected2.statistics.steals, this.selected3.statistics.steals]
      this.series4 = [this.selected2.statistics.blocks, this.selected3.statistics.blocks]
      this.Points = {
        labels: [this.selected2.full_name, this.selected3.full_name],
        title: {
          text: "Points"
        }
      },
      this.Assists = {
        labels: [this.selected2.full_name, this.selected3.full_name],
        title: {
          text: "Assists"
        }
      },
      this.Steals = {
        labels: [this.selected2.full_name, this.selected3.full_name],
        title: {
          text: "Steals"
        }
      },
      this.Block = {
        labels: [this.selected2.full_name, this.selected3.full_name],
        title: {
          text: "Blocks"
        }
      }},
    onSelect4(i) {
      this.selected4 = i;
      this.serie = [{
        data: [this.selected4.statistics.three_points_pct, this.selected4.statistics.free_throws_pct, this.selected4.statistics.effective_fg_pct,
               this.selected4.statistics.true_shooting_pct, this.selected4.statistics.defensive_rebounds_pct, this.selected4.statistics.offensive_rebounds_pct,
               this.selected4.statistics.turnovers_pct]
      }] }  
    
    
  }
  
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/stat_design.scss";
.scroll {
  overflow-y: scroll;
  height: 400px;
}
.scroll2 {
  overflow-y: scroll;
  height: 250px;
}
.tab-two{
  max-height: 400px;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
i.md-icon.md-icon-font.md-tab-icon.md-theme-default {
    color: purple !important;
    text-shadow: 0 0 20px black;
}

</style>
