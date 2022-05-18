import { createApp } from 'vue'

import router from '~/route/router'
import App from '~/App'

const app = createApp(App)
app.use(router)
app.mount('#app')