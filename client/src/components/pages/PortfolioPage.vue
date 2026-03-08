<script setup>
import { ref, computed } from 'vue'

const photos = [
  { id: 1,  category: 'Landscape', title: 'Golden Wildflowers',      price: 20, printPrice: 65, src: '/images/DSCF4226.jpg' },
  { id: 2,  category: 'Landscape', title: 'City at Dusk',            price: 20, printPrice: 65, src: '/images/DSCF4263.jpg' },
  { id: 3,  category: 'Landscape', title: 'Charlotte Sunrise',       price: 22, printPrice: 70, src: '/images/DSCF4323.jpg' },
  { id: 4,  category: 'Portraits', title: 'Natural Light',           price: 15, printPrice: 45, src: '/images/DSCF3554.jpg' },
  { id: 5,  category: 'Portraits', title: 'Studio Session',          price: 15, printPrice: 45, src: '/images/DSCF3539.jpg' },
  { id: 6,  category: 'Portraits', title: 'Editorial Portrait',      price: 15, printPrice: 45, src: '/images/DSCF3528.jpg' },
  { id: 7,  category: 'Events',    title: 'Sumaq Dining Experience', price: 12, printPrice: 38, src: '/images/DSCF1088.jpg' },
  { id: 8,  category: 'Events',    title: 'Sumaq Kitchen',           price: 12, printPrice: 38, src: '/images/DSCF1096.jpg' },
  { id: 9,  category: 'Events',    title: 'SAVU Restaurant',         price: 12, printPrice: 38, src: '/images/DSCF4120.jpg' },
  { id: 10, category: 'Events',    title: 'SAVU Ambiance',           price: 12, printPrice: 38, src: '/images/DSCF4121.jpg' },
  { id: 11, category: 'Gallery',   title: 'Film 001',                price: 12, printPrice: 38, src: '/images/gallery/000477620001.jpg' },
  { id: 12, category: 'Gallery',   title: 'Film 002',                price: 12, printPrice: 38, src: '/images/gallery/000477620002.jpg' },
  { id: 13, category: 'Gallery',   title: 'Film 003',                price: 12, printPrice: 38, src: '/images/gallery/000477620003.jpg' },
  { id: 14, category: 'Gallery',   title: 'Film 007',                price: 12, printPrice: 38, src: '/images/gallery/000477620007.jpg' },
  { id: 15, category: 'Gallery',   title: 'Film 008',                price: 12, printPrice: 38, src: '/images/gallery/000477620008.jpg' },
  { id: 16, category: 'Gallery',   title: 'Film 350009',             price: 12, printPrice: 38, src: '/images/gallery/001982350009.jpg' },
  { id: 17, category: 'Gallery',   title: 'Film 320002',             price: 12, printPrice: 38, src: '/images/gallery/002050320002.jpg' },
  { id: 18, category: 'Gallery',   title: 'DSCF 0308',              price: 12, printPrice: 38, src: '/images/gallery/DSCF0308.jpg' },
  { id: 19, category: 'Gallery',   title: 'DSCF 0723',              price: 12, printPrice: 38, src: '/images/gallery/DSCF0723.jpg' },
  { id: 20, category: 'Gallery',   title: 'DSCF 0752',              price: 12, printPrice: 38, src: '/images/gallery/DSCF0752.jpg' },
  { id: 21, category: 'Gallery',   title: 'DSCF 0758',              price: 12, printPrice: 38, src: '/images/gallery/DSCF0758.jpg' },
  { id: 22, category: 'Gallery',   title: 'DSCF 0932',              price: 12, printPrice: 38, src: '/images/gallery/DSCF0932.jpg' },
  { id: 23, category: 'Gallery',   title: 'DSCF 0995',              price: 12, printPrice: 38, src: '/images/gallery/DSCF0995.jpg' },
  { id: 24, category: 'Gallery',   title: 'DSCF 1025',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1025.jpg' },
  { id: 25, category: 'Gallery',   title: 'DSCF 1059',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1059.jpg' },
  { id: 26, category: 'Gallery',   title: 'DSCF 1084',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1084.jpg' },
  { id: 27, category: 'Gallery',   title: 'DSCF 1122',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1122.jpg' },
  { id: 28, category: 'Gallery',   title: 'DSCF 1127',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1127.jpg' },
  { id: 29, category: 'Gallery',   title: 'DSCF 1179',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1179.jpg' },
  { id: 30, category: 'Gallery',   title: 'DSCF 1225',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1225.jpg' },
  { id: 31, category: 'Gallery',   title: 'DSCF 1228',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1228.jpg' },
  { id: 32, category: 'Gallery',   title: 'DSCF 1263',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1263.jpg' },
  { id: 33, category: 'Gallery',   title: 'DSCF 1264',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1264.jpg' },
  { id: 34, category: 'Gallery',   title: 'DSCF 1744',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1744.jpg' },
  { id: 35, category: 'Gallery',   title: 'DSCF 1804',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1804.jpg' },
  { id: 36, category: 'Gallery',   title: 'DSCF 1812',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1812.jpg' },
  { id: 37, category: 'Gallery',   title: 'DSCF 1944',              price: 12, printPrice: 38, src: '/images/gallery/DSCF1944.jpg' },
  { id: 38, category: 'Gallery',   title: 'DSCF 2051',              price: 12, printPrice: 38, src: '/images/gallery/DSCF2051.jpg' },
  { id: 39, category: 'Gallery',   title: 'DSCF 2773',              price: 12, printPrice: 38, src: '/images/gallery/DSCF2773.jpg' },
  { id: 40, category: 'Gallery',   title: 'DSCF 4273',              price: 12, printPrice: 38, src: '/images/gallery/DSCF4273.jpg' },
  { id: 41, category: 'Gallery',   title: 'DSCF 4274',              price: 12, printPrice: 38, src: '/images/gallery/DSCF4274.jpg' },
  { id: 42, category: 'Gallery',   title: 'DSCF 4405',              price: 12, printPrice: 38, src: '/images/gallery/DSCF4405.jpg' },
  { id: 43, category: 'Gallery',   title: 'DSCF 4407',              price: 12, printPrice: 38, src: '/images/gallery/DSCF4407.jpg' },
  { id: 44, category: 'Gallery',   title: 'DSCF 9554',              price: 12, printPrice: 38, src: '/images/gallery/DSCF9554.jpg' },
  { id: 45, category: 'Gallery',   title: 'DSCF 9607',              price: 12, printPrice: 38, src: '/images/gallery/DSCF9607.jpg' },
  { id: 46, category: 'Gallery',   title: 'DSCF 9615',              price: 12, printPrice: 38, src: '/images/gallery/DSCF9615.jpg' },
  { id: 47, category: 'Gallery',   title: 'DSCF 9623',              price: 12, printPrice: 38, src: '/images/gallery/DSCF9623.jpg' },
  { id: 48, category: 'Gallery',   title: 'DSCF 9642',              price: 12, printPrice: 38, src: '/images/gallery/DSCF9642.jpg' },
  { id: 49, category: 'Gallery',   title: 'DSCF 9652',              price: 12, printPrice: 38, src: '/images/gallery/DSCF9652.jpg' },
  { id: 50, category: 'Gallery',   title: 'DSCF 9661',              price: 12, printPrice: 38, src: '/images/gallery/DSCF9661.jpg' },
  { id: 51, category: 'Gallery',   title: 'DSCF 9664',              price: 12, printPrice: 38, src: '/images/gallery/DSCF9664.jpg' },
  { id: 52, category: 'Gallery',   title: 'IMG 2125',               price: 12, printPrice: 38, src: '/images/gallery/IMG_2125.jpg' },
  { id: 53, category: 'Gallery',   title: 'IMG 2130',               price: 12, printPrice: 38, src: '/images/gallery/IMG_2130.jpg' },
  { id: 54, category: 'Gallery',   title: 'IMG 2138',               price: 12, printPrice: 38, src: '/images/gallery/IMG_2138.jpg' },
  { id: 55, category: 'Gallery',   title: 'IMG 2139',               price: 12, printPrice: 38, src: '/images/gallery/IMG_2139.jpg' },
  { id: 56, category: 'Gallery',   title: 'IMG 2141',               price: 12, printPrice: 38, src: '/images/gallery/IMG_2141.jpg' },
  { id: 57, category: 'Gallery',   title: 'IMG 2143',               price: 12, printPrice: 38, src: '/images/gallery/IMG_2143.jpg' },
  { id: 58, category: 'Gallery',   title: 'IMG 2144',               price: 12, printPrice: 38, src: '/images/gallery/IMG_2144.jpg' },
  { id: 59, category: 'Gallery',   title: 'IMG 2145',               price: 12, printPrice: 38, src: '/images/gallery/IMG_2145.jpg' },
]

const categories = ['All', 'Landscape', 'Portraits', 'Events', 'Gallery']

const active = ref('All')
const lightbox = ref(null)
const hoveredId = ref(null)

const filtered = computed(() =>
  active.value === 'All' ? photos : photos.filter(p => p.category === active.value)
)
</script>

<template>
  <div class="portfolio-page">
    <div class="portfolio-hero">
      <p class="portfolio-eyebrow">Photography Portfolio</p>
      <h1 class="portfolio-heading">Moments Worth <span class="accent">Owning</span></h1>
      <p class="portfolio-sub">Browse, download, or order a fine art print of any photo.</p>
    </div>

    <div class="filter-bar">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['filter-btn', { active: active === cat }]"
        @click="active = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="photo-grid">
      <div
        v-for="photo in filtered"
        :key="photo.id"
        class="photo-card"
        @mouseenter="hoveredId = photo.id"
        @mouseleave="hoveredId = null"
        @click="lightbox = photo"
      >
        <img :src="photo.src" :alt="photo.title" class="photo-img" loading="lazy" />
        <div :class="['photo-overlay', { visible: hoveredId === photo.id }]">
          <span class="photo-category">{{ photo.category }}</span>
          <h3 class="photo-title">{{ photo.title }}</h3>
          <div class="photo-actions">
            <button class="btn-download" @click.stop>
              &darr; Download <span>${{ photo.price }}</span>
            </button>
            <button class="btn-print" @click.stop>
              &#8862; Print <span>${{ photo.printPrice }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="lightbox" class="lightbox" @click="lightbox = null">
      <div class="lightbox-inner" @click.stop>
        <button class="lightbox-close" @click="lightbox = null">&#10005;</button>
        <img :src="lightbox.src" :alt="lightbox.title" class="lightbox-img" />
        <div class="lightbox-info">
          <div>
            <span class="photo-category">{{ lightbox.category }}</span>
            <h2 class="lightbox-title">{{ lightbox.title }}</h2>
          </div>
          <div class="lightbox-actions">
            <button class="btn-download">&darr; Digital Download — ${{ lightbox.price }}</button>
            <button class="btn-print">&#8862; Order Print — ${{ lightbox.printPrice }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
