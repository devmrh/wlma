import App from './App.vue'
import Vue from 'vue'
window.axios = require('axios');

Vue.config.productionTip = false

// Set token in requests header
// we should check if token is saved in browser later
window.axios.defaults.headers.common["X-ZUMO-AUTH"] = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NzY0MjkyMjUsImV4cCI6MTU4NDIwNTIyNiwiaXNzIjoiQU1TIiwiYXVkIjoiVGVzdEFwaSIsInN1YiI6IjEyNiIsIkFwcElkIjotMX0.3SQpsHt2pmsuXBzUIMJUgBIPYux2IVD-fxeeAGhdz2k";

new Vue({
  render: h => h(App),
}).$mount('#app')
