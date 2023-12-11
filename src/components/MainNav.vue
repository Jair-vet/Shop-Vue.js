<script setup>
  import Link from './Link.vue';
  import Logo from './Logo.vue';
  import { userProductsStore } from '../stores/products';

  const products = userProductsStore()
</script>

<template>
  <header class="px-10 py-5 bg-gray-700 flex md:flex-row md:justify-between md:text-start flex-col text-center absolute top-0 w-full z-10">
    <div>
       <Logo />

        <div class="flex gap-9 text-white md:m-0 m-7 md:justify-start justify-center">
          <h2 class="text-lg font-extrabold">Search:</h2>
          <div
            class="flex items-center gap-2"
            v-for="category in products.categories"
            :key="category.id"
          >
            <input 
              type="radio"
              name="category"
              :value="category.id"
              class="h-6 w-6 border-gray-300 text-green-600 focus:ring-gray-800"
              :checked="products.selectedCategory === category.id"
              @change="products.selectedCategory = +$event.target.value"
            />
            <label class="text-gray-200">{{ category.name }}</label>
          </div>
        </div>
    </div>

    <nav>
        <Link to="admin">
            Manage
        </Link>
    </nav>
  </header>
</template>


