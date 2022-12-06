import { createApp } from 'vue'
import App from './App.vue'

import HuangUi from '~/index'

const app = createApp(App)
app.use(HuangUi)
app.mount('#app')
