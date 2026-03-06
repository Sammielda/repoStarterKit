import React from 'react';

const Footer = () => (
  <footer>
    <span>© {new Date().getFullYear()} Samuel Charris Photography</span>
    <span className="footer-divider">·</span>
    <a
      href="https://www.instagram.com/samuelcharriss"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      @samuelcharriss
    </a>
  </footer>
);

export default Footer;
