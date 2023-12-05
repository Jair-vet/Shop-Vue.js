<script setup>
import Link from '@/components/link.vue';


</script>

<template>
    <div class="h-screen">
        <div class="flex md:justify-start justify-center">
          <Link
            to="products"
            class=""
          >Back
          </Link>
        </div>
      
        <h1 class="text-4xl font-black text-gray-700 my-10 md:text-left text-center">New Product</h1>


      <!-- Form -->
        <div class="flex justify-center md:mr-0 md:ml-0 mr-8 ml-8 bg-gray-300 shadow-lg rounded-md">
          <div class="p-10 w-full 2xl:w-2/4">
            <FormKit
              type="form" 
              submit-label="Add Product"
            >
              <!-- Name -->
              <FormKit
                type="text"
                label="Name"
                name="name"
                placeholder="Product Name"
                validation="required"
                :validation-messages="{required: 'Product Name is Required'}"
              />

              <!-- Image -->
              <FormKit
                type="file"
                label="Product Image"
                name="image"
                validation="required"
                :validation-messages="{required: 'Product Image is Required'}"
                accept=".jpg"
              />

              <!-- Category -->
              <FormKit
                type="select"
                label="Category"
                name="category"
                validation="required"
                :validation-messages="{required: 'Category is Required'}"
                :options="[1,2,3]"
              />

              <!-- Price -->
              <FormKit
                type="number"
                label="Price"
                name="price"
                validation="required"
                :validation-messages="{required: 'Price is Required'}"
                min="1"
              />

              <!-- Available -->
              <FormKit
                type="number"
                label="Available"
                name="availability"
                validation="required"
                :validation-messages="{required: 'Availability is Required'}"
                min="1"
              />
    
            </FormKit>

          </div>
        </div>
      
    </div>

</template>


