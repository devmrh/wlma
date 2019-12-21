<template>
	<div class="main-content">
    <section class="hero parallax" id="hero">
      <div class="panels">
      <div class="container">
        <div class="form-group">
          <calendar></calendar>
        </div>
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
background:
rgba(0,0,0,.7);
min-height: 320px;
padding-top: 10%;
position: relative;
top: 144px;
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
	components: {
    Calendar
	}
};
</script>