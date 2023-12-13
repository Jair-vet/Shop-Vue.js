<script setup>
  import Link from '@/components/link.vue';
  import { ref } from 'vue';
  import VueTailwindDatePicker from 'vue-tailwind-datepicker'
  import { useSalesStore } from '../../stores/sales'
  import { formatCurrency } from '@/helpers';
  import SaleDetails from '../../components/SaleDetails.vue';

  const sales = useSalesStore()

  const formatter = ref({
    date: 'DD/MM/YYYY',
    month: 'MMMM'
  })
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
      <div class="md:w-1/2 lg:w-1/3 flex justify-center p-5">
        <VueTailwindDatePicker 
            as-single
            no-input
            v-model="sales.date"
            :formatter="formatter"
        />
      </div>

      <!-- Sales -->
      <div class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p-5 pb-32">
          <p v-if="sales.isDateSelected" class="text-center text-lg font-bold text-emerald-700 uppercase">
              Sales of the date: <span class="font-black text-gray-800">{{ sales.date }}</span>
          </p>
          <p v-else class="text-3xl font-black text-center p-10 text-red-800 uppercase">Select one Day</p>

          <div v-if="sales.salesCollection.length" class="space-y-5 h-screen">
              <p class="text-3xl font-black text-center p-10 text-gray-800 uppercase">Total of all Day:
                  <span class="font-black text-emerald-700">
                      {{ formatCurrency(sales.totalSalesOfDay) }}
                  </span>
              </p>

              <SaleDetails 
                  v-for="sale in sales.salesCollection"
                  :key="sale.id"
                  :sale="sale"
              />
          </div>
          <p v-else-if="sales.noSales" class="text-3xl font-black text-center p-10 text-red-800 uppercase">
              No sales on this day
          </p>
      </div>
    </div>
  </div>
</template>


