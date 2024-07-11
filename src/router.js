import { createRouter, createWebHistory } from 'vue-router';

import ChiSono from './pages/ChiSono.vue';
import AppMain from './components/Main/AppMain.vue';
import Portfolio from './pages/Portfolio.vue';
import Progetti from './pages/Progetti.vue';

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
    {
        path: '/progetti',
        name: 'progetti',
        component: Progetti
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
