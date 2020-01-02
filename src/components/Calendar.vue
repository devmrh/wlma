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
            >پرواز داخلی</a
          >
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
            >پرواز خارجی</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="ir"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
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
              <label class="form-check-label" for="exampleRadios1"
                >یک طرفه</label
              >
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
              <label class="form-check-label" for="exampleRadios2"
                >رفت و برگشت</label
              >
            </div>
          </div>
          <div class="form-box">
            <form
              class="main-form"
              id="airline-form"
              @submit.prevent="submitForm"
            >
              <div class="f-group">
                <city v-model="fai" placeholdervalue="مبدا"></city>
                <div class="circle">
                  <i class="fas fa-plane"></i>
                </div>
                <city
                  :noback="noBack"
                  placeholdervalue="مقصد"
                  v-model="tai"
                ></city>
              </div>
              <div class="f-group">
                <div class="from-group">
                  <datePicker
                    placeholder="تاریخ رفت"
                    v-model="indate"
                  ></datePicker>
                </div>
                <div class="from-group">
                  <datePicker
                    placeholder="تاریخ برگشت"
                    v-model="outdate"
                  ></datePicker>
                </div>
              </div>
              <div class="f-group">
                <person></person>
              </div>
              <div class="save-btn">
                <button class="btn btn-success su-btn" type="submit">
                  <div>
                    <i class="fas fa-search fa-2x"></i>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="international"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          b
        </div>
      </div>
    </div>
    <offers v-if="offers.length > 0"></offers>
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
.f-group {
  display: flex;
  margin-left: 15px;
}
.save-btn {
  text-align: center;
  margin-top: 10px;
}
.su-btn {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: transparent;
  background: rgba(0, 156, 217, 0.8);
}
.su-btn:hover {
  background: rgba(0, 156, 217, 1);
}
</style>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import {mapState} from 'vuex';
import City from "./City.vue";
import Person from "./Person";
import Offers from './Offers';

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
        "https://api.altrabo.com/api/v3/V1.Available/Get"
    };
  },
  components: {
    datePicker: VuePersianDatetimePicker,
    City,
    Person,
		Offers
  },
  methods: {
		submitF(){
			document.getElementById('airline-form').submit();
		},
    submitForm: function() {
			// console.log(this.indate);
			//	let date1 = window.Jmoment(this.indate, 'JYYYY/JMM/JDD').format('YYYY-MM-DD');

			let date1 =	Jmoment(this.indate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')
			let date2 =	Jmoment(this.outdate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')

			var self = this;

			window.axios.get(this.getTokenUrl(this.fai, this.tai, date1, date2)).then( res => {
						console.log(res.data)

						self.$store.state.offers = res.data;

			} ).catch( err => {
				console.log(err);
			} )


		},
			getTokenUrl(incity, outcity, indate, outdate){
			return `https://niktrav.ir/wp-json/wp/api/getFlightToken/${incity}/${outcity}/${indate}/${outdate}`;
		},
    changeCheck() {
      this.noBack = !this.noBack;
    }
  },
  mounted() {

	},
	computed: {
		...mapState({
					offers: state => state.offers
		})
	},
};
</script>
