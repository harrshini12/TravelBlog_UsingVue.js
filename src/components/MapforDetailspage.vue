<template>
  <GMapMap
    :center="des.position"
    :zoom="10"
    map-type-id="terrain"
    class="map"
  >
      <GMapMarker
        :position="des.position"
        :clickable="true"
      >
      <GMapInfoWindow :opened="true" >
          <div>{{des.title}}</div>
      </GMapInfoWindow>
      </GMapMarker>
  </GMapMap>
</template>
<script>

export default {
  name: 'MapforDetailspage',
  props: {
    destinations: Array,
    des: Object,
    des_id: String,
  },
}
</script>
<style scoped>
.map{
  width: 600px; 
  height: 315px;
}
@media (max-width: 1109px) {
    .map{
       display: none;
    }
  }
  @media (max-width: 767px) {
   .map{
      display: none;
    }
  }
</style>