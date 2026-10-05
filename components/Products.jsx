'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { categories, products } from '@/lib/data';
import { waLink } from '@/lib/site';

/* Small CSS-3D product models, so the shop works without product photos. */
function Model({ shape, hue }) {
  return (
    <div className={`model model--${shape}`} style={{ '--hue': hue }}>
      <div className="m-body">
        <div className="m-screen" />
      </div>
      {shape === 'laptop' && <div className="m-base" />}
      {shape === 'watch' && <div className="m-strap" />}
      {shape === 'headphones' && (
        <>
          <div className="m-cup m-cup--l" />
          <div className="m-cup m-cup--r" />
        </>
      )}
    </div>
  );
}

export default function Products() {
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? products : products.filter((p) => p.cat === cat);

  return (
    <section id="shop" className="section">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">On our shelves</div>
            <h2>Pick your next gadget.</h2>
          </div>
          <p>Prices move with the market, so tap any item to get today&apos;s price and stock on WhatsApp.</p>
        </Reveal>

        <div className="tabs" role="tablist" aria-label="Product categories">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={cat === c}
              className={`tab ${cat === c ? 'tab--on' : ''}`}
              onClick={() => setCat(c)}
            >
              {cat === c && <motion.span layoutId="tab-pill" className="tab-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="tab-label">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid-products perspective">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                transition={{ duration: 0.35 }}
              >
                <TiltCard className="card product">
                  <div className="product-stage">
                    <Model shape={p.shape} hue={p.hue} />
                  </div>
                  <div className="product-info">
                    <span className="chip">{p.cat}</span>
                    <h3>{p.name}</h3>
                    <p>{p.line}</p>
                    <a
                      className="btn btn-ghost btn-sm"
                      href={waLink(`Hello Young Vam Gadgets, what is the price and availability of ${p.name}?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ask for price
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
