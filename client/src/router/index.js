import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'
import AboutPage from '../components/pages/AboutPage.vue'
import PortfolioPage from '../components/pages/PortfolioPage.vue'
import SpanishClubPage from '../components/pages/SpanishClubPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/portfolio', name: 'portfolio', component: PortfolioPage },
  { path: '/spanish-club', name: 'spanishclub', component: SpanishClubPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
