import { createApp } from 'vue'
const app = createApp(App)
import App from './App.vue'

// vue router
import router from './router'
app.use(router)

// vuex
import store from "./store/index.js";
app.use(store);

// tailwind csss
import './assets/tailwind.css'

// modules


app.mount('#app')
