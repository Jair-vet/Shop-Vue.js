<script setup>
    import { formatCurrency } from '../helpers';
    import { userProductsStore } from '../stores/products';
    import { computed } from 'vue'

    const products = userProductsStore()

    const props = defineProps({
        product: {
            type: Object
        }
    })

    const isProductNotAvailable =  computed(() => props.product.availability === 0)

</script>

<template>
    <li 
        :class="{'opacity-40' : isProductNotAvailable }"
        class="flex items-center space-x-6 border border-gray-200 p-6 rounded-md bg-white shadow">
        <img 
            :src="product.image"
            :alt="product.name"
            class="h-28 w-28"
        />
        <div class="flex-auto">
            <h3 class="text-gray-700 font-black uppercase">{{ product.name }}</h3>
            <p class="text-green-600 font-extrabold">{{ formatCurrency(product.price) }}</p>
            <div class="flex items-center gap-3">
                <p>{{ product.availability }} products</p>
                <div v-if="isProductNotAvailable" className="w-2 h-2 opacity-75 rounded-full bg-red-400 animate-[ping_1s_ease-in-out_infinite]"></div>
                <div v-else className="w-2 h-2 opacity-75 rounded-full bg-green-400 animate-[ping_1s_ease-in-out_infinite]"></div>
            </div>
        </div>

        <div>
            <!-- Edit Button -->
            <RouterLink
                :to="{
                    name: 'edit-product',
                    params: {id: product.id}
                }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="font-black hover:text-purple-600 duration-300 text-gray-900 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            </RouterLink>

            <!-- Delete Button -->
            <button
                type="button"
                @click="products.deleteProduct(product.id)"
            >
                <svg class="bg-red-100 text-red-500 duration-300 hover:text-red-700 hover:bg-red-200 rounded-full absolute mt-[-110px] ml-5 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    </li>
</template>


