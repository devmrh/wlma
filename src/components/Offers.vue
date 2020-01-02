<template>
  <div>
        <div v-for="(offer, i) in offerData" :key="i">
          <div>
            {{ offer.airItineraryPricingInfo.itinTotalFare.baseFare.amount }}
          </div>
        </div>
  </div>
</template>
<style scopred>

</style>

<script>
export default {
  name: 'offers',
  props: ['offers'],
  data() {
    return {
      offerData: []
    }
  },
  mounted() {
    this.offerData = this.$store.state.offers;
  },
}
</script>