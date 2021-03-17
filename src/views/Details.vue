<template>
  <div>
    <DestinationDetails :des="des" />
  </div>
</template>

<script>

import DestinationDetails from '../components/DestinationDetails.vue'

export default {
  name: 'Details',
  components: {
    DestinationDetails
  },
  props: {
    destinations: Array,
    des_id: String,
  },

  computed: {

    des() {
      return this.destinations.find(item => item.des_id == this.des_id);
    }
  }
}
</script>

<style>
</style>