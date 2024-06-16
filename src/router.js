import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Blogs from './views/Blogs.vue'

const routes = [
    { path: '/', name:'Home' , component: Home },
    { path: '/about', name:'About' , component: About },
    { path: '/projects', name:'Projects' , component: Projects },
    { path: '/blogs', name:'Blogs' , component: Blogs },
]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router