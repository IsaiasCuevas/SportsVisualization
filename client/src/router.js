import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Soccer from "./components/page_components/Soccer";
import Soccer_Team from "./components/page_components/Soccer_Team";
import Soccer_Match_Page from "./components/page_components/Soccer_Match_Page";
import EsportsLanding from "./components/page_components/EsportsLanding";
import Soccer_PlayerCompare from "./components/page_components/Soccer_PlayerCompare";
import CSGOSched from "./components/subcomponents/Esports/CSGO/CSGOSched";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/soccer",
      name: "soccer",
      component: Soccer
    },
    {
      path: "/soccer/team/:teamid",
      name: "team_page",
      component: Soccer_Team
    },
    {
      path: "/soccer/match/:matchid",
      name: "match_page",
      component: Soccer_Match_Page
    },
    {
      path: "/esports",
      name: "esports_landing",
      component: EsportsLanding
    },
    {
      path: "/soccer/team/:teamid/players",
      name: "player_compare_page",
      component: Soccer_PlayerCompare
    }
  ]
});
