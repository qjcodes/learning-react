import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// import cssModules from "vite-plugin-css-modules"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // cssModules(
        //     {
        //         generateScopedName: '[name]__[local]__[hash:base64:5]',
        //         modulesExtensions: ['.module.css']
        //     }
        // )
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "./src")
        }
    },

    // css: {
    //     modules: false,
    // }
})
