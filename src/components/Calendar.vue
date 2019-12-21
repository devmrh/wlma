<template>
	<div>
		<div class="container mt-4">
			<form @submit.prevent="submitForm">
				<div class="row">
					<div class="col">
						<div class="form-group">
							<input
								class="form-control"
								type="text"
								v-model="fai"
								placeholder="فرودگاه مبدا"
								name="FromAirportIata"
							/>
						</div>
					</div>
					<div class="col">
						<div class="form-group">
							<input
								class="form-control"
								type="text"
								v-model="tai"
								placeholder="فرودگاه مقصد"
								name="ToAirportIata"
							/>
							<input type="hidden" value="2" />
						</div>
					</div>
					<div class="col">
						<div class="from-group">
							<datePicker v-model="indate"></datePicker>
						</div>
					</div>
					<div class="col">
						<div class="from-group">
							<datePicker v-model="outdate"></datePicker>
						</div>
					</div>
					<div class="col">
						<button class="btn btn-success" type="submit">جستجو</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped>
</style>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";

export default {
	name: "calendar",
	data() {
		return {
			fai: "",
			tai: "",
			err: "",
			indate: "",
			outdate: ""
		};
	},
	components: {
		datePicker: VuePersianDatetimePicker
	},
	methods: {
		submitForm: function() {
			window.axios
				.get(
					`https://api.altrabo.com/api/v3/V1.Available/GetFlightPriceCalendar?FromAirportIata=${this.fai}&ToAirportIata=${this.tai}`
				)
				.then(res => res.data)
				.then(data => console.log(data))
				.catch(err => {
					if (err.status == "401") {
						this.err = "you should login to continue";
						console.log("you should login to continue");
					}
				});
		}
	}
};
</script>