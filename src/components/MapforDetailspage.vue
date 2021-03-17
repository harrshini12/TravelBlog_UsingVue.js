<template>
  <GMapMap
    :center="des.position"
    :zoom="10"
    map-type-id="terrain"
    style="width: 600px; height: 315px"
  >
      <GMapMarker
        :position="des.position"
        :clickable="true"
        @click="openInfoWindow(des)"
      >
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