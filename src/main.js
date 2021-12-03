import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
    onRegisterError(error) {}
})

createApp(App).mount('#app')
