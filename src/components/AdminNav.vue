<script setup>
import { RouterLink } from 'vue-router';
import Link from './Link.vue';
import Logo from './Logo.vue';



</script>

<template>
  <header class="px-10 py-5 bg-gray-700 flex md:flex-row md:justify-between md:text-start flex-col text-center absolute top-0 w-full z-10">
    <div>
        <Logo />
    </div>

    <nav>
        <div class="flex md:flex-row flex-col">
            <RouterLink
                :to="{name: 'products'}"
                class="rounded text-white font-bold p-2"
            >
                Products
            </RouterLink>
            <RouterLink
                :to="{name: 'sales'}"
                class="rounded text-white font-bold p-2"
            >
                Sales
            </RouterLink>
            <Link 
                to="shop"
            >
                Go to Shop
            </Link>
        </div>
    </nav>
  </header>
</template>


