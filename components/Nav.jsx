'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icons';
import { site, waLink } from '@/lib/site';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#shop', label: 'Shop' },
  { href: '#swap', label: 'Swap' },
  { href: '#faq', label: 'FAQ' },
  { href: '#visit', label: 'Visit' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label={`${site.name} home`}>
          <span className="badge">{site.short}</span>
          <span className="brand-text">
            <b>Young Vam</b>
            <small>Gadgets · Accessories</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="btn btn-primary btn-sm" href={waLink('Hello Young Vam Gadgets, I want to make an enquiry.')} target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
          <button className="menu-btn" type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Icon name="menu" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button className="menu-btn drawer-close" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon name="close" />
            </button>
            <nav aria-label="Mobile">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 40, rotateY: -30 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a className="btn btn-primary" href={waLink('Hello Young Vam Gadgets, I want to make an enquiry.')} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
