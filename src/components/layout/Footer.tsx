import Link from "next/link";
import { navLinks } from "../../data/navLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-brand">Minix Renovation</h3>
            <p className="footer-desc">
              Transforming houses into dream homes with premium craftsmanship and 
              unwavering commitment to quality.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-list">
              <li>
                <Link href="/carpentry">Carpentry Solutions</Link>
              </li>
              <li>
                <Link href="/painting">Professional Painting</Link>
              </li>
              <li>
                <Link href="/tiling">Wall & Floor Tiling</Link>
              </li>
              <li>
                <Link href="/glass-glazing">Glass Glazing</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2026 Minix Renovation</p>
        </div>
      </div>
    </footer>
  );
}
