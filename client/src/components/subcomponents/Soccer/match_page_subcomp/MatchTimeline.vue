<template>
  <div>
    <div class="loading-container" v-if="loading">
      <img src="../../../../assets/30.gif" alt />
    </div>
    <br />
    <ul class="timeline" v-if="!loading">
      <li
        class="start-end"
        :style="{ position: 'relative', left: '1%' }"
        v-tooltip="{ content: 'Game Start' }"
      >
        <img src="../../../../assets/whistle.png" alt />
      </li>
      <li
        class="point"
        v-bind:key="index + 'event'"
        v-for="(events, index) in timeline_data"
        :style="{ position: 'relative', left: events.time + '%' }"
      >
        <img
          v-if="events.type == 'card'"
          src="../../../../assets/yellow.png"
          v-tooltip="{
            content:
              'Time: ' +
              events.time +
              '`' +
              '<br>Player: ' +
              events.person +
              '<br> Event: ' +
              events.info
          }"
        />
        <img
          v-if="events.type == 'goal'"
          src="../../../../assets/soccer2.png"
          v-tooltip="{
            content:
              'Time: ' +
              events.time +
              '`' +
              '<br>Player: ' +
              events.person +
              '<br> Event: ' +
              events.info
          }"
        />
        <img
          v-if="events.type == 'sub'"
          src="../../../../assets/cycle.jpg"
          v-tooltip="{
            content:
              ' Time: ' +
              events.time +
              '`' +
              ' <br>In: ' +
              events.person +
              '<br>Out: ' +
              events.info +
              '<br> Event: ' +
              events.type
          }"
        />
      </li>
      <li
        class="start-end"
        :style="{ position: 'relative', left: '85%' }"
        v-tooltip="{ content: 'Game End' }"
      >
        <img src="../../../../assets/whistle.png" alt />
      </li>
    </ul>
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MatchTimeline",
  props: ["eventID"],
  async mounted() {
    try {
      this.loading = true;
      const req = await axios.get(`/api/soccer/timeline/${this.eventID}`);
      this.timeline_data = req.data;
      this.loading = false;
    } catch (err) {
      this.loading = false;
    }
  },
  data() {
    return { loading: false, timeline_data: [] };
  }
};
</script>

<style>
.timeline {
  margin: 10px;
  border-radius: 10px 10px;
  background: green;
  height: 50%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding: 5px;
}

.cs_timeline {
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
}

.timeline li {
  float: left;
}

.tooltip-inner {
  background: black;
  font-size: 18px;
  color: white;
  border-radius: 10px;
  padding: 5px 10px 4px;
}
.timeline .point img {
  margin-top: 8px;
  height: 14px;
}
.timeline .start-end img {
  margin-top: 8px;
  height: 14px;
}
.start-end img {
  margin-top: 5px;
  height: 20px;
}
</style>
