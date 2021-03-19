<template>
  <div>
    <div
      class="w-full h-96 text-white text-2xl"
      :style="{ 'background-image': 'url(' + des.timelineImage + ')' }"
    >
      <div class="md:w-1/3 w-full">
        <GoBack />
      </div>
      <div>
        <h1 class="text-4xl font-bold text-center text-white">
          {{ des.title }}
        </h1>
        <div class="flex mt-64 text-white">
          <h1 class="ml-20 font-bold">Visiting Date: {{ des.visitedDate }}</h1>
          <div class="flex ml-auto mr-20 space-x-2">
            <img
              alt="authorimg"
              class="image w-8 border-2 border-gray-300 rounded-full"
              :src="des.authorImage"
            />
            <p class="mt-1 font-bold">{{ des.author }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 mb-10">
      <p class="font-bold text-center text-4xl">
        Top exprerience in {{ des.title }}
      </p>
    </div>
    <div class="relative inline-block mt-20 mb-20 ml-5 sm:ml-20 h-96 w-96">
      <div
        class="absolute bottom-0 inline-block transform bg-indigo-400 shadow-lg card w-96 h-96 rounded-3xl -rotate-6"
      ></div>
      <div
        class="absolute bottom-0 inline-block transform bg-pink-500 shadow-lg card w-96 h-96 rounded-3xl rotate-6"
      ></div>
      <div
        class="absolute bottom-0 z-10 grid transition bg-white shadow-xl card w-96 h-96 rounded-3xl place-items-center"
      >
        <div
          class="relative w-3/4 overflow-hidden bg-white shadow-inner card h-4/5 rounded-2xl"
        >
          <img :src="des.imagecard1" alt="" />
        </div>
      </div>
    </div>
    <div class="relative inline-block mt-20 mb-20 sm:ml-20 ml-5 h-96 w-96">
      <div
        class="absolute bottom-0 inline-block transform bg-indigo-400 shadow-lg card w-96 h-96 rounded-3xl -rotate-6"
      ></div>
      <div
        class="absolute bottom-0 inline-block transform bg-pink-500 shadow-lg card w-96 h-96 rounded-3xl rotate-6"
      ></div>
      <div
        class="absolute bottom-0 z-10 grid transition bg-white shadow-xl card w-96 h-96 rounded-3xl place-items-center"
      >
        <div
          class="relative w-3/4 overflow-hidden bg-white shadow-inner card h-4/5 rounded-2xl"
        >
          <img :src="des.imagecard2" alt="" />
        </div>
      </div>
    </div>
    <div class="relative inline-block mt-20 mb-20 sm:ml-20 ml-5 h-96 w-96">
      <div
        class="absolute bottom-0 inline-block transform bg-indigo-400 shadow-lg card w-96 h-96 rounded-3xl -rotate-6"
      ></div>
      <div
        class="absolute bottom-0 inline-block transform bg-pink-500 shadow-lg card w-96 h-96 rounded-3xl rotate-6"
      ></div>
      <div
        class="absolute bottom-0 z-10 grid transition bg-white shadow-xl card w-96 h-96 rounded-3xl place-items-center"
      >
        <div
          class="relative w-3/4 overflow-hidden bg-white shadow-inner card h-4/5 rounded-2xl"
        >
          <img :src="des.imagecard3" alt="" />
        </div>
      </div>
    </div>
    <div class="relative inline-block mt-20 mb-20 sm:ml-20 ml-5 h-96 w-96">
      <div
        class="absolute bottom-0 inline-block transform bg-indigo-400 shadow-lg card w-96 h-96 rounded-3xl -rotate-6"
      ></div>
      <div
        class="absolute bottom-0 inline-block transform bg-pink-500 shadow-lg card w-96 h-96 rounded-3xl rotate-6"
      ></div>
      <div
        class="absolute bottom-0 z-10 grid transition bg-white shadow-xl card w-96 h-96 rounded-3xl place-items-center"
      >
        <div
          class="relative w-3/4 overflow-hidden bg-white shadow-inner card h-4/5 rounded-2xl"
        >
          <img :src="des.imagecard4" alt="" />
        </div>
      </div>
    </div>
    <div class="relative inline-block mt-20 mb-20 sm:ml-20 ml-5 h-96 w-96">
      <div
        class="absolute bottom-0 inline-block transform bg-indigo-400 shadow-lg card w-96 h-96 rounded-3xl -rotate-6"
      ></div>
      <div
        class="absolute bottom-0 inline-block transform bg-pink-500 shadow-lg card w-96 h-96 rounded-3xl rotate-6"
      ></div>
      <div
        class="absolute bottom-0 z-10 grid transition bg-white shadow-xl card w-96 h-96 rounded-3xl place-items-center"
      >
        <div
          class="relative w-3/4 overflow-hidden bg-white shadow-inner card h-4/5 rounded-2xl"
        >
          <img :src="des.imagecard5" alt="" />
        </div>
      </div>
    </div>
    <div class="relative inline-block mt-20 mb-20 sm:ml-20 ml-5 h-96 w-96">
      <div
        class="absolute bottom-0 inline-block transform bg-indigo-400 shadow-lg card w-96 h-96 rounded-3xl -rotate-6"
      ></div>
      <div
        class="absolute bottom-0 inline-block transform bg-pink-500 shadow-lg card w-96 h-96 rounded-3xl rotate-6"
      ></div>
      <div
        class="absolute bottom-0 z-10 grid transition bg-white shadow-xl card w-96 h-96 rounded-3xl place-items-center"
      >
        <div
          class="relative w-3/4 overflow-hidden bg-white shadow-inner card h-4/5 rounded-2xl"
        >
          <img :src="des.imagecard6" alt="" />
        </div>
      </div>
    </div>
    <div>
      <p class="sm:ml-20 mx-5 my-10 text-justify">{{ des.Description }}</p>
    </div>
    <div class="sm:ml-20 flex ml-5 my-20">
      <iframe
        class="youtubesize"
        :src="des.youtubeUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <MapforDetailspage
        class="ml-20"
        :des="des"
        :destinations="destinations"
      />
    </div>
    <div class="text-center mb-10">
      <svg
        class="h-5 w-5 inline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
        />
      </svg>
      <p class="inline">{{ des.Location }}</p>
    </div>
  </div>
</template>

<script>
import GoBack from "../components/GoBack.vue";
import MapforDetailspage from "../components/MapforDetailspage.vue";

export default {
  name: "DestinationDetails",
  components: {
    GoBack,
    MapforDetailspage,
  },
  props: {
    des: Object,
    des_id: String,
  },
};
</script>

<style>
@media (max-width: 1109px) {
  .image {
    display: none;
  }
}

@media (max-width: 767px) {
  .image {
    display: none;
  }
}
.youtubesize {
  width: 560px;
  height: 315px;
}
@media (max-width: 767px) {
  .youtubesize {
    width: 350px;
    height: 250px;
  }
}
</style>
