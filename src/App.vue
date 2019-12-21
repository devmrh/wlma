<template>
	<div id="app">
		 <Header></Header>
    <home-page></home-page>
	</div>
</template>

<style>
body {
	direction: rtl;
}
</style>

<script>
import Header from "./layouts/Header.vue";
import HomePage from './pages/HomePage.vue';
export default {
	name: "app",
	components: {
    Header,
    HomePage
	}
};
</script>

<style>
</style>
