<template>
  <div class="home-page">
    <div ref="title" class="home-page-title">Sports Visualization</div>

    <div class="home-page-subtitle">
      <div ref="subtitle1">Isaias Cuevas</div>
      <div ref="subtitle2">Henry Garcia</div>
      <div ref="subtitle3">Ahfaz Zaman</div>
    </div>
  </div>
</template>

<script>
import {
  TweenMax,
  TimelineLite,
  Back,
  Linear,
  gsap,
  CSSPlugin
} from "gsap/all";
const dontTreeShakeCSS = [TweenMax, CSSPlugin];

export default {
  name: "Home",
  data() {
    return {
      timeline: null
    };
  },
  mounted() {
    const title = this.$refs.title;
    const subtitle1 = this.$refs.subtitle1;
    const subtitle2 = this.$refs.subtitle2;
    const subtitle3 = this.$refs.subtitle3;

    const breathe = new TimelineLite({ onComplete: fadeIn, yoyo: true });
    const timelines = new TimelineLite({
      onComplete: breathe
    });
    const fadeIn = new TimelineLite();

    timelines.to(title, 1, {
      x: 0,
      rotation: 0,
      ease: Back.easeInOut,
      fontSize: 20
    });
    timelines.to(title, 0.5, {
      ease: Back.easeInOut,
      fontSize: 180
    });
    timelines
      .to(title, 1, {
        ease: Back.easeInOut,
        fontSize: 20
      })
      .to(title, 0.5, {
        ease: Back.easeInOut,
        fontSize: 150
      })
      .to(
        title,
        1,
        {
          ease: Back.easeInOut,
          rotation: 360
        },
        "-=0.8"
      );
    breathe
      .to(title, 1, {
        opacity: 1,
        scale: 1.05,
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.25
      })
      .to(subtitle1, 1, {
        opacity: 1,
        scale: 1.05,
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.25
      })
      .to(subtitle2, 1, {
        opacity: 1,
        scale: 1.05,
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.25
      })
      .to(subtitle3, 1, {
        opacity: 1,
        scale: 1.05,
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.25
      });

    fadeIn
      .to(subtitle1, 1, { y: -20, opacity: 1 })
      .to(subtitle2, 1, { y: -30, opacity: 1 }, "-=.8")
      .to(subtitle3, 1, { y: -40, opacity: 1 }, "-=.5");
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
.box {
  height: 60px;
  width: 60px;
  background: red;
}
.home-page {
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 0.5fr 3fr 0.5fr;
}
.home-page-title {
  font-family: "Oswald", sans-serif;
  text-align: center;
  align-self: center;
  justify-self: center;
  padding: 150px 50px 150px 50px;
  grid-column: 2;
  grid-row: 2;
  font-size: 50rem;
}
.home-page-subtitle {
  grid-row: 3;
  grid-column: 2;
  justify-self: end;
  font-size: 55px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 35px;
  align-self: end;
}
</style>
