<template>
 <nav class="flex items-center justify-between flex-wrap bg-gray-200 p-6 ">
  <router-link to="/">
  <div class="flex items-center flex-no-shrink mr-6">
    <img class="image inline-block rounded-full w-10 h-10" :src="'/Image/menulogo.jpg'" />
    <span class="font-semibold text-xl tracking-tight ml-4 italic">Travel with Backpack</span>
  </div>
  </router-link>
  <div class="ml-auto flex space-x-8 my-auto">
    <router-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4" to="/"><svg class="fill-current w-5 h-5 mx-auto hover:text-red-500" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>Home</router-link>
    <router-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4" to="/Contact"><svg class="fill-current h-5 w-5 mx-auto text-black-300 hover:text-red-500" viewBox="0 0 24 24"><path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"></path></svg>Contact</router-link>
    <router-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white" to="/new">+ New Post</router-link>
  </div>
</nav>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>
