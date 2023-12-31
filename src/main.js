import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import 'mal-vue-component/style.css'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
