<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    products.value = response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div>
    <h2>Productos de la API</h2>
    <table class="table-auto w-full border-collapse border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-4 py-2">ID</th>
          <th class="border border-gray-300 px-4 py-2">Título</th>
          <th class="border border-gray-300 px-4 py-2">Precio</th>
          <th class="border border-gray-300 px-4 py-2">Categoría</th>
          <th class="border border-gray-300 px-4 py-2">Imagen</th>
          <th class="border border-gray-300 px-4 py-2">Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="border border-gray-300 px-4 py-2">{{ product.id }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ product.title }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ product.price }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ product.category }}</td>
          <td class="border border-gray-300 px-4 py-2">
            <img :src="product.image" alt="Product Image" class="w-20 h-20 object-cover" />
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {{ product.rating.rate }} ({{ product.rating.count }} reviews)
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



