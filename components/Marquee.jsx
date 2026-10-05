import { brands } from '@/lib/data';

export default function Marquee() {
  const row = [...brands, ...brands];
  return (
    <div className="marquee" aria-label="Brands we stock">
      <div className="marquee-track">
        {row.map((b, i) => (
          <span key={`${b}-${i}`} aria-hidden={i >= brands.length}>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
