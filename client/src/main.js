import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VModal from "vue-js-modal";
import VueApexCharts from "vue-apexcharts";
import StatDesign from "./stat_design";

Vue.use("apexchart", VueApexCharts);
Vue.use(VModal, { dialog: true });
Vue.use(StatDesign);



Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
