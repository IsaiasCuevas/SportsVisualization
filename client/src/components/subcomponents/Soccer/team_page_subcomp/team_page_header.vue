<template>
  <div class="team_page_header">
    <div class="team_page_image">
      <img v-bind:src="img_link" />
      <div class="underline"></div>
    </div>
    <div class="team_page_title">{{name}}</div>
    <div class="team_coach">
      <md-card class="bg" md-with-hover>
        <md-ripple>
          <md-card-header>
            <md-card-header-text>
              <br />
              <div class="title">{{coach.coach_name}}</div>
              <br />
              <div class="md-subhead">Manager</div>
            </md-card-header-text>

            <md-card-media>
              <img src="../../../../assets/manager.png" alt />
            </md-card-media>
          </md-card-header>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamPageHeader",
  props: ["name", "img_link", "coach"]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
.team_page_header {
  grid-column: 1/7;
  background-image: url("../../../../assets/crowd.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.75fr 0.25fr;
  height: 100%;
}
.team_page_title {
  font-family: "Oswald", sans-serif;
  font-size: 56px;
  justify-self: center;
  grid-column: 2;
  grid-row: 2;
}
.team_page_image {
  padding: 25px;
  justify-self: center;
}
.team_page_image img {
  height: 250px;
  width: 250px;
}
.underline {
  height: 15px;
  width: 100%;
  background-color: black;
  justify-self: center;
  transform: skew(-30deg);
  margin-top: 25px;
  margin-bottom: 10px;
}
.team_coach {
  font-family: "Oswald", sans-serif;
  grid-column: 1;
  grid-row: 1;
  font-size: 40px;
  justify-self: center;
  align-self: center;
  text-align: center;
}
.team_coach .underline {
  height: 10px;
  width: 100%;
  background-color: black;
  justify-self: center;
  transform: skew(-30deg);
  margin-top: 25px;
  margin-bottom: 10px;
}
.md-card-media img {
  height: 50px;
  width: 50px;
}
</style>