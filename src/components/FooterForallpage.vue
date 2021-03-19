<template>
  <footer class="flex items-center justify-between flex-wrap bg-gray-300 p-6">
    <div class="flex items-center flex-no-shrink mr-2">
      <span class="font-semibold text-xl tracking-tight">Follow more</span>
      <svg
        class="h-8 w-8 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="https://www.youtube.com/channel/UCKSCeCEb8pdin-nJ8kxz1yQ?view_as=subscriber"
          target="_blank"
          ><img
            class="image inline-block rounded-full"
            :src="'/Image/youtube-icon.jpg'"
        /></a>
        <a href="https://www.facebook.com/burpandbreak" target="_blank"
          ><img
            class="image inline-block rounded-full"
            :src="'/Image/facebook_icon.jpg'"
        /></a>
        <a href="https://www.instagram.com/burpandbreak/" target="_blank"
          ><img
            class="image inline-block rounded-full"
            :src="'/Image/instagram_icon.jpg'"
        /></a>
      </div>
    </div>
    <div class="mt-2">© Copyright 2021</div>
  </footer>
</template>

<script>
export default {
  name: "FooterForall",
};
</script>
<style scoped>
.image {
  height: 40px;
  width: 40px;
  margin-right: 20px;
}
</style>
