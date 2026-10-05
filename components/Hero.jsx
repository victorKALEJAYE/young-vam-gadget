'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';
import Icon from './Icons';
import { site, waLink } from '@/lib/site';

const words = ['buy', 'sell', 'swap', 'repair'];

export default function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [word, setWord] = useState(0);

  const ry = useSpring(-22, { stiffness: 80, damping: 16 });
  const rx = useSpring(8, { stiffness: 80, damping: 16 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      ry.set(-22 + x * 34);
      rx.set(8 - y * 18);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, rx, ry]);

  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % words.length), 1800);
    return () => clearInterval(id);
  }, []);

  function toggleSound() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  }

  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          {site.tagline}
        </motion.div>

        <h1 className="hero-title">
          <motion.span className="lift" initial={{ opacity: 0, rotateX: 70, y: 30 }} animate={{ opacity: 1, rotateX: 18, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            Your dream
          </motion.span>
          <br />
          <motion.span className="outline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}>
            gadget
          </motion.span>{' '}
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }}>
            don land.
          </motion.span>
        </h1>

        <motion.p className="lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          Phones, laptops and accessories you can trust, plus repairs, software installs and fair swap deals. Walk into {site.shop}, test it with
          your own hands, and leave with a smile.
        </motion.p>

        <motion.div className="cta-row" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <a className="btn btn-primary" href="#shop">
            Come buy am <Icon name="arrow" size={18} />
          </a>
          <a className="btn btn-ghost" href={waLink('Hello, I want to swap my phone. Here are the details:')} target="_blank" rel="noopener noreferrer">
            Swap your phone
          </a>
        </motion.div>

        <div className="we-row">
          <span className="we-label">We</span>
          <span className="we-word" aria-live="polite">
            <motion.span key={words[word]} initial={{ rotateX: -90, opacity: 0 }} animate={{ rotateX: 0, opacity: 1 }} exit={{ rotateX: 90, opacity: 0 }} transition={{ duration: 0.45 }}>
              {words[word]}
            </motion.span>
          </span>
          <span className="we-sub">phones · laptops · accessories</span>
        </div>
      </div>

      <div className="stage">
        <motion.div className="phone3d" style={{ rotateY: ry, rotateX: rx }} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="p-back" />
          <div className="p-side p-side--r" />
          <div className="p-side p-side--l" />
          <div className="p-face">
            <div className="p-screen">
              <div className="p-island" />
              <video ref={videoRef} src="/store.mp4" poster="/poster.jpg" autoPlay muted loop playsInline />
              <div className="p-glare" />
              <button className="sound-btn" type="button" onClick={toggleSound}>
                <Icon name={muted ? 'mute' : 'volume'} size={16} />
                {muted ? 'Tap for sound' : 'Mute'}
              </button>
            </div>
          </div>
          <div className="p-floor" />
        </motion.div>

        <motion.div className="float-tag float-tag--a" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <Icon name="check" size={16} /> Tested at the counter
        </motion.div>
        <motion.div className="float-tag float-tag--b" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
          <Icon name="swap" size={16} /> Swap deals daily
        </motion.div>
      </div>
    </section>
  );
}
