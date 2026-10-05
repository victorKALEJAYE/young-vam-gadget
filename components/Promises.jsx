import Icon from './Icons';
import Reveal from './Reveal';
import { promises } from '@/lib/data';

export default function Promises() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="promise-band">
          <div className="promise-head">
            <div className="eyebrow">Why buy from Young Vam</div>
            <h2>Shop with your eyes open.</h2>
          </div>
          <ul className="promise-list">
            {promises.map((p) => (
              <li key={p.k}>
                <span className="tick">
                  <Icon name="check" size={16} />
                </span>
                <div>
                  <b>{p.k}</b>
                  <p>{p.v}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
