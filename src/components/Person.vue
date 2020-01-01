<template>
	<div>
		<div style="position: relative;">
			<input type="text" class="form-control po" placeholder="تعداد مسافر" />
			<div class="extra-person">
				<div class="person-container">
					<div class="" v-for="(passenger, i) in passengers" :key="i">
						<person-item :passenger="passenger"></person-item>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.extra-person {
  position: absolute;
	width: 100%;
	background: white;
	padding: 5px;
	font-size: 14px;
	border-radius: 5px;
	border-top: none;
	margin-top: 1px;
	border: 1px solid #eee;
  box-shadow: 0 0 6px rgba(0,0,0,.15);
}

.person-container {
	display: flex;
	flex-flow: column;
	flex-wrap: wrap;
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
	padding: 0 10px;
}
</style>

<script>
import PersonItem from "./PersonItem";

export default {
	name: "person",
	components: { PersonItem },
	data() {
		return {
			passengers: [
				{
					name: "adult",
					slug: "بزرگسال",
					desc: "12 سال به بالا",
					counts: {
						adult: 0,
						teen: 0,
						baby: 0
					}
				},
				{
					name: "teen",
					slug: "کودک",
					desc: "2 سال تا 12 سال",
					counts: {
						adult: 0,
						teen: 0,
						baby: 0
					}
				},
				{
					name: "adult",
					slug: "نوزاد",
					desc: "10 روز تا 2 سال",
					counts: {
						adult: 0,
						teen: 0,
						baby: 0
					}
				}
			]
		};
	},
	methods: {},
	computed: {}
};
</script>