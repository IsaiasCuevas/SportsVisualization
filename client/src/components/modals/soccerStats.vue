<template>
  <modal
    name="match-stats"
    transition="nice-modal-fade"
    classes="demo-modal-class"
    :min-width="200"
    :min-height="200"
    :pivot-y="0.5"
    :adaptive="true"
    :scrollable="true"
    :reset="true"
    width="35%"
    height="auto"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <MatchHeader v-bind:stats="stats" />
    <MatchContent v-bind:stats="stats" />
    <a
      v-if="stats.event_ft_result != null"
      v-bind:href="'/soccer/match/' +stats.event_key"
      class="modal-button"
    >Detailed Information</a>
  </modal>
</template>
<script>
import MatchHeader from "../subcomponents/Soccer/soccer_page_subcomp/MatchHeader";
import MatchContent from "../subcomponents/Soccer/soccer_page_subcomp/MatchContent";
export default {
  name: "soccerStats",
  components: {
    MatchHeader,
    MatchContent
  },
  data() {
    return {};
  },
  props: ["stats"],
  methods: {
    beforeOpen() {},
    beforeClose() {}
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
.size-modal-content {
  padding: 10px;
  font-style: 13px;
}
.v--modal-overlay[data-modal="size-modal"] {
  background: rgba(0, 0, 0, 0.45);
}
.demo-modal-class {
  border-radius: 10px;
  background: #d7dadc;
  box-shadow: 5px 5px 30px 0px rgba(46, 61, 73, 0.6);
  height: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.modal-button {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-image: linear-gradient(to bottom, #ffffff, rgb(206, 206, 206));
  grid-column: 1/6;
  text-align: center;
  width: 100%;
  font-size: 24px;
  padding: 5px;
  text-decoration: none;
  color: black;
}
.modal-button:active {
  color: black;
  text-decoration: none;
}
.modal-button:visited {
  color: black;
  text-decoration: none;
}
.modal-button:hover {
  box-shadow: 0px 5px 30px -5px rgba(46, 61, 73, 0.6);
  text-decoration: none;
}
.modal-button a:hover {
  box-shadow: 0px 5px 30px -5px rgba(46, 61, 73, 0.6);
  text-decoration: none;
}
</style>