<script setup>
  import Link from '@/components/link.vue';
  import Product from '@/components/Product.vue'
  import { userProductsStore } from '../../stores/products'

  
  
  const products = userProductsStore()


</script>

<template>

  <div class="h-screen">
    <div class="flex md:justify-start justify-center">
      <Link
        to="new-product">
        New Product
      </Link>
    </div>
    

    <h1 class="text-4xl font-black text-gray-700 my-10 md:text-left text-center">Products</h1>
    <p 
      v-if="products.noResults"
      class="text-3xl font-black text-center p-10 text-red-800 uppercase"
    >No Results</p>

    <ul
      role="list"
      class="grid md:mr-0 md:ml-0 mr-6 ml-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
    >
      <Product 
        v-for="product in products.productsCollection"
        :key="product.id"
        :product="product"
      />

    </ul>
  </div>

</template>


