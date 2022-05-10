import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/layout/index.vue'
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('../views/Home.vue')
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('../views/About.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
