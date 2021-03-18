<template>
 <div>
  <div @click="cardSelected(des.des_id)" class="max-w-xs rounded-3xl overflow-hidden shadow-lg my-2 mt-9 mb-9 ml-2 mr-2 inline-block">
        <img class="w-full"  :src="des.image" alt="picture">
            <div class="px-6 py-4">
              <div class="text-center font-bold italic text-xl mb-2">{{des.title}}</div>
                <p class="text-center mb-2">{{des.visitedDate}}</p>
            </div> 
    <div class="flex">
        <img alt="authorimg" class="image ml-6 mb-2 w-8 rounded-full border-2 border-gray-300" :src="des.authorImage" /> 
        <p class="ml-3 mt-2">{{des.author}}</p>
    </div>       
    </div>
 </div>
</template>

<script>
export default {
    name: 'CardComponent',

    props: {
        des: Object,
    },

    emits: ['destinationSelected'],

    methods: {
        cardSelected(des_id) {
            this.$emit('destinationSelected', des_id)
        }
    }
}
</script>

<style>
@media (max-width: 1109px) {
    .image{
      display: none;
    }
  }

  @media (max-width: 767px) {
   .image{
      display: none;
    }
  }
</style>