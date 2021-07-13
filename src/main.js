import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { CarouselPlugin } from "bootstrap-vue";
import { BCarousel } from "bootstrap-vue"

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(CarouselPlugin);
Vue.component('b-carousel', BCarousel);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
