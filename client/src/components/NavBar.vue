<!--
  NavBar.vue — Site-wide navigation component
  Two navbars in one:
    1. Desktop top bar — logo, page links with chevron separators, icon buttons
    2. Mobile bottom tab bar — 4-tab iOS-style bar (Home, Portfolio, About, Events)
  Uses useRoute() to highlight the active tab on mobile.
  The desktop navbar is hidden on small screens; the mobile tab bar is hidden on desktop.
-->

<script setup>
import { useRoute } from 'vue-router'

// Track current route to highlight active mobile tab
const route = useRoute()
</script>

<template>
  <!-- Desktop top navbar — fixed at top, glass blur background -->
  <nav class="navbar">
    <!-- Brand logo — links back to home -->
    <router-link to="/" class="navbar-logo">
      <div class="logo-icon logo-initials">SC</div>
      Samuel Charris
    </router-link>

    <!-- Desktop page links separated by chevron (›) characters -->
    <ul class="navbar-links">
      <li><router-link to="/" class="nav-link active">Home</router-link></li>
      <li><span class="chevron">&#x203A;</span></li>
      <li><router-link to="/about" class="nav-link">About</router-link></li>
      <li><span class="chevron">&#x203A;</span></li>
      <li><router-link to="/coffee-cart" class="nav-link">Coffee Cart</router-link></li>
      <li><span class="chevron">&#x203A;</span></li>
      <li><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
      <li><span class="chevron">&#x203A;</span></li>
      <li><router-link to="/spanish-club" class="nav-link">Spanish Club</router-link></li>
    </ul>

    <!-- Right-side icon buttons (search, notifications, profile) -->
    <div class="navbar-icons">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </div>
  </nav>

  <!--
    Mobile bottom tab bar — fixed at bottom of screen.
    Only visible on screens ≤768px. Uses route.path to
    conditionally apply the "active" class for highlighting.
    Each tab has an SVG icon + text label.
  -->
  <nav class="mobile-tab-bar" aria-label="Mobile navigation">
    <!-- Home tab -->
    <router-link to="/" :class="['tab-item', { active: route.path === '/' }]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      <span class="tab-label">Home</span>
    </router-link>

    <!-- Portfolio tab -->
    <router-link to="/portfolio" :class="['tab-item', { active: route.path === '/portfolio' }]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span class="tab-label">Portfolio</span>
    </router-link>

    <!-- About tab -->
    <router-link to="/about" :class="['tab-item', { active: route.path === '/about' }]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
      <span class="tab-label">About</span>
    </router-link>

    <!-- Events (Spanish Club) tab -->
    <router-link to="/spanish-club" :class="['tab-item', { active: route.path === '/spanish-club' }]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
      <span class="tab-label">Events</span>
    </router-link>
  </nav>
</template>
