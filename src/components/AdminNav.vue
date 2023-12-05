<script setup>
import Link from './Link.vue';
import Logo from './Logo.vue';



</script>

<template>
  <header class="px-10 py-5 bg-gray-700 flex md:flex-row md:justify-between md:text-start flex-col text-center absolute top-0 w-full z-10">
    <div>
        <Logo />
    </div>
    <nav>
        <Link 
            to="shop"
        >
            Go to Shop
        </Link>
    </nav>
  </header>
</template>


