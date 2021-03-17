<template>
  <div>
    <router-link class="font-bold" :to="{ name: 'Details', params: {des_id: des.des_id } }">
      <p class="uppercase my-2 text-center">{{des.infowindow}}</p> 
      <p class="text-center">{{des.visitedDate}}</p>   
      <div class="flex">
        <img alt="authorimg" class="w-6 rounded-full border-2 border-gray-300" :src="des.authorImage" /> 
        <p class="ml-2 mt-3">{{des.author}}</p>
    </div>
      </router-link>
  </div>
</template>

<script>

export default {
    name:'InfoWindow',
    props: {
      destinations: Array,
      des_id: String,
      des: Object,
    },
  }
</script>

<style>

</style>