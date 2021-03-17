<template>
  <div class="homepageImg" style="background-image: url(./Image/homepageImage.jpg)">
  </div>  
  <div class="grid grid-cols-2">
    <div
      class="flex flex-col items-center sm:flex-wrap sm:flex-row sm:justify-center"
    >
      <div v-for="des in destinations" :key="des.des_id">
        <CardComponent @destinationSelected="cardSelected" :des="des" />
      </div>
    </div>
    <div class="my-9">
      <MapComponent :des="des" :destinations="destinations" />
    </div>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import MapComponent from '../components/MapComponent.vue'

export default {
  name: 'Home',
  components: {
    CardComponent,
    MapComponent
  },
  props: {
    destinations: Array,
    des_id: String,
  },

  emits: ['destinationSelected'],

  data() {
    return {
      selectedDestination: 0,
    };
  },
  methods: {
    cardSelected(des_id) {
      this.$emit('destinationSelected', des_id);
    }
  },

  computed: {

    des() {
        const desTemp = this.destinations.find(item => item.des_id == this.des_id); 
        return desTemp ? desTemp : {};
    }
  }
}
</script>

<style>
.homepageImg {
  height: 600px;
}
</style>