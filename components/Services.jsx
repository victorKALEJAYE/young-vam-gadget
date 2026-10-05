import Icon from './Icons';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">Our services include</div>
            <h2>Everything your gadget needs, one counter.</h2>
          </div>
          <p>From a brand-new iPhone to a cracked screen or a slow laptop, the team at Young Vam sorts it out.</p>
        </Reveal>

        <div className="grid-3 perspective">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <TiltCard className="card service">
                <div className="card-glow" />
                <div className="ico">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
