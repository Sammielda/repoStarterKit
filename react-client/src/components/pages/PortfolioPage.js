import React, { useState } from 'react';

import img4226 from '../../images/DSCF4226.jpg';
import img4263 from '../../images/DSCF4263.jpg';
import img4323 from '../../images/DSCF4323.jpg';
import img3554 from '../../images/DSCF3554.jpg';
import img3539 from '../../images/DSCF3539.jpg';
import img3528 from '../../images/DSCF3528.jpg';
import img1088 from '../../images/DSCF1088.jpg';
import img1096 from '../../images/DSCF1096.jpg';
import img4120 from '../../images/DSCF4120.jpg';
import img4121 from '../../images/DSCF4121.jpg';
import img2507 from '../../images/DSCF2507.jpg';
import img2509 from '../../images/DSCF2509.jpg';

const photos = [
  { id: 1,  category: 'Landscape', title: 'Golden Wildflowers',      price: 20, printPrice: 65, src: img4226 },
  { id: 2,  category: 'Landscape', title: 'City at Dusk',            price: 20, printPrice: 65, src: img4263 },
  { id: 3,  category: 'Landscape', title: 'Charlotte Sunrise',       price: 22, printPrice: 70, src: img4323 },
  { id: 4,  category: 'Portraits', title: 'Natural Light',           price: 15, printPrice: 45, src: img3554 },
  { id: 5,  category: 'Portraits', title: 'Studio Session',          price: 15, printPrice: 45, src: img3539 },
  { id: 6,  category: 'Portraits', title: 'Editorial Portrait',      price: 15, printPrice: 45, src: img3528 },
  { id: 7,  category: 'Events',    title: 'Sumaq Dining Experience', price: 12, printPrice: 38, src: img1088 },
  { id: 8,  category: 'Events',    title: 'Sumaq Kitchen',           price: 12, printPrice: 38, src: img1096 },
  { id: 9,  category: 'Events',    title: 'SAVU Restaurant',         price: 12, printPrice: 38, src: img4120 },
  { id: 10, category: 'Events',    title: 'SAVU Ambiance',           price: 12, printPrice: 38, src: img4121 },
  { id: 11, category: 'Events',    title: 'Oshen Party',             price: 10, printPrice: 32, src: img2507 },
  { id: 12, category: 'Events',    title: 'Night Celebration',       price: 10, printPrice: 32, src: img2509 },
];

const categories = ['All', 'Landscape', 'Portraits', 'Events'];

const PhotoCard = ({ photo, onOpen }) => {
  const [hovered, setHovered] = useState(false);
  const src = photo.src;

  return (
    <div
      className="photo-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(photo)}
    >
      <img src={src} alt={photo.title} className="photo-img" loading="lazy" />
      <div className={`photo-overlay ${hovered ? 'visible' : ''}`}>
        <span className="photo-category">{photo.category}</span>
        <h3 className="photo-title">{photo.title}</h3>
        <div className="photo-actions">
          <button className="btn-download" onClick={e => { e.stopPropagation(); }}>
            ↓ Download <span>${photo.price}</span>
          </button>
          <button className="btn-print" onClick={e => { e.stopPropagation(); }}>
            ⊞ Print <span>${photo.printPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Lightbox = ({ photo, onClose }) => {
  if (!photo) return null;
  const src = photo.src;
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕</button>
        <img src={src} alt={photo.title} className="lightbox-img" />
        <div className="lightbox-info">
          <div>
            <span className="photo-category">{photo.category}</span>
            <h2 className="lightbox-title">{photo.title}</h2>
          </div>
          <div className="lightbox-actions">
            <button className="btn-download">↓ Digital Download — ${photo.price}</button>
            <button className="btn-print">⊞ Order Print — ${photo.printPrice}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active);

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <p className="portfolio-eyebrow">Photography Portfolio</p>
        <h1 className="portfolio-heading">Moments Worth <span className="accent">Owning</span></h1>
        <p className="portfolio-sub">Browse, download, or order a fine art print of any photo.</p>
      </div>

      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {filtered.map(photo => (
          <PhotoCard key={photo.id} photo={photo} onOpen={setLightbox} />
        ))}
      </div>

      <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
};

export default PortfolioPage;
