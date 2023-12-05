<script setup>
import Link from './Link.vue';


</script>

<template>
  <header class="px-10 py-5 bg-gray-700 flex md:flex-row md:justify-between md:text-start flex-col text-center absolute top-0 w-full z-10">
    <div>
        <h1 class="text-3xl font-black uppercase text-white md:mb-0 mb-5">
            Shop
            <span class="text-green-400">Vue.js</span>
        </h1>
    </div>
    <nav>
        <Link 
            to="admin"
        >
            Manage
        </Link>
    </nav>
  </header>
</template>


