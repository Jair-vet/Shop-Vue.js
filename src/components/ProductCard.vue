<script setup>
    import { formatCurrency } from '../helpers'
    import { useCartStore } from '../stores/cart';

    const cart = useCartStore()

    defineProps({
        product: {
            type: Object
        }
    })

</script>

<template>
  <div class="rounded-md bg-gray-200 shadow relative">
    <img 
        :src="product.image"
        :alt="product.name"
        class="rounded-t-lg shadow-md w-56 h-56"
    />

    <div class="p-3 space-y-2 rounded-b-md shadow-lg bg-gray-300 h-[150px] flex flex-col justify-center">
        <h3 class="text-md font-black text-gray-500 md:text-left text-center">{{ product.name }}</h3>
        <p class="text-gray-500 md:text-left text-center text-sm">Available: {{ product.availability }}</p>
        <p class="md:text-left text-center font-black text-green-600 text-lg">{{ formatCurrency(product.price) }}</p>
    </div>

    <button
        type="button"
        class="absolute -right-3 -top-3"
        @click="cart.addItem(product)"
    >
        <svg class="w-9 h-9 bg-indigo-600 rounded-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

    </button>

  </div>
</template>
 