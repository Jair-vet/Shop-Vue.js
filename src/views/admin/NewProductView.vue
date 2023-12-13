<script setup>
  import Link from '@/components/Link.vue';
  import useImage from '@/composables/useImage'
  import { userProductsStore } from '@/stores/products'
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';


  const { url, onFileChange, isImageUploaded } = useImage()
  const products = userProductsStore()
  const router = useRouter()

  const formData = reactive({
    name: '',
    category: '',
    price: '',
    availability: '',
    image: ''

  })

  const submitHandler = async data => {
    const { image, ...values } = data

    try {
      await products.createProduct({
        ...values,
        image: url.value
      })
      // Redirect
      router.push({name: 'products'})
    } catch (error) {
      console.log(error);
    }

  }

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
          <div class="p-10 w-full xl:w-3/4">
            <FormKit
              type="form" 
              submit-label="Add Product"
              @submit="submitHandler"
              :value="formData"
            >
              <!-- Name -->
              <FormKit
                type="text"
                label="Name"
                name="name"
                placeholder="Product Name"
                validation="required"
                :validation-messages="{required: 'Product Name is Required'}"
                v-model.trim="formData.name"
              />

              <!-- Image -->
              <FormKit
                type="file"
                label="Product Image"
                name="image"
                validation="required"
                :validation-messages="{required: 'Product Image is Required'}"
                accept=".jpg"
                @change="onFileChange"
                v-model.trim="formData.image"
              />

              <div v-if="isImageUploaded" class="flex flex-col justify-center items-center">
                <p class="font-black">Product Image</p>
                <img 
                  :src="url"
                  alt="New Product Image"
                  class="w-52 rounded-md"
                />
              </div>

              <!-- Category -->
              <FormKit
                type="select"
                label="Category"
                name="category"
                validation="required"
                :validation-messages="{required: 'Category is Required'}"
                :options="products.categoryOptions"
                v-model.number="formData.category"
              />

              <!-- Price -->
              <FormKit
                type="number"
                label="Price"
                name="price"
                validation="required"
                :validation-messages="{required: 'Price is Required'}"
                min="1"
                v-model.number="formData.price"
              />

              <!-- Available -->
              <FormKit
                type="number"
                label="Available"
                name="availability"
                validation="required"
                :validation-messages="{required: 'Availability is Required'}"
                min="1"
                v-model.number="formData.availability"
              />
    
            </FormKit>

          </div>
        </div>
      
    </div>

</template>


