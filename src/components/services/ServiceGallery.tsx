"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";

type GalleryItem = {
  title: string;
  images: string[];
  description: string;
};

type ServiceGalleryProps = {
  title: string;
  items: GalleryItem[];
};

function GalleryCard({ item }: { item: GalleryItem }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="gallery-card" style={{ 
        background: 'var(--white)', 
        borderRadius: 'var(--radius-lg)', 
        overflow: 'hidden', 
        border: '1px solid var(--border-light)',
        transition: 'all 0.3s ease'
      }}>
        {/* IMAGES */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', padding: '8px' }}>
          {item.images.slice(0, 2).map((img, index) => (
            <div
              key={index}
              style={{ 
                aspectRatio: '4/3', 
                overflow: 'hidden', 
                borderRadius: 'var(--radius)', 
                cursor: 'pointer' 
              }}
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>

        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--secondary-dark)' }}>{item.title}</h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.description}</p>
        </div>
      </div>

      {/* MODAL (BIG IMAGE) */}
      {selectedImage && (
        <div 
          style={{ 
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
            background: 'rgba(0,0,0,0.9)', zIndex: 2000, display: 'flex', 
            alignItems: 'center', justifyContent: 'center', cursor: 'pointer' 
          }} 
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }} 
          />
        </div>
      )}
    </>
  );
}

export default function ServiceGallery({ title, items }: ServiceGalleryProps) {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionTitle
          title={title}
          description="A selection of our recent projects showcasing our attention to detail and quality finishes."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {items.map((item, index) => (
            <GalleryCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
