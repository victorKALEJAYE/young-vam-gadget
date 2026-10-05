import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="brand">
          <span className="badge">{site.short}</span>
          <span className="brand-text">
            <b>Young Vam</b>
            <small>Gadgets · Accessories</small>
          </span>
        </div>
        <p>We buy · sell · swap · repair</p>
        <p>
          © {new Date().getFullYear()} {site.name} & Accessories
        </p>
      </div>
    </footer>
  );
}
