<template>
  <div>
    <MenuBar />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component
          @destinationSelected="destinationSelected"
          :destinations="destinations"
          :is="Component"
        />
      </keep-alive>
    </router-view>
    <FooterForall />
  </div>
</template>

<script>
import MenuBar from './components/ResponsiveMenubar.vue'
import FooterForall from './components/FooterForallpage.vue'
import destinationsList from './assets/json/destinationsList.json'

export default {
  name: 'App',
  components: {
    MenuBar,
    FooterForall
  },
  data() {
    return {
      des_id: "",
      destinations: destinationsList
    }
  },
  methods: {
    destinationSelected(des_id) {
      console.log("App destinationSelected:", des_id);
      this.des_id = des_id;
      this.$router.push({ name: 'Details', params: { des_id } });
    }
  },
}
</script>
