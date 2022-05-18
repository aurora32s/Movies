import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Home from '~/components/Home'
import Detail from '~/components/Detail'

const routes = [
    { path: '/', component: Home },
    { path: '/detail/:id', component: Detail }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router