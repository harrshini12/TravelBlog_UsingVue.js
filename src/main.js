import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import "./main.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);

app.use(router);

app.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_KEY,
  },
});

app.mount("#app");
