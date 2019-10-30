<template>
  <div>
    <div class="container">
      <div v-if="loading" style="grid-column:2; justify-self: center; margin: 25%;">
        <img src="../../../../assets/30.gif" />
      </div>
      <div v-if="!loading" class="options">
        <div class="date">
          <label>Start</label>
          <datepicker :format="format" @selected="setStartDate" placeholder="Select Date"></datepicker>
          <label>End</label>
          <datepicker :format="format" @selected="setEndDate" placeholder="Select Date"></datepicker>
          <button v-on:click="searchGames">Search</button>
        </div>
        <div class="selector">
          <span># of Games</span>
          <hr />
          <select v-model="selected">
            <option disabled value>Select Amount</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
      </div>

      <div v-if="!loading" class="mcontainer">
        <div v-if="!data" class="alert-container">
          <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            No Results could be found for the dates specified!
          </div>
        </div>

        <div v-else class v-bind:key="i.event_key" v-for="i in data.slice(0,selected)">
          <md-card class="bg" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="title">{{i.event_home_team}} vs {{i.event_away_team}}</div>
              </md-card-header>

              <md-card-content>
                <div class="card-score" v-if="i.event_status != null">({{i.event_final_result}})</div>
                <div v-else class="card-time">
                  {{i.event_date}}
                  <br />
                  {{i.event_time}}
                  <br />
                </div>
              </md-card-content>

              <md-card-actions>
                <md-button v-on:click="show(i)">Expand</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
          <!-- <div class="card-teams">
            {{i.event_home_team}}
            <br />vs
            <br />
            {{i.event_away_team}}
          </div>
          <div class="card-score" v-if="i.event_status != null">({{i.event_final_result}})</div>
          <div v-else class="card-time">
            {{i.event_date}}
            {{i.event_time}}
          </div>

          <div class="card-button">
            <button class="myButton" v-on:click="show(i)">Expand</button>
          </div>-->
        </div>

        <soccerStats v-bind:stats="id"></soccerStats>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-material/dist/vue-material.css";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import axios from "axios";
import soccerStats from "../../../modals/soccerStats";
//import h337 from "heatmap.js";
export default {
  name: "SoccerGames",
  components: {
    soccerStats,
    Datepicker
  },
  data() {
    return {
      loading: false,
      error: null,
      data: [],
      selected: 5,
      id: 0,
      startDate: "",
      endDate: "",
      format: "yyyy-MM-dd"
    };
  },
  methods: {
    //NOTE: I NEED TO FIGURE OUT HOW TO COMBINE THE INFORMATION I WANT TO CONTAIN IN THE MODAL
    show(num) {
      this.$modal.show("match-stats");
      this.id = num;
    },
    setStartDate(date) {
      this.startDate = moment(date).format("YYYY-MM-DD");
    },
    setEndDate(date) {
      this.endDate = moment(date).format("YYYY-MM-DD");
    },
    async searchGames() {
      this.loading = true;
      try {
        const data = await axios(
          `/api/soccer/score/${this.startDate}/${this.endDate}`
        );
        this.data = data.data.result;
        this.loading = false;
        console.log(this.data);
      } catch (err) {
        this.loading = false;
      }
    }
  },

  async created() {
    this.loading = true;
    const defaultstart = "2019-08-23";
    const defaultend = "2019-09-23";
    try {
      const data = await axios(
        `/api/soccer/score/${defaultstart}/${defaultend}`
      );
      this.data = data.data.result;

      console.log(this.data);
      this.loading = false;
    } catch (err) {
      this.loading = false;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");

.container {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
}
.mcontainer {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
}
.bg {
  margin: 5px;
  background-color: #ffffff;
}
.title {
  font-size: 28px;
  text-align: center;
}
.card-score {
  padding: 5px;
  font-size: 24px;
}
.card {
  border-radius: 5%;
  background: #71a3a7;
  padding: 15px;
  text-align: center;
  text-shadow: none;
  font-family: "Roboto", sans-serif;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 20px;
  justify-content: center;
  align-self: center;
}
.card-teams {
  grid-row: 1/2;
  grid-column: 1/2;
  justify-self: center;
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  font-weight: bolder;
  padding: 15px;
}
.card-time {
  grid-row: 1/2;
  grid-column: 2;
  font-size: 25px;
  justify-self: center;
  align-self: center;
  text-align: center;
}
.card-score {
  grid-row: 1/2;
  grid-column: 2;
  font-family: "Varela Round", sans-serif;
  font-size: 26px;
  margin-left: 25px;
  text-align: center;
}
.card-button {
  grid-row: 2/3;
  grid-column: 1/4;
  height: 10px;
}
.card:hover {
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5) inset;
}
.options {
  background-image: linear-gradient(to bottom, #ffffff, rgb(206, 206, 206));
  padding: 25px;
  grid-column: 1/4;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  border-bottom: 1px solid black;
}
.selector {
  grid-column: 3;
  justify-self: end;
}
.selector select {
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 700;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
}
.selector span {
  color: black;
  font-size: 28px;
  text-align: center;
  font-weight: bold;
}
.date {
  grid-column: 2;
}
.date input {
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 700;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
}
.date label {
  color: black;
  font-size: 28px;
  text-align: center;
  font-weight: bold;
}
.date button {
  margin: 10px;
  -moz-box-shadow: inset 0px 0px 0px 0px #54a3f7;
  -webkit-box-shadow: inset 0px 0px 0px 0px #54a3f7;
  box-shadow: inset 0px 0px 0px 0px #54a3f7;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #007dc1),
    color-stop(1, #0061a7)
  );
  background: -moz-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -o-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -ms-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0);
  background-color: #007dc1;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  border: 3px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: "Varela Round", sans-serif;
  font-size: 15px;
  text-decoration: none;
  text-shadow: 0px 2px 0px #154682;
}
.myButton {
  -moz-box-shadow: inset 0px 0px 0px 0px #54a3f7;
  -webkit-box-shadow: inset 0px 0px 0px 0px #54a3f7;
  box-shadow: inset 0px 0px 0px 0px #54a3f7;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #007dc1),
    color-stop(1, #0061a7)
  );
  background: -moz-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -o-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -ms-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0);
  background-color: #007dc1;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  border: 3px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: "Varela Round", sans-serif;
  font-size: 20px;
  padding: 7px 24px;
  text-decoration: none;
  text-shadow: 0px 2px 0px #154682;
}
.myButton:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #0061a7),
    color-stop(1, #007dc1)
  );
  background: -moz-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: -webkit-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: -o-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: -ms-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0061a7', endColorstr='#007dc1',GradientType=0);
  background-color: #0061a7;
}
.myButton:active {
  position: relative;
  top: 1px;
}
.alert-container {
  display: grid;
  grid-column: 2/4;
}
.alert {
  padding: 20px;
  background-color: black; /* Red */
  color: white;
  margin-bottom: 15px;
}

/* The close button */
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

/* When moving the mouse over the close button */
.closebtn:hover {
  color: black;
}
</style>