import App from "./App.vue";
import Vue from "vue";
import Vuex from "vuex";


window.moment =require('moment');
window.Jmoment = require('moment-jalaali')

import { store } from "./store";

window.axios = require("axios");
window.toastr = require("toastr");
window.toastr.options = {
  positionClass: "toast-bottom-right"
};

window.Event = new Vue;

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "../node_modules/toastr/build/toastr.min.css";

Vue.config.productionTip = false;
Vue.use(Vuex);
// Set token in requests header
// we should check if token is saved in browser later
//window.axios.defaults.headers.common["X-ZUMO-AUTH"] = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NzY0MjkyMjUsImV4cCI6MTU4NDIwNTIyNiwiaXNzIjoiQU1TIiwiYXVkIjoiVGVzdEFwaSIsInN1YiI6IjEyNiIsIkFwcElkIjotMX0.3SQpsHt2pmsuXBzUIMJUgBIPYux2IVD-fxeeAGhdz2k";

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
