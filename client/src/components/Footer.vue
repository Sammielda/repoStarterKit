<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <span>&copy; {{ year }} Samuel Charris Photography</span>
    <span class="footer-divider">&middot;</span>
    <a
      href="https://www.instagram.com/samuelcharriss"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-link"
    >
      @samuelcharriss
    </a>
  </footer>
</template>
