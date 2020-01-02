<template>
	<div>
		<div class="first-box">
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item">
					<a
						class="nav-link active"
						id="ir-plane"
						data-toggle="tab"
						href="#ir"
						role="tab"
						aria-controls="home"
						aria-selected="true"
					>پرواز داخلی</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						id="international-plane"
						data-toggle="tab"
						href="#international"
						role="tab"
						aria-controls="profile"
						aria-selected="false"
					>پرواز خارجی</a>
				</li>
			</ul>
			<div class="tab-content" id="myTabContent">
				<div class="tab-pane fade show active" id="ir" role="tabpanel" aria-labelledby="home-tab">
					<div class="checking-radio">
						<div class="form-check mr-2">
							<input
								@change="changeCheck"
								class="form-check-input"
								type="radio"
								name="exampleRadios"
								id="exampleRadios1"
								value="option1"
								checked
							/>
							<label class="form-check-label" for="exampleRadios1">یک طرفه</label>
						</div>
						<div class="form-check">
							<input
								@change="changeCheck"
								class="form-check-input"
								type="radio"
								name="exampleRadios"
								id="exampleRadios2"
								value="option2"
							/>
							<label class="form-check-label" for="exampleRadios2">رفت و برگشت</label>
						</div>
					</div>
					<div class="form-box">
						<form class="main-form" @submit.prevent="submitForm">
							<city v-model="fai" placeholdervalue="مبدا"></city>
							<div class="circle">
								<i class="fas fa-plane"></i>
							</div>
							<city :noback="noBack" placeholdervalue="مقصد" v-model="tai"></city>
							<div class="from-group">
								<datePicker v-model="indate"></datePicker>
							</div>
							<div class="from-group">
								<datePicker v-model="outdate"></datePicker>
							</div>

							<person></person>

							<button class="btn btn-success" type="submit">جستجو</button>
						</form>
					</div>
				</div>
				<div class="tab-pane fade" id="international" role="tabpanel" aria-labelledby="profile-tab">b</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
/* scoped style only aplay on local component. */

.main-form {
	display: flex;
}

.first-box {
	padding: 5px;
}

.form-box {
	clear: both;
}

.city {
	float: right;
	display: flex;
	flex-flow: wrap;
	position: relative;
	margin-top: 10px;
}
.city div:nth-last-of-type(1) {
	margin-right: 10px;
}

.dates {
	display: flex;
	justify-content: center;
	position: relative;
	top: 15px;
	flex-flow: wrap;
	align-items: center;
}

.circle {
	width: 42px;
	background: #fff;
	border-radius: 50%;
	display: flex;
	align-content: center;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	height: 35px;
}

.checking-radio {
	text-align: right;
	display: flex;
	margin-top: 10px;
	padding: 5px;
	color: white;
	direction: ltr;
	float: right;
}

#myTab {
	border: none;
}

#ir-plane,
#international-plane {
	background: black;
	border: none;
	color: white;
	margin: 5px;
	border-radius: 0;
}
</style>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import City from "./City.vue";
import Person from "./Person";
export default {
	name: "calendar",
	props: [""],
	data() {
		return {
			fai: "",
			tai: "",
			err: "",
			indate: "",
			outdate: "",
			noBack: false,
			catchServer:
				"https://api.altrabo.com/api/v3/V1.Available/GetFlightPriceCalendar?FromAirportIata=${this.fai}&ToAirportIata=${this.tai}"
		};
	},
	components: {
		datePicker: VuePersianDatetimePicker,
		City,
		Person
	},
	methods: {
		submitForm: function() {},
		changeCheck() {
			this.noBack = !this.noBack;
		}
	},
	mounted() {}
};
</script>