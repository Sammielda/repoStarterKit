<!--
  Footer.vue — Global site footer
  Two-column layout on desktop (brand left, contact right), stacked on mobile.
  Includes:
    - Brand logo + name
    - Social media icon links (Instagram, TikTok, X)
    - Contact details (location, email, phone)
    - Dynamic copyright year
-->

<script setup>
// Auto-update copyright year
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- Left column: Brand logo + social media links -->
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="logo-icon logo-initials">SC</div>
          <span class="footer-logo-text">Samuel Charris<br/>Photography</span>
        </div>
        <!-- Social media icon links — open in new tab -->
        <div class="footer-socials">
          <!-- Instagram -->
          <a href="https://www.instagram.com/samuelcharriss" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <!-- TikTok -->
          <a href="https://www.tiktok.com/@samuelcharriss" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.3 8.3 0 0 0 3.76.9V6.69z"/>
            </svg>
          </a>
          <!-- X / Twitter -->
          <a href="https://x.com/samuelcharriss" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right column: Contact details + copyright -->
      <div class="footer-info">
        <div class="footer-contact">
          <span>Charlotte, NC</span>
          <a href="mailto:hello@samuelcharris.com">hello@samuelcharris.com</a>
          <span>(704) 671-8710</span>
        </div>
        <span class="footer-copyright">&copy; {{ year }} Samuel Charris Photography</span>
      </div>
    </div>
  </footer>
</template>
