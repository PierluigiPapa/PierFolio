import { createRouter, createWebHistory } from 'vue-router';

import ChiSono from './pages/ChiSono.vue';
import AppMain from './components/Main/AppMain.vue';
import Portfolio from './pages/Portfolio.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: AppMain
    },
    {
        path: '/chisono',
        name: 'chisono',
        component: ChiSono
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
