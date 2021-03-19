<template>
  <GMapMap :center="center" :zoom="10" map-type-id="terrain" class="map1">
    <GMapCluster>
      <GMapMarker
        :key="des.des_id"
        v-for="des in destinations"
        :position="des.position"
        :clickable="true"
        :draggable="false"
        @click="openInfoWindow(des)"
      >
        <GMapInfoWindow
          :opened="des.infoBoxOpen ? true : false"
          :options="{
            pixelOffset: {
              width: 10,
              height: 0,
            },
            maxWidth: 320,
            maxHeight: 320,
          }"
        >
          <div><InfoWindow :des="des" /></div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>
<script>
import InfoWindow from "./InfoWindow.vue";

export default {
  name: "MapComponent",
  components: {
    InfoWindow,
  },
  props: {
    destinations: Array,
    des: Object,
    des_id: String,
  },
  data() {
    return {
      center: { lat: 47.6327, lng: 8.2719 },
    };
  },
  methods: {
    openInfoWindow(des) {
      console.log("openInfoWindow", des);
      this.selecteddestination = des.des_id;
      des.infoBoxOpen = !des.infoBoxOpen;
    },
  },
};
</script>
<style scoped>
.map1 {
  width: 700px;
  height: 1330px;
}
@media (max-width: 1109px) {
  .map1 {
    display: none;
  }
}
@media (max-width: 767px) {
  .map1 {
    display: none;
  }
}
</style>
