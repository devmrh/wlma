<template>
	<div>
		<div class="">
			<div class="input-group ig">
				<input
					class="form-control po"
					type="text"
					:placeholder="placeholdervalue"
					name="FromAirportIata"
					v-model="inputVal"
					autocomplete="off"
					:disabled="noback"
					v-on:click="showCityList()"
				/>
				<div class="input-group-append">
					<span class="input-group-text">
						<i class="fas fa-location-arrow"></i>
					</span>
				</div>
			</div>
			<ul v-if="show" @mouseleave="hideCityList()" class="list-group city-list">
				<li class="list-group-item" v-for="(d, index) in cities" :key="index">
					<div class="city-info-container" @click="getCityCode(d.city_code)">
						<div>{{ d.name}}</div>
						<div></div>
						{{ d.city_code }}
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<style  scoped>
.city-list {
	height: 350px;
	overflow: auto;
}
.city-info-container {
	display: flex;
	justify-content: space-around;
}
.po {
	display: table-cell;
	border: 1px solid #dadada;
	border-right-color: rgb(218, 218, 218);
	border-right-style: solid;
	border-right-width: 1px;
	border-right: none;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	line-height: 30px;
	text-align: right;
	padding: 0 10px;
}
.ig {
	direction: ltr;
	width: 216px;
}
</style>
<script>
export default {
	name: "in-city",
	data() {
		return {
			show: false,
			cities: [],
			server: "http://niktrav.ir/wp-json/wp/api/cities/view-all"
		};
	},
	props: ["value", "noback", "placeholdervalue"],
	computed: {
		inputVal: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit("input", val);
			}
		}
	},
	methods: {
		getCities: function() {
			window.axios
				.get(this.server)
				.then(res => {
					this.cities = res.data;
				})
				.catch(err => {
					// eslint-disable-next-line no-console
					console.log(err);
				});
		},
		showCityList: function() {
			if (this.cities.length == 0) {
				this.getCities();
			}
			this.show = true;
		},
		hideCityList() {
			this.show = false;
		},
		getCityCode(cityCode) {
			this.inputVal = cityCode;
		}
	}
};
</script>