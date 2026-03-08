<script setup>
const headshot = '/images/headshot.jpg'
</script>

<template>
  <div class="about-page">
    <!-- Oversized Name -->
    <div class="about-name-block">
      <h1 class="about-big-name">SAMUEL CHARRIS</h1>
    </div>

    <!-- Photo + Bio -->
    <div class="about-split">
      <div class="about-photo-side">
        <img :src="headshot" alt="Samuel Charris" class="about-photo" />
      </div>
      <div class="about-bio-side">
        <p class="about-bio">
          Samuel Charris is a Charlotte-based photographer,
          videographer and creative. His work blends film
          and digital — shooting on a Contax for analog
          warmth and a Fujifilm for modern versatility.
          Samuel believes every frame should feel honest,
          capturing real moments rather than manufactured ones.
        </p>
        <div class="about-bio-links">
          <router-link to="/portfolio" class="about-bio-link">
            &rarr; View Portfolio
          </router-link>
          <a
            href="https://instagram.com/samuelcharriss"
            target="_blank"
            rel="noopener noreferrer"
            class="about-bio-link"
          >
            &rarr; Instagram
          </a>
        </div>
      </div>
    </div>

    <!-- Process -->
    <div class="about-process">
      <div class="about-process-header">
        <p class="portfolio-eyebrow">What Working With Me Looks Like</p>
        <h2 class="about-heading">No stress. No awkward <em>posing.</em></h2>
      </div>
      <div class="about-process-grid">
        <div class="about-process-item">
          <span class="about-process-num">01</span>
          <h3>We Talk First</h3>
          <p>
            Every project starts with a conversation. I want to understand what
            matters to you — the vibe, the venue, the vision. No questionnaires.
            Just a real talk.
          </p>
        </div>
        <div class="about-process-item">
          <span class="about-process-num">02</span>
          <h3>The Shoot Is Easy</h3>
          <p>
            I keep sessions relaxed and low-pressure. Whether it is a portrait,
            a restaurant launch, or a community event — you will feel comfortable
            being yourself. That is when the best shots happen.
          </p>
        </div>
        <div class="about-process-item">
          <span class="about-process-num">03</span>
          <h3>You Get Art, Not Just Photos</h3>
          <p>
            Every image is carefully edited to feel timeless — rich tones, natural
            colors, and that analog quality that makes a photo worth printing and
            hanging on your wall.
          </p>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div class="about-services">
      <div class="about-service-item">
        <h3>Portraits</h3>
        <p>Individuals, couples, headshots — natural light, real expressions.</p>
      </div>
      <div class="about-service-item">
        <h3>Events</h3>
        <p>Restaurant launches, community gatherings, brand activations.</p>
      </div>
      <div class="about-service-item">
        <h3>Landscapes</h3>
        <p>Carolina sunrises, city skylines, golden hour in open fields.</p>
      </div>
      <div class="about-service-item">
        <h3>Video</h3>
        <p>Short-form content, event recaps, and brand storytelling.</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="about-cta">
      <p class="portfolio-eyebrow">Ready?</p>
      <h2 class="about-heading">
        Let's make something <em>worth keeping</em>
      </h2>
      <p class="about-cta-sub">
        Whether you need portraits, event coverage, or a creative partner — I'd
        love to hear what you have in mind.
      </p>
      <div class="about-cta-buttons">
        <a
          class="btn-olive"
          href="https://instagram.com/samuelcharriss"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get In Touch
        </a>
        <router-link to="/portfolio" class="btn-ghost">
          View Portfolio &rarr;
        </router-link>
      </div>
    </div>
  </div>
</template>
