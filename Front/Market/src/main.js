import './assets/main.css'
import store from './store/store.js'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import HomePage from './pages/HomePage.vue'
import DetailedCardPage from './pages/DetailedCardPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', name: 'home', component: HomePage },
        {  path: '/card/:id', name: 'DetailedCardPage', component: DetailedCardPage },
    ]
})

const app = createApp(App).use(store)
.use(router)

app.mount('#app')

