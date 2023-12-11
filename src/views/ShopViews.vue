<script setup>
  import { storeToRefs } from 'pinia';
  import MainNav from '../components/MainNav.vue';
  import { userProductsStore } from '../stores/products';
  import ProductCard from '../components/ProductCard.vue'
  
  const products = userProductsStore()
  const { filteredProducts, noResults } = storeToRefs(products)


</script>

<template>
  <MainNav />

  <main class="md:mt-20 mt-40 md:flex md:h-screen md:overflow-y-hidden">
    <div class="md:w-2/3 md:screen md:overflow-y-scroll pt-10 pb-32 px-10">
      
      <p v-if="noResults" class="text-3xl font-black text-center p-10 text-red-800 uppercase">No Products</p>

      <div v-else
        class="md:mr-0 md:ml-0 mr-6 ml-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-4 "
      >
        <ProductCard 
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <aside class="md:w-1/3 md:screen md:overflow-y-scroll pt-10 pb-32 px-10">
      <p>Carrito Aqui</p>
    </aside>
  </main>

</template>
 