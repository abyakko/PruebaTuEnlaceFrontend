<script setup>
import HelloWorld from './Hello.vue';



</script>

<template>
  <HelloWorld ></HelloWorld>
  <div id="app">
    <nav>
      <router-link to="/Home">Home</router-link>
      <router-link to="/back">Back</router-link>
    </nav>
    <router-view></router-view>
  </div>

  
</template>


