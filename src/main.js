import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //importa automático o index.js da pasta /router

createApp(App).use(router).mount('#app');
