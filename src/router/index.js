import {createRouter, createWebHistory} from 'vue-router';
import Products from '../components/products.vue';
import Checkout from '../components/checkout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', 
            name: 'products',
            component: Products
        },
        {
            path: '/checkout', 
            name: 'checkout',
            component: Checkout
        }
    ]
});

export default router;

