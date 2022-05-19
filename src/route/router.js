import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Home from '~/pages/Home'
import Detail from '~/pages/Detail'

const routes = [
    { path: '/', component: Home },
    { path: '/detail', component: Detail }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router