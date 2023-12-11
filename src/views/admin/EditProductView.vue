<script setup>
    import { watch, reactive } from 'vue'
    import { useRoute, useRouter  } from 'vue-router'
    import {  doc  } from 'firebase/firestore'
    import { useFirestore, useDocument } from 'vuefire'
    import Link from '@/components/Link.vue';
    import { userProductsStore } from '@/stores/products';
    import useImage from '@/composables/useImage'
    
    // Firestore Consult
    const router = useRouter()
    const route = useRoute()
    const db = useFirestore()
    const docRef = doc(db, 'products', route.params.id)
    const product = useDocument(docRef)

    const { onFileChange,  url, isImageUploaded } = useImage()
    const products = userProductsStore()
    
    const formData = reactive({
        name: '',
        category: '',
        price: '',
        availability: '',
        image: ''
    })

    watch(product, (product) => {
        // Validate if product exist
        if(!product){
            router.push({name: 'products'})
        }
        Object.assign((formData), product)
    })

    const submitHandler = async data => {
        try {
            await products.updateProduct(docRef, {...data, url})
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

        <h1 class="text-4xl font-black text-gray-700 my-10 md:text-left text-center">Edit Product</h1>

        <!-- Form -->
        <div class="flex justify-center md:mr-0 md:ml-0 mr-8 ml-8 bg-gray-300 shadow-lg rounded-md">
            <div class="p-10 w-full xl:w-3/4">
            
                <FormKit
                    type="form"
                    :value="formData"
                    submit-label="Save Changes"
                    @submit="submitHandler"
                    :actions="false"
                >
                    <!-- Name -->
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="name"
                        placeholder="Nombre de Producto"
                        validation="required"
                        v-model.trim="formData.name"
                        :validation-messages="{ required: 'El Nombre del Producto es Obligatorio' }"
                    />

                    <!-- Image -->
                    <FormKit 
                        type="select"
                        label="Categoría"
                        name="category"
                        validation="required"
                        v-model.number="formData.category"
                        :validation-messages="{ required: 'La Categoría es Obligatoria' }"
                        :options="products.categoryOptions"
                    />

                    <!-- Category -->
                    <FormKit
                        type="number"
                        label="Precio"
                        name="price"
                        placeholder="Precio de Producto"
                        step="1"
                        min="1"
                        v-model.number="formData.price"
                    />

                    <!-- Price -->
                    <FormKit
                        type="number"
                        label="Disponibles"
                        name="availability"
                        placeholder="Productos Disponibles"
                        v-model.number="formData.availability"
                        step="1"
                        min="0"
                    />

                    <!-- New Image -->
                    <div v-if="isImageUploaded" class="flex flex-col justify-center items-center">
                        <p class="font-black">New Product Image</p>
                        <img 
                            :src="url"
                            alt="New Product Image"
                            class="w-52 rounded-md"
                        />
                    </div>

                    <!-- Current Image -->
                    <div v-else class="flex flex-col justify-center items-center">
                        <p class="font-black">Current Image</p>
                        <img  
                            :src="formData.image"
                            :alt="'Imagen de' + formData.image" 
                            class="w-52 rounded-md"
                        />  
                    </div>
                    

                    <FormKit
                        type="file"
                        label="Change Image"
                        name="image"
                        multiple="false"
                        accept=".jpg"
                        @change="onFileChange"
                    />


                    <FormKit type="submit">Save Changes</FormKit>

                </FormKit>
            </div>
        </div>
    </div>
</template>