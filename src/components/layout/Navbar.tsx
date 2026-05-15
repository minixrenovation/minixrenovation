"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <header className={`navbar ${isScrolled || isMenuOpen ? "scrolled" : ""} ${!isHomePage ? "navbar-light" : ""}`}>
      <div className="container navbar-inner">
        {/* LOGO */}
        <Link href="/" className="brand">
          <div className="brand-mark">M</div>
          <div className="brand-info">
            <span className="brand-title">MINIX</span>
            <span className="brand-subtitle">Renovation</span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="nav-links">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-primary nav-cta-desktop">
            Let&apos;s Talk
          </Link>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={32} />
        </button>

        {/* FULL SCREEN MOBILE MENU OVERLAY */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <button 
            className="close-btn" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="mobile-nav-link" 
              style={{ color: 'var(--primary)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>

          <div className="mobile-menu-footer">
            <p>Melbourne, Australia</p>
            <p>info@minixhomes.com.au</p>
          </div>
        </div>
      </div>
    </header>
  );
}
