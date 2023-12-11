<script setup>
    import ShoppingCartItem from './ShoppingCartItem.vue'
    import Amount from './Amount.vue'
    import { useCartStore } from '../stores/cart'
    import { formatCurrency } from '../helpers'



    const cart = useCartStore()

</script>


<template>
    <p v-if="cart.isEmpty" class="text-3xl font-black text-center p-10 text-red-800 uppercase">The cart is empty</p>

    <div v-else>
        <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-green-600 text-center p-2 mr-4">
                <svg class="w-8 h-8  text-white  mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>
            <p class="text-4xl font-bold text-gray-900 text-center ">Sale Summary Cart</p>
        </div>

        <ul
            role="list"
            class="mt-6 divide-y divide-white"
        >
            <ShoppingCartItem 
                v-for="item in cart.items"
                :key="item.id"
                :item="item"
            />
        </ul>

        <dl class="space-y-2 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
            <Amount>
                <template #label>Subtotal:</template>
                {{ formatCurrency(cart.subtotal) }}
            </Amount>

            <Amount>
                <template #label>Impuestos:</template>
                {{ formatCurrency(cart.taxes) }}
            </Amount>
<!-- 
            <Amount v-if="coupon.isValidCoupon">
                <template #label>Descuento:</template>
                {{ formatCurrency(coupon.discount) }}
            </Amount>
-->
            <Amount>
                <template #label>Total a Pagar:</template>
                {{ formatCurrency(cart.total) }}
            </Amount> 
        </dl>
    </div>

</template>


