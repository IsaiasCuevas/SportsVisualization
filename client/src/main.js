import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VModal from "vue-js-modal";
import VueApexCharts from "vue-apexcharts";
import VTooltip from "v-tooltip";

import VueMaterial from "vue-material";

Vue.use(VModal, { dialog: true });
Vue.use("apexchart", VueApexCharts);
Vue.use(VueMaterial);
Vue.use(VTooltip);

Vue.config.productionTip = false;

new Vue({ router, render: h => h(App) }).$mount("#app");
