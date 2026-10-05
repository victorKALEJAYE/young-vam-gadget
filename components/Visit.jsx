'use client';

import { useState } from 'react';
import Icon, { WhatsAppIcon } from './Icons';
import Reveal from './Reveal';
import { site, waLink } from '@/lib/site';

export default function Visit() {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard
      ?.writeText(site.phone)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
  }

  return (
    <section id="visit" className="section">
      <div className="wrap visit">
        <Reveal className="card visit-main">
          <div className="eyebrow">Visit the store</div>
          <div className="big">{site.shop}</div>
          <dl className="dl">
            <dt>
              <Icon name="pin" size={16} /> Store
            </dt>
            <dd>{site.address}</dd>
            <dt>
              <Icon name="call" size={16} /> Call
            </dt>
            <dd>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              <button type="button" className="copy" onClick={copy}>
                {copied ? 'Copied' : 'Copy'}
              </button>
            </dd>
            <dt>
              <Icon name="clock" size={16} /> Hours
            </dt>
            <dd>{site.hours}</dd>
            <dt>TikTok</dt>
            <dd>
              <a href={site.tiktok} target="_blank" rel="noopener noreferrer">
                {site.tiktokHandle}
              </a>
            </dd>
          </dl>
        </Reveal>

        <Reveal className="card visit-side" delay={0.1}>
          <div>
            <h3>Tell your friends about Youngvam.</h3>
            <p className="muted">Enjoy quality gadgets at affordable prices. Watch new arrivals, unboxings and happy customers on our TikTok.</p>
          </div>
          <div className="visit-actions">
            <a className="btn btn-primary" href={waLink('Hello Young Vam Gadgets!')} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} /> WhatsApp us
            </a>
            <a className="btn btn-ghost" href={site.tiktok} target="_blank" rel="noopener noreferrer">
              Follow on TikTok
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
