import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './main.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);

app.use(router)

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDkFqIwL_l-Z8ROcOkCZXBuOzN0JJM1sRk',
    },
})

app.mount('#app')



//Api Id for Google Map: AIzaSyDkFqIwL_l-Z8ROcOkCZXBuOzN0JJM1sRk