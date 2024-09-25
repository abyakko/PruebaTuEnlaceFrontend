// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Back from '../views/back.vue';

// Definir las rutas
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/back',
    name: 'back',
    component: Back
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;