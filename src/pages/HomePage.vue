<template>
	<div class="main-content">
    <section class="hero parallax" id="hero">
      <div class="panels">
      <div class="container">
          <calendar></calendar>
      </div>
      </div>
    </section>
    <section id="service"></section>
    <section id="customer"></section>
	</div>
</template>

<style  scoped>
  .hero {
        background-image: url("https://www.alibaba.ir/images/hero/flight-bg.jpg");
}
.panels {
min-height: 320px;
position: relative;
top: 112px;
width: 60%;
margin: 0 auto;
border-radius: 14px;
background-image: linear-gradient(
rgba(0,0,0,.7), rgba(255, 255, 248, 0.23));
}
.parallax {
    height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
  }
</style>

<script>

import Calendar from '../components/Calendar.vue';

export default {
  name: "home-page",
  data() {
    return {

    }
  },
	components: {
    Calendar
  },
  mounted() {
  },
  methods: {

  },
};
</script>