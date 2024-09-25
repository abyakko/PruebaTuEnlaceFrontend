<script setup>
import HelloWorld from './Hello.vue';



</script>

<template>
  <HelloWorld ></HelloWorld>
  <div id="app">
    <nav class="flex justify-center items-center gap-8 mt-4 p-2">
      <router-link to="/Home" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">EJERCICIO FRONTEND</router-link>
      <router-link to="/back" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">EJERCICIO BACKEND</router-link>
    </nav>
    <router-view></router-view>
  </div>

  
</template>


