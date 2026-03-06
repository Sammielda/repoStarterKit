import React from 'react';
import { Link } from 'react-router-dom';

import heroImg   from '../../images/DSCF4323.jpg';  // Charlotte Sunrise landscape
import landscapeImg from '../../images/DSCF4226.jpg'; // Golden Wildflowers
import portraitImg  from '../../images/DSCF3554.jpg'; // Natural Light portrait
import eventImg     from '../../images/DSCF1088.jpg'; // Sumaq Dining
import ctaImg       from '../../images/DSCF4263.jpg'; // City at Dusk

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
];

const HomePage = () => (
  <div>
    {/* ── HERO ── */}
    <section className="home-hero">
      <div className="home-hero-bg" />
      <img src={heroImg} alt="Charlotte Sunrise" className="home-hero-img" />
      <div className="home-hero-gradient" />

      <div className="home-hero-content">
        <p className="home-hero-eyebrow">Charlotte, NC · Est. 2019</p>
        <h1 className="home-hero-title">
          Samuel<br /><em>Charris</em>
        </h1>
        <p className="home-hero-sub">
          Photography that holds its ground. Landscapes, portraits, and events
          captured with intention — available as digital downloads and fine art prints.
        </p>
        <div className="home-hero-cta">
          <Link to="/portfolio" className="btn-olive">View Portfolio</Link>
          <button className="btn-ghost">
            Shop Prints →
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>

    {/* ── MARQUEE ── */}
    <div className="marquee-strip">
      <div className="marquee-track">
        {marqueeItems.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>

    {/* ── LANDSCAPE PANEL ── */}
    <div className="split-panel">
      <div className="split-img-wrap">
        <img src={landscapeImg} alt="Golden Wildflowers" />
      </div>
      <div className="split-text">
        <span className="split-text-tag">Landscape</span>
        <h2>Earth as<br /><em>Subject</em></h2>
        <p>
          Wide open fields, city horizons at dusk, and the quiet weight
          of golden hour. Samuel's landscape work finds the extraordinary
          in familiar terrain across the Carolinas and beyond.
        </p>
        <Link to="/portfolio" className="btn-olive" style={{ alignSelf: 'flex-start' }}>
          Explore Landscapes
        </Link>
      </div>
    </div>

    {/* ── STATS ── */}
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-num">12+</span>
        <span className="stat-lbl">Fine Art Prints<br />Available</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">3</span>
        <span className="stat-lbl">Categories:<br />Landscape · Portraits · Events</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">∞</span>
        <span className="stat-lbl">Digital Downloads<br />Instant Access</span>
      </div>
    </div>

    {/* ── PORTRAIT PANEL (reversed) ── */}
    <div className="split-panel reverse">
      <div className="split-img-wrap">
        <img src={portraitImg} alt="Natural Light Portrait" />
      </div>
      <div className="split-text">
        <span className="split-text-tag">Portraits</span>
        <h2>People,<br /><em>Honestly</em></h2>
        <p>
          No forced smiles. Natural light, real moments, and a quiet
          environment where subjects can simply be themselves.
          Editorial, intimate, and timeless.
        </p>
        <Link to="/portfolio" className="btn-olive" style={{ alignSelf: 'flex-start' }}>
          View Portraits
        </Link>
      </div>
    </div>

    {/* ── EVENTS PANEL ── */}
    <div className="split-panel">
      <div className="split-img-wrap">
        <img src={eventImg} alt="Sumaq Dining Experience" />
      </div>
      <div className="split-text">
        <span className="split-text-tag">Events & Hospitality</span>
        <h2>The Room<br /><em>Alive</em></h2>
        <p>
          Restaurant ambiance, private gatherings, and curated dining
          experiences — documented with the same care given to
          every other frame.
        </p>
        <Link to="/portfolio" className="btn-olive" style={{ alignSelf: 'flex-start' }}>
          View Events
        </Link>
      </div>
    </div>

    {/* ── CTA SECTION ── */}
    <section className="home-cta-section">
      <div className="home-cta-bg" />
      <img src={ctaImg} alt="City at Dusk" className="home-cta-img" />
      <div className="home-cta-overlay" />
      <div className="home-cta-content">
        <p className="home-cta-eyebrow">Fine Art Prints & Digital Downloads</p>
        <h2>Own a<br /><em>Moment</em></h2>
        <p>
          Every photo in the portfolio is available to purchase — download
          instantly or order a professionally printed fine art print delivered to your door.
        </p>
        <Link to="/portfolio" className="btn-olive">Browse the Portfolio</Link>
      </div>
    </section>
  </div>
);

export default HomePage;
