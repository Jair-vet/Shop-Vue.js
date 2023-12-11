import { defineStore } from 'pinia'
import { computed } from 'vue';

export const userProductsStore = defineStore('products', () => {

    const categories = [
        { id: 1, name: 'Sweatshirts'},
        { id: 2, name: 'Tennis'},
        { id: 3, name: 'glasses'},
    ]


    async function createProduct(product){
        console.log(product);
    }

    const categoryOptions = computed(() => {
        const options = [
            {
                label: 'Select Category',
                value: '',
                attrs: { disabled: true }
            },
            ...categories.map(category => (
                {
                    label: category.name, 
                    value: category.id
                }
            ))
        ]
        return options
    })


    return { 
        createProduct,
        categories,
        categoryOptions,
    }
})