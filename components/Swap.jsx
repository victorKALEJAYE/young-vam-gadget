'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { swapSteps } from '@/lib/data';
import { waLink } from '@/lib/site';

const conditions = ['Like new', 'Good, light scratches', 'Cracked screen or back', 'Faulty'];

export default function Swap() {
  const [form, setForm] = useState({ current: '', storage: '', condition: conditions[0], battery: '', wanted: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const message =
    `Hello Young Vam Gadgets, I want a swap quote.\n` +
    `My device: ${form.current || '-'} ${form.storage ? `(${form.storage})` : ''}\n` +
    `Condition: ${form.condition}\n` +
    `Battery health: ${form.battery || '-'}\n` +
    `I want: ${form.wanted || '-'}`;

  const ready = form.current.trim() && form.wanted.trim();

  function onSubmit(e) {
    e.preventDefault();
    if (!ready) return;
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="swap" className="section">
      <div className="wrap swap">
        <div>
          <Reveal>
            <div className="eyebrow">How swap works</div>
            <h2>Bring your old phone. Leave with a new one.</h2>
          </Reveal>

          <ol className="steps">
            {swapSteps.map((s, i) => (
              <Reveal as="li" key={s.title} className="step" delay={i * 0.08}>
                <span className="step-n">{i + 1}</span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="cube-wrap" aria-hidden="true">
            <div className="cube">
              <div className="f f1">BUY</div>
              <div className="f f2">SWAP</div>
              <div className="f f3">SELL</div>
              <div className="f f4">FIX</div>
              <div className="f f5">YVG</div>
              <div className="f f6">YVG</div>
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <form className="card quote" onSubmit={onSubmit}>
            <h3>Get a swap quote</h3>
            <p className="muted">Fill this in and it opens WhatsApp with your details ready to send.</p>

            <label htmlFor="q-current">Your current device</label>
            <input id="q-current" placeholder="e.g. iPhone 11" value={form.current} onChange={set('current')} required />

            <div className="row-2">
              <div>
                <label htmlFor="q-storage">Storage</label>
                <input id="q-storage" placeholder="e.g. 128GB" value={form.storage} onChange={set('storage')} />
              </div>
              <div>
                <label htmlFor="q-battery">Battery health</label>
                <input id="q-battery" placeholder="e.g. 86%" value={form.battery} onChange={set('battery')} />
              </div>
            </div>

            <label htmlFor="q-condition">Condition</label>
            <select id="q-condition" value={form.condition} onChange={set('condition')}>
              {conditions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <label htmlFor="q-wanted">Device you want</label>
            <input id="q-wanted" placeholder="e.g. iPhone 13 Pro" value={form.wanted} onChange={set('wanted')} required />

            <button className="btn btn-primary btn-block" type="submit" disabled={!ready}>
              Send on WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
