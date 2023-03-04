import { createApp } from 'vue'
const app = createApp(App)
import App from './App.vue'
// vue router
import router from './router'
app.use(router)

// tailwind csss
import './assets/tailwind.css'

// modules


app.mount('#app')
