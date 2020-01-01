<template>
	<div class="person-ex">
		<div>{{ passenger.slug }} {{ passenger.desc }}</div>
		<div class="person_inner_button">
			<button class="btn btn-sm btn-outline-success" @click="increase">
				<i class="fa fa-plus-circle"></i>
			</button>
			<span class="mx-1">{{ orderdata.count }}</span>
			<button class="btn btn-sm btn-outline-warning" :disabled="!orderdata.count" @click="decrease">
				<i class="fa fa-minus-circle"></i>
			</button>
		</div>
	</div>
</template>

<style  scoped>
.person-ex {
	display: flex;
	text-align: right;
	align-items: center;
	padding: 5px;
	border-bottom: 1px solid #eee;
	margin-bottom: 5px;
}
.person_inner_button {
	display: flex;
}
</style>

<script>
import { mapState } from "vuex";

export default {
	name: "person-item",
	data() {
		return {
			orderdata: {
				count: 0
			}
		};
	},
	props: ["passenger"],
	methods: {
		increase() {
			if (!this.validationCountError) {
				window.toastr.error(
					"تعداد کل نفرات نمی‌تواند بیش از 9 نفر باشد.",
					"err"
				);
				return false;
			}

			this.orderdata.count += 1;
			this.$store.state.order.count += 1;
		},
		decrease() {
			this.orderdata.count -= 1;
			this.$store.state.order.count -= 1;
		}
	},
	mounted() {
		//	this.orderdata = this.$store.state.order;
	},
	computed: {
		...mapState({
			order: state => state.order
		}),
		validationCountError() {
			if (this.order.count >= 9) {
				return false;
			}
			return true;
		}
	}
};
</script>