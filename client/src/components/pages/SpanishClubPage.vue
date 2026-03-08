<script setup>
import { ref } from 'vue'

const PIXIESET_GALLERY = 'https://sam6757.pixieset.com/portfoliolandscape/'

const photos = [
  { id: 1,  src: '/images/spanishclub/DSCF5093.jpg' },
  { id: 2,  src: '/images/spanishclub/DSCF5095.jpg' },
  { id: 3,  src: '/images/spanishclub/DSCF5097.jpg' },
  { id: 4,  src: '/images/spanishclub/DSCF5101.jpg' },
  { id: 5,  src: '/images/spanishclub/DSCF5105.jpg' },
  { id: 6,  src: '/images/spanishclub/DSCF5108.jpg' },
  { id: 7,  src: '/images/spanishclub/DSCF5109.jpg' },
  { id: 8,  src: '/images/spanishclub/DSCF5116.jpg' },
  { id: 9,  src: '/images/spanishclub/DSCF5117.jpg' },
  { id: 10, src: '/images/spanishclub/DSCF5131.jpg' },
  { id: 11, src: '/images/spanishclub/DSCF5159.jpg' },
  { id: 12, src: '/images/spanishclub/DSCF5160.jpg' },
  { id: 13, src: '/images/spanishclub/DSCF5162.jpg' },
  { id: 14, src: '/images/spanishclub/DSCF5166.jpg' },
  { id: 15, src: '/images/spanishclub/DSCF5167.jpg' },
  { id: 16, src: '/images/spanishclub/DSCF5171.jpg' },
  { id: 17, src: '/images/spanishclub/DSCF5172.jpg' },
  { id: 18, src: '/images/spanishclub/DSCF5186.jpg' },
  { id: 19, src: '/images/spanishclub/DSCF5201b.jpg' },
  { id: 20, src: '/images/spanishclub/DSCF5201.jpg' },
  { id: 21, src: '/images/spanishclub/DSCF5202.jpg' },
  { id: 22, src: '/images/spanishclub/DSCF5204.jpg' },
  { id: 23, src: '/images/spanishclub/DSCF5212.jpg' },
  { id: 24, src: '/images/spanishclub/DSCF5213.jpg' },
  { id: 25, src: '/images/spanishclub/DSCF5220.jpg' },
  { id: 26, src: '/images/spanishclub/DSCF5226.jpg' },
  { id: 27, src: '/images/spanishclub/DSCF5227.jpg' },
  { id: 28, src: '/images/spanishclub/DSCF5236.jpg' },
  { id: 29, src: '/images/spanishclub/DSCF5243.jpg' },
  { id: 30, src: '/images/spanishclub/DSCF5246.jpg' },
  { id: 31, src: '/images/spanishclub/DSCF5251.jpg' },
  { id: 32, src: '/images/spanishclub/DSCF5254.jpg' },
  { id: 33, src: '/images/spanishclub/DSCF5256.jpg' },
  { id: 34, src: '/images/spanishclub/DSCF5258.jpg' },
  { id: 35, src: '/images/spanishclub/DSCF5259.jpg' },
  { id: 36, src: '/images/spanishclub/DSCF5260.jpg' },
  { id: 37, src: '/images/spanishclub/DSCF5265.jpg' },
  { id: 38, src: '/images/spanishclub/DSCF5269.jpg' },
  { id: 39, src: '/images/spanishclub/DSCF5270.jpg' },
  { id: 40, src: '/images/spanishclub/DSCF5272.jpg' },
  { id: 41, src: '/images/spanishclub/DSCF5277.jpg' },
  { id: 42, src: '/images/spanishclub/DSCF5279.jpg' },
  { id: 43, src: '/images/spanishclub/DSCF5282.jpg' },
  { id: 44, src: '/images/spanishclub/DSCF5283.jpg' },
]

const lightbox = ref(null)
</script>

<template>
  <div class="portfolio-page">
    <div class="portfolio-hero">
      <p class="portfolio-eyebrow">Event Gallery</p>
      <h1 class="portfolio-heading">Spanish <span class="accent">Club</span></h1>
      <p class="portfolio-sub">Browse the gallery or order a fine art print.</p>
    </div>

    <div class="photo-grid">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="photo-card"
        @click="lightbox = photo"
      >
        <img :src="photo.src" alt="" class="photo-img" loading="lazy" />
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="lightbox" class="lightbox" @click="lightbox = null">
      <div class="lightbox-inner" @click.stop>
        <button class="lightbox-close" @click="lightbox = null">&#10005;</button>
        <img :src="lightbox.src" alt="" class="lightbox-img" />
        <div class="lightbox-info">
          <div>
            <span class="photo-category">Spanish Club</span>
          </div>
          <div class="lightbox-actions">
            <a
              class="btn-print"
              :href="PIXIESET_GALLERY"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#8862; Order Print
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
