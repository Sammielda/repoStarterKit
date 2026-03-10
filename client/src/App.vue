<!--
  App.vue — Root application component
  Wraps every page with the shared NavBar (top + mobile bottom)
  and Footer. <router-view> renders whichever page matches the
  current URL defined in router/index.js.
-->

<script setup>
// Import shared layout components
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <!-- Global navigation (desktop top bar + mobile bottom tab bar) -->
    <NavBar />

    <!-- Active page content rendered by Vue Router -->
    <router-view />

    <!-- Global site footer with branding, socials, and contact info -->
    <Footer />
  </div>
</template>
