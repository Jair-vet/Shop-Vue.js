import { generateClasses } from "@formkit/themes"

const config = {
    config: {
        classes: generateClasses({
            global: {
                label: 'block mb-1 font-bold text-lg text-gray-700',
                message: 'text-red-500 mb-2',
                wrapper: 'space-y-2 mb-3',
                input: 'w-full p-3 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400',
            },
            file:{
                noFiles: 'block my-2',
                fileItem: 'hidden',
                input: 'bg-white',
            },
            submit: {
                input: '$reset bg-green-500 hover:bg-green-600 duration-300 text-white w-full p-2 font-bold uppercase rounded-md shadow-xl disabled:opacity-50 mt-3'
            },
        })
    }
}

export default config