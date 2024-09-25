<script setup>

import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

// Definir variables reactivas
const products = ref([]);
const searchQuery = ref('');
const productsPerPage = ref(10);
const currentPage = ref(1);

// Computed para filtrar los productos
const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return products.value.slice(0, currentPage.value * productsPerPage.value);
  }
  return products.value.filter(product =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Método para obtener los productos de la API con axios
const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    products.value = response.data; // Asignamos los datos directamente
  } catch (error) {
    console.error('Error fetching products:', error); // Manejo de errores
  }
};

// Método para cargar más productos
const loadMoreProducts = () => {
  currentPage.value++;
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>


  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Fake Store</h1>
1
    <!-- Búsqueda -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Buscar productos"
      class="mb-4 p-2 border border-gray-300 rounded"
    />

    <!-- Grilla de Productos -->
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="border p-4 rounded shadow"
      >
      <p class="text-gray-700">{{ product.id }}</p>
        <img :src="product.image" alt="" class="h-40 w-full object-contain mb-4" />
        <h2 class="text-xl font-semibold">{{ product.title }}</h2>
        <p class="text-gray-700">{{ product.price }} $</p>
        <p class="text-sm text-gray-500">{{ product.description }}</p>
      </div>
    </div>

    <!-- Botón "Ver Más" -->
    <div v-if="products.length > 0" class="mt-4 text-center">
      <button
        @click="loadMoreProducts"
        class="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Ver más
      </button>
    </div>
  </div>
  
</template>
