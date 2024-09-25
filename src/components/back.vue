<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';

// Definir variables reactivas
const products = ref([]);
const searchQuery = ref('');
const productsPerPage = ref(10);
const currentPage = ref(1);
const topSearches = ref([]);  // Para almacenar los productos más buscados

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
    const response = await axios.get('http://localhost:8000/api/produ');
    products.value = response.data; 
    console.log(response.data);// Asignamos los datos directamente
  } catch (error) {
    console.error('Error fetching products:', error); // Manejo de errores
  }
};

// Método para cargar más productos
const loadMoreProducts = () => {
  currentPage.value++;
};

// Función para registrar la búsqueda
const registerSearch = async (searchTerm, productId = null) => {
  try {
    await axios.post('/api/search', {
      search_term: searchTerm,
      product_id: productId // product_id puede ser null si no hay coincidencia exacta
    });
    console.log('Search registered successfully');
  } catch (error) {
    console.error('Error registering search:', error);
  }
};

// Watcher para registrar la búsqueda cada vez que cambie el término de búsqueda
watch(searchQuery, (newSearchQuery) => {
  if (newSearchQuery) {
    const foundProduct = products.value.find(product =>
      product.title.toLowerCase().includes(newSearchQuery.toLowerCase())
    );
    const productId = foundProduct ? foundProduct.id : null;

    // Registrar la búsqueda
    registerSearch(newSearchQuery, productId);
  }
});

// Método para obtener los productos más buscados de la API
const topSearches = async () => {
  try {
    const response = await axios.get('/api/top-searched-products');
    topSearchedProducts.value = response.data;
  } catch (error) {
    console.error('Error fetching top searched products:', error);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>


<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Fake Store</h1>
  
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
          v-for="product2 in filteredProducts"
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
  
      <!-- Botón para mostrar los productos más buscados -->
      <div class="mt-4 text-center">
        <button
          @click="fetchTopSearchedProducts"
          class="bg-green-500 text-white py-2 px-4 rounded"
        >
          Ver Productos Más Buscados
        </button>
      </div>
  
      <!-- Mostrar productos más buscados -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Productos más buscados</h2>
        <div v-if="topSearches.length > 0">
          <div
            v-for="product in topSearches"
            :key="product.id"
            class="border p-4 rounded shadow mb-4"
          >
            <img :src="product.image" alt="" class="h-40 w-full object-contain mb-4" />
            <h3 class="text-xl font-semibold">{{ product.title }}</h3>
            <p class="text-gray-700">{{ product.price }} $</p>
            <p class="text-sm text-gray-500">{{ product.description }}</p>
            <p class="text-sm text-gray-500">Veces buscado: {{ product.search_count }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
