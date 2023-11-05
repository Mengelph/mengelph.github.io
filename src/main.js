import { createApp } from 'vue'
import App from '../../../portfolio/mengel_ph/src/App.vue'
import router from '../../../portfolio/mengel_ph/src/router'
import primevue from 'primevue/config'

createApp(App).use(router).use(primevue).mount('#app')
