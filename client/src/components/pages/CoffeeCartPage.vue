<!--
  CoffeeCartPage.vue — Mobile espresso bar service page (route: /coffee-cart)
  Sections:
    1. Hero — full-screen background image with service tagline and CTA buttons
    2. Packages — 3 glass cards (Espresso Bar, Specialty Drinks, Full Service) with pricing
    3. Event Gallery — 3-column masonry grid (2-col on mobile) of past event photos
    4. Booking CTA — call-to-action with email link and portfolio link
-->

<script setup>
// Hero background image — La Marzocco setup with grinder + Immigrant Culture bag
const heroImg = '/images/DSCF8678.jpg'

// Service packages — rendered as numbered glass cards
const packages = [
  {
    num: '01',
    title: 'Espresso Bar',
    description: 'Espresso, americano, cortado, cappuccino, and latte — all pulled fresh on-site. Includes barista, professional equipment, cups and lids.',
    price: 'From $350',
  },
  {
    num: '02',
    title: 'Specialty Drinks',
    description: 'Lavender latte, vanilla oat milk, honey cinnamon, and seasonal specials. Add signature drinks to any package for a custom touch.',
    price: 'Add-on $150',
  },
  {
    num: '03',
    title: 'Full Service',
    description: 'Up to 4 hours of unlimited drinks with a custom menu tailored to your event. Branded cups available. Perfect for weddings and corporate events.',
    price: 'From $750',
  },
]

// Gallery photos — coffee cart setup + portafilter closeup + past events
const galleryPhotos = [
  '/images/DSCF8678.jpg',
  '/images/DSCF8350.jpg',
  '/images/DSCF1088.jpg',
  '/images/DSCF1096.jpg',
  '/images/DSCF4120.jpg',
  '/images/DSCF4121.jpg',
]
</script>

<template>
  <div class="coffee-cart-page">
    <!-- Hero -->
    <section class="cart-hero">
      <div class="cart-hero-bg">
        <img :src="heroImg" alt="Coffee cart at event" class="cart-hero-img" />
        <div class="cart-hero-gradient"></div>
      </div>
      <div class="cart-hero-content">
        <p class="cart-hero-eyebrow">MOBILE ESPRESSO BAR</p>
        <h1 class="cart-hero-title">Coffee Cart for Your<br/>Next <em>Event</em></h1>
        <p class="cart-hero-sub">
          Hand-crafted espresso drinks served on-site at weddings, corporate events,
          and private parties in Charlotte, NC.
        </p>
        <div class="cart-hero-cta">
          <router-link to="/about" class="btn-olive">Book the Cart</router-link>
          <a href="#cart-menu" class="btn-ghost">View Packages ↓</a>
        </div>
      </div>
    </section>

    <!-- Menu / Packages -->
    <section id="cart-menu" class="cart-menu">
      <div class="cart-menu-header">
        <p class="section-eyebrow">PACKAGES</p>
        <h2 class="about-heading">What we <em>offer</em></h2>
      </div>
      <div class="cart-menu-grid">
        <div v-for="pkg in packages" :key="pkg.num" class="cart-menu-item about-process-item">
          <span class="about-process-num">{{ pkg.num }}</span>
          <h3>{{ pkg.title }}</h3>
          <p>{{ pkg.description }}</p>
          <span class="menu-price">{{ pkg.price }}</span>
        </div>
      </div>
    </section>

    <!-- Event Gallery -->
    <section class="cart-gallery-section">
      <div class="cart-gallery-header">
        <p class="section-eyebrow">PAST EVENTS</p>
        <h2 class="about-heading">The cart in <em>action</em></h2>
      </div>
      <div class="cart-gallery">
        <div v-for="(photo, i) in galleryPhotos" :key="i" class="cart-gallery-item">
          <img :src="photo" :alt="'Coffee cart event ' + (i + 1)" />
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="about-cta">
      <p class="section-eyebrow">BOOK THE CART</p>
      <h2 class="about-heading">Let's brew something <em>memorable</em></h2>
      <p class="about-cta-sub">
        Available for events in the Charlotte metro area.
        Let's talk about your next gathering.
      </p>
      <div class="about-cta-buttons">
        <a href="mailto:hello@samuelcharris.com" class="btn-olive">Get in Touch</a>
        <router-link to="/portfolio" class="btn-ghost">View Portfolio →</router-link>
      </div>
    </section>
  </div>
</template>
