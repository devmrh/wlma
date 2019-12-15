<template>
  <div>
    <div class="container mt-4 ">
      <form @submit.prevent="submitForm">
        <div class="form-group">
        <input class="form-control" type="text" v-model="fai" placeholder="فرودگاه مبدا" name="FromAirportIata" >

        </div>
        <div class="form-group">
        <input class="form-control" type="text" v-model="tai" placeholder="فرودگاه مقصد" name="ToAirportIata" >
        <input type="hidden" value="2">
        </div>
        <button class="btn btn-success mt-2" type="submit">send request</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'calendar',
  data() {
    return {
      fai: '',
      tai: '',
      err: ''
    }
  },
  methods: {
    submitForm: function(){
      window.axios.get(`https://api.altrabo.com/api/v3/V1.Available/GetFlightPriceCalendar?FromAirportIata=${this.fai}&ToAirportIata=${this.tai}`)
      .then(
        (res) => res.data
      ).then( data => console.log(data) )
      .catch(err => {
        if(err.status == "401"){
          this.err = "you should login to continue"
          console.log("you should login to continue")
        }
      })

    }

  },
}
</script>