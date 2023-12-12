<script setup>
  import Link from '@/components/link.vue';
  import VueTailwindDatePicker from 'vue-tailwind-datepicker'


</script>

<template>
  <div class="h-screen">
    <div class="flex md:justify-start justify-center">
      <Link
        to="admin">
        Back
      </Link>
    </div>
    
    <h1 class="text-4xl font-black text-gray-700 my-10 md:text-left text-center">Sales summary</h1>
    
    <div class="md:flex md:items-start gap-5">
      <!-- Calendario -->
      <div class="md:w-1/2 lg:w-1/3 bg-white flex justify-center">
        <VueTailwindDatePicker 
          
        
        />
      </div>

      <!-- Ventas -->
      <div class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p-5 pb-32">
        <p>Ventas aquí</p>
      </div>
    </div>
  </div>
</template>


