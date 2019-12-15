import App from './App.vue'
import Vue from 'vue'
import  axios  from 'axios'
window.axios = axios;

Vue.config.productionTip = false


//let token = localStorage.get("token")
//if(token){
Vue.axios.headers.common["X-ZUMO-AUTH"] =
    "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NzY0MjkyMjUsImV4cCI6MTU4NDIwNTIyNiwiaXNzIjoiQU1TIiwiYXVkIjoiVGVzdEFwaSIsInN1YiI6IjEyNiIsIkFwcElkIjotMX0.3SQpsHt2pmsuXBzUIMJUgBIPYux2IVD-fxeeAGhdz2k";
//}

new Vue({
  render: h => h(App),
}).$mount('#app')
