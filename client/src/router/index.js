/**
 * router/index.js — Vue Router configuration
 *
 * Defines all client-side routes for the SPA.
 * Uses HTML5 history mode (createWebHistory) for clean URLs without hash (#).
 * The Vercel rewrite rule in vercel.json ensures all paths fall back to index.html.
 */

import { createRouter, createWebHistory } from 'vue-router'

// Page components — each maps to a route below
import HomePage from '../components/pages/HomePage.vue'
import AboutPage from '../components/pages/AboutPage.vue'
import PortfolioPage from '../components/pages/PortfolioPage.vue'
import SpanishClubPage from '../components/pages/SpanishClubPage.vue'
import CoffeeCartPage from '../components/pages/CoffeeCartPage.vue'

// Route definitions — path, name (for programmatic navigation), and component
const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/portfolio', name: 'portfolio', component: PortfolioPage },
  { path: '/spanish-club', name: 'spanishclub', component: SpanishClubPage },
  { path: '/coffee-cart', name: 'coffeecart', component: CoffeeCartPage },
]

// Create router instance with HTML5 history mode (no hash in URL)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
