<script setup>
const heroImg = '/images/DSCF4323.jpg'
const landscapeImg = '/images/DSCF4226.jpg'
const portraitImg = '/images/DSCF3554.jpg'
const eventImg = '/images/DSCF1088.jpg'
const ctaImg = '/images/DSCF4263.jpg'

const marqueeItems = [
  'Landscape Photography',
  'Fine Art Prints',
  'Portraits',
  'Event Coverage',
  'Digital Downloads',
  'Restaurant & Hospitality',
  'Landscape Photography',
  'Fine Art Prints',
  'Portraits',
  'Event Coverage',
  'Digital Downloads',
  'Restaurant & Hospitality',
]
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="home-hero">
      <div class="home-hero-bg"></div>
      <img :src="heroImg" alt="Charlotte Sunrise" class="home-hero-img" />
      <div class="home-hero-gradient"></div>

      <div class="home-hero-content">
        <p class="home-hero-eyebrow">Charlotte, NC &middot; Est. 2019</p>
        <h1 class="home-hero-title">
          Samuel<br /><em>Charris</em>
        </h1>
        <p class="home-hero-sub">
          Photography that holds its ground. Landscapes, portraits, and events
          captured with intention — available as digital downloads and fine art prints.
        </p>
        <div class="home-hero-cta">
          <router-link to="/portfolio" class="btn-olive">View Portfolio</router-link>
          <button class="btn-ghost">
            Shop Prints &rarr;
          </button>
        </div>
      </div>

      <div class="hero-scroll-hint">
        <div class="scroll-line"></div>
        Scroll
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-strip">
      <div class="marquee-track">
        <span v-for="(item, i) in marqueeItems" :key="i" class="marquee-item">
          {{ item }}
          <span class="marquee-dot"></span>
        </span>
      </div>
    </div>

    <!-- LANDSCAPE PANEL -->
    <div class="split-panel">
      <div class="split-img-wrap">
        <img :src="landscapeImg" alt="Golden Wildflowers" />
      </div>
      <div class="split-text">
        <span class="split-text-tag">Landscape</span>
        <h2>Earth as<br /><em>Subject</em></h2>
        <p>
          Wide open fields, city horizons at dusk, and the quiet weight
          of golden hour. Samuel's landscape work finds the extraordinary
          in familiar terrain across the Carolinas and beyond.
        </p>
        <router-link to="/portfolio" class="btn-olive" :style="{ alignSelf: 'flex-start' }">
          Explore Landscapes
        </router-link>
      </div>
    </div>

    <!-- STATS -->
    <div class="stats-bar">
      <div class="stat-item">
        <span class="stat-num">12+</span>
        <span class="stat-lbl">Fine Art Prints<br />Available</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">3</span>
        <span class="stat-lbl">Categories:<br />Landscape &middot; Portraits &middot; Events</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">&infin;</span>
        <span class="stat-lbl">Digital Downloads<br />Instant Access</span>
      </div>
    </div>

    <!-- PORTRAIT PANEL (reversed) -->
    <div class="split-panel reverse">
      <div class="split-img-wrap">
        <img :src="portraitImg" alt="Natural Light Portrait" />
      </div>
      <div class="split-text">
        <span class="split-text-tag">Portraits</span>
        <h2>People,<br /><em>Honestly</em></h2>
        <p>
          No forced smiles. Natural light, real moments, and a quiet
          environment where subjects can simply be themselves.
          Editorial, intimate, and timeless.
        </p>
        <router-link to="/portfolio" class="btn-olive" :style="{ alignSelf: 'flex-start' }">
          View Portraits
        </router-link>
      </div>
    </div>

    <!-- EVENTS PANEL -->
    <div class="split-panel">
      <div class="split-img-wrap">
        <img :src="eventImg" alt="Sumaq Dining Experience" />
      </div>
      <div class="split-text">
        <span class="split-text-tag">Events &amp; Hospitality</span>
        <h2>The Room<br /><em>Alive</em></h2>
        <p>
          Restaurant ambiance, private gatherings, and curated dining
          experiences — documented with the same care given to
          every other frame.
        </p>
        <router-link to="/portfolio" class="btn-olive" :style="{ alignSelf: 'flex-start' }">
          View Events
        </router-link>
      </div>
    </div>

    <!-- CTA SECTION -->
    <section class="home-cta-section">
      <div class="home-cta-bg"></div>
      <img :src="ctaImg" alt="City at Dusk" class="home-cta-img" />
      <div class="home-cta-overlay"></div>
      <div class="home-cta-content">
        <p class="home-cta-eyebrow">Fine Art Prints &amp; Digital Downloads</p>
        <h2>Own a<br /><em>Moment</em></h2>
        <p>
          Every photo in the portfolio is available to purchase — download
          instantly or order a professionally printed fine art print delivered to your door.
        </p>
        <router-link to="/portfolio" class="btn-olive">Browse the Portfolio</router-link>
      </div>
    </section>
  </div>
</template>
