<template>
  <div
    class="homepageImg"
    style="background-image: url(./Image/homepageImage.jpg)"
  ></div>
  <div class="grid grid-cols-2">
    <div
      class="flex flex-col items-center sm:flex-wrap sm:flex-row sm:justify-center"
    >
      <div v-for="des in sortCards" :key="des.des_id">
        <!-- Card component -->
        <CardComponent @destinationSelected="cardSelected" :des="des" />
      </div>
    </div>
    <div class="my-9">
      <!-- Map component -->
      <MapComponent :des="des" :destinations="destinations" />
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
import MapComponent from "../components/MapComponent.vue";

export default {
  name: "Home",
  components: {
    CardComponent,
    MapComponent,
  },
  props: {
    destinations: Array,
    des_id: String,
    visitedDate: Number,
  },

  emits: ["destinationSelected"],

  data() {
    return {
      selectedDestination: 0,
    };
  },
  methods: {
    //emits destination id which is selected
    cardSelected(des_id) {
      this.$emit("destinationSelected", des_id);
    },
  },
  computed: {
    des() {
      const desTemp = this.destinations.find(
        (item) => item.des_id == this.des_id
      );
      return desTemp ? desTemp : {};
    },
    //sorts the card in ascending order by date
    sortCards() {
      const desDate = [...this.destinations].sort(
        (a, b) => new Date(a.visitedDate) - new Date(b.visitedDate)
      );
      return desDate ? desDate : {};
    },
  },
};
</script>

<style>
.homepageImg {
  height: 600px;
}
@media (max-width: 1109px) {
  .homepageImg {
    display: none;
  }
}
@media (max-width: 767px) {
  .homepageImg {
    display: none;
  }
}
</style>
