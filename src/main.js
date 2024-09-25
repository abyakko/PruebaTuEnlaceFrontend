import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
// src/main.js
import router from './router';  // Importar el enrutador

createApp(App)
  .use(router)  // Usar Vue Router
  .mount('#app');