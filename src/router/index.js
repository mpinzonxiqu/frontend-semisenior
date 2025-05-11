// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ItemList from '../components/ItemList.vue';
import ItemDetail from '../components/ItemDetail.vue';

const routes = [
  {
    path: '/',
    name: 'item-list',
    component: ItemList,
  },
  {
    path: '/item/:id',
    name: 'item-detail',
    component: ItemDetail,
    props: true, // importante para pasar :id como prop
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
