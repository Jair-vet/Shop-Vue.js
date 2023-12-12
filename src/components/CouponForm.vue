<script setup>
    import { useCouponStore } from '../stores/coupons';
    const store = useCouponStore()
</script>

<template>
    <p class="mt-5 py-5 font-bold border-t border-gray-200">Do you have a coupon?</p>

    <div class="flex text-white">
        <input 
            type="text"
            placeholder="Enter a Coupon"
            class="p-2 bg-white border-none w-full ring:border-none focus:border-none rounded-l-md placeholder:text-gray-300"
            v-model="store.couponInput"
        />

        <button
            type="button"
            class="p-3 bg-green-600 duration-300 hover:bg-green-700 font-bold disabled:opacity-30 rounded-r-md"
            @click="store.applyCoupon"
            :disabled="store.isValidCoupon"
        >Swap</button>
    </div>

    <p class="py-2 text-center text-sm font-extrabold">
        {{ store.couponValidationMessage }}
    </p>
</template>
