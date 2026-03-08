<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <!-- Desktop top navbar -->
  <nav class="navbar">
    <router-link to="/" class="navbar-logo">
      <div class="logo-icon logo-initials">SC</div>
      Samuel Charris
    </router-link>

    <ul class="navbar-links">
      <li><router-link to="/" class="nav-link active">Home</router-link></li>
      <li><span class="chevron">&#x203A;</span></li>
      <li><router-link to="/about" class="nav-link">About</router-link></li>
      <li><span class="chevron">&#x203A;</span></li>
      <li><router-link to="/features" class="nav-link">Features</router-link></li>
      <li><span class="chevron">&#x203A;</span></li>
      <li><router-link to="/services" class="nav-link">Services</router-link></li>
      <li><span class="chevron">&#x203A;</span></li>
      <li><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
      <li><span class="chevron">&#x203A;</span></li>
      <li><router-link to="/spanish-club" class="nav-link">Spanish Club</router-link></li>
    </ul>

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

  <!-- Mobile bottom tab bar -->
  <nav class="mobile-tab-bar" aria-label="Mobile navigation">
    <router-link to="/" :class="['tab-item', { active: route.path === '/' }]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      <span class="tab-label">Home</span>
    </router-link>

    <router-link to="/portfolio" :class="['tab-item', { active: route.path === '/portfolio' }]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span class="tab-label">Portfolio</span>
    </router-link>

    <router-link to="/about" :class="['tab-item', { active: route.path === '/about' }]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
      <span class="tab-label">About</span>
    </router-link>

    <router-link to="/spanish-club" :class="['tab-item', { active: route.path === '/spanish-club' }]">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
      <span class="tab-label">Events</span>
    </router-link>
  </nav>
</template>
