import { defineStore } from 'pinia'
import { computed } from 'vue';
import { useFirestore } from 'vuefire';
import { collection, addDoc } from 'firebase/firestore';


export const userProductsStore = defineStore('products', () => {

    const db = useFirestore()  // Tomar credenciales de Firebase

    const categories = [
        { id: 1, name: 'Sweatshirts'},
        { id: 2, name: 'Tennis'},
        { id: 3, name: 'glasses'},
    ]

    // Add on DB
    async function createProduct(product){
        await addDoc( collection(db, 'products'), product)
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