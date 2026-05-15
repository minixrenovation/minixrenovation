"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Immersive Background */}
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Architecture" 
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="scroll-reveal">
            Crafting <br /> Extraordinary Spaces
          </h1>
          <p className="scroll-reveal" style={{ animationDelay: '0.2s' }}>
            Minix Renovation delivers high-end craftsmanship for those who 
            value detail, durability, and timeless design.
          </p>
          
          <div className="hero-actions scroll-reveal" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact" className="btn btn-primary">
              Book a Consultation <ArrowRight size={18} />
            </Link>
            <Link href="/#services" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              View Our Work
            </Link>
          </div>

          <div className="hero-stats scroll-reveal" style={{ animationDelay: '0.6s' }}>
            <div className="stat-item">
              <h4>15+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h4>500+</h4>
              <p>Projects Done</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
