import React, { useState } from 'react';

import sc5093 from '../../images/spanishclub/DSCF5093.jpg';
import sc5095 from '../../images/spanishclub/DSCF5095.jpg';
import sc5097 from '../../images/spanishclub/DSCF5097.jpg';
import sc5101 from '../../images/spanishclub/DSCF5101.jpg';
import sc5105 from '../../images/spanishclub/DSCF5105.jpg';
import sc5108 from '../../images/spanishclub/DSCF5108.jpg';
import sc5109 from '../../images/spanishclub/DSCF5109.jpg';
import sc5116 from '../../images/spanishclub/DSCF5116.jpg';
import sc5117 from '../../images/spanishclub/DSCF5117.jpg';
import sc5131 from '../../images/spanishclub/DSCF5131.jpg';
import sc5159 from '../../images/spanishclub/DSCF5159.jpg';
import sc5160 from '../../images/spanishclub/DSCF5160.jpg';
import sc5162 from '../../images/spanishclub/DSCF5162.jpg';
import sc5166 from '../../images/spanishclub/DSCF5166.jpg';
import sc5167 from '../../images/spanishclub/DSCF5167.jpg';
import sc5171 from '../../images/spanishclub/DSCF5171.jpg';
import sc5172 from '../../images/spanishclub/DSCF5172.jpg';
import sc5186 from '../../images/spanishclub/DSCF5186.jpg';
import sc5201b from '../../images/spanishclub/DSCF5201b.jpg';
import sc5201 from '../../images/spanishclub/DSCF5201.jpg';
import sc5202 from '../../images/spanishclub/DSCF5202.jpg';
import sc5204 from '../../images/spanishclub/DSCF5204.jpg';
import sc5212 from '../../images/spanishclub/DSCF5212.jpg';
import sc5213 from '../../images/spanishclub/DSCF5213.jpg';
import sc5220 from '../../images/spanishclub/DSCF5220.jpg';
import sc5226 from '../../images/spanishclub/DSCF5226.jpg';
import sc5227 from '../../images/spanishclub/DSCF5227.jpg';
import sc5236 from '../../images/spanishclub/DSCF5236.jpg';
import sc5243 from '../../images/spanishclub/DSCF5243.jpg';
import sc5246 from '../../images/spanishclub/DSCF5246.jpg';
import sc5251 from '../../images/spanishclub/DSCF5251.jpg';
import sc5254 from '../../images/spanishclub/DSCF5254.jpg';
import sc5256 from '../../images/spanishclub/DSCF5256.jpg';
import sc5258 from '../../images/spanishclub/DSCF5258.jpg';
import sc5259 from '../../images/spanishclub/DSCF5259.jpg';
import sc5260 from '../../images/spanishclub/DSCF5260.jpg';
import sc5265 from '../../images/spanishclub/DSCF5265.jpg';
import sc5269 from '../../images/spanishclub/DSCF5269.jpg';
import sc5270 from '../../images/spanishclub/DSCF5270.jpg';
import sc5272 from '../../images/spanishclub/DSCF5272.jpg';
import sc5277 from '../../images/spanishclub/DSCF5277.jpg';
import sc5279 from '../../images/spanishclub/DSCF5279.jpg';
import sc5282 from '../../images/spanishclub/DSCF5282.jpg';
import sc5283 from '../../images/spanishclub/DSCF5283.jpg';

const PIXIESET_GALLERY = 'https://sam6757.pixieset.com/portfoliolandscape/';

const photos = [
  { id: 1,  src: sc5093 },
  { id: 2,  src: sc5095 },
  { id: 3,  src: sc5097 },
  { id: 4,  src: sc5101 },
  { id: 5,  src: sc5105 },
  { id: 6,  src: sc5108 },
  { id: 7,  src: sc5109 },
  { id: 8,  src: sc5116 },
  { id: 9,  src: sc5117 },
  { id: 10, src: sc5131 },
  { id: 11, src: sc5159 },
  { id: 12, src: sc5160 },
  { id: 13, src: sc5162 },
  { id: 14, src: sc5166 },
  { id: 15, src: sc5167 },
  { id: 16, src: sc5171 },
  { id: 17, src: sc5172 },
  { id: 18, src: sc5186 },
  { id: 19, src: sc5201b },
  { id: 20, src: sc5201 },
  { id: 21, src: sc5202 },
  { id: 22, src: sc5204 },
  { id: 23, src: sc5212 },
  { id: 24, src: sc5213 },
  { id: 25, src: sc5220 },
  { id: 26, src: sc5226 },
  { id: 27, src: sc5227 },
  { id: 28, src: sc5236 },
  { id: 29, src: sc5243 },
  { id: 30, src: sc5246 },
  { id: 31, src: sc5251 },
  { id: 32, src: sc5254 },
  { id: 33, src: sc5256 },
  { id: 34, src: sc5258 },
  { id: 35, src: sc5259 },
  { id: 36, src: sc5260 },
  { id: 37, src: sc5265 },
  { id: 38, src: sc5269 },
  { id: 39, src: sc5270 },
  { id: 40, src: sc5272 },
  { id: 41, src: sc5277 },
  { id: 42, src: sc5279 },
  { id: 43, src: sc5282 },
  { id: 44, src: sc5283 },
];

const Lightbox = ({ photo, onClose }) => {
  if (!photo) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>&#10005;</button>
        <img src={photo.src} alt="" className="lightbox-img" />
        <div className="lightbox-info">
          <div>
            <span className="photo-category">Spanish Club</span>
          </div>
          <div className="lightbox-actions">
            <a
              className="btn-print"
              href={PIXIESET_GALLERY}
              target="_blank"
              rel="noopener noreferrer"
            >
              &#8862; Order Print
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpanishClubPage = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <p className="portfolio-eyebrow">Event Gallery</p>
        <h1 className="portfolio-heading">Spanish <span className="accent">Club</span></h1>
        <p className="portfolio-sub">Browse the gallery or order a fine art print.</p>
      </div>

      <div className="photo-grid">
        {photos.map(photo => (
          <div
            key={photo.id}
            className="photo-card"
            onClick={() => setLightbox(photo)}
          >
            <img src={photo.src} alt="" className="photo-img" loading="lazy" />
          </div>
        ))}
      </div>

      <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
};

export default SpanishClubPage;
