<script setup>
    import { useCartStore } from '../stores/cart'
    import { formatCurrency } from '../helpers';

    const cart = useCartStore()

    defineProps({
        item: {
            type: Object
        }
    })


</script>


<template>
   <li class="flex space-x-6 py-6">
        <img 
            :src="item.image"
            :alt="'Image from ' + item.name"
            class="h-28 w-28 flex-none rounded-md"
        />

        <div class="flex flex-col items-center ml-6 space-y-2">
            <h3 class="text-md font-black text-gray-500 md:text-left text-center">{{ item.name }}</h3>
            <p class="md:text-left text-center font-black text-green-600 text-lg">{{ formatCurrency(item.price)}}</p>

            <select
                class="w-32 text-center p-1 border-none rounded-lg bg-white"
                @change="cart.updateQuantity(item.id, +$event.target.value)"
                :value="item.quantity"
            >
                <option 
                    v-for="n in cart.checkProductAvailability(item)"
                    :key="n.id"
                    :value="n">{{ n }}</option>
            </select>
        </div>

        <!-- delete Button -->
        <div>
            <button
                type="button"
                @click="cart.removeItem(item.id)"
            >
            <svg class="bg-red-100 text-red-500 duration-300 hover:text-red-700 hover:bg-red-200 rounded-full w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            </button>
        </div>
   </li>
</template>


