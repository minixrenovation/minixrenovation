import EnquiryForm from "../../components/forms/EnquiryForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main style={{ background: "var(--background)", paddingTop: 'var(--header-height)' }}>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Get In Touch</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
              Let&apos;s Discuss Your Project
            </h1>
            <p>
              Whether you have a specific vision or need expert advice, our team 
              is ready to help bring your home renovation to life.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div className="feature-card" style={{ textAlign: 'left', padding: '3rem' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--secondary-dark)' }}>
                Contact Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div className="feature-icon" style={{ margin: 0, width: '48px', height: '48px' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>Phone</h4>
                    <p style={{ color: 'var(--text-muted)' }}>03 9059 4078</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div className="feature-icon" style={{ margin: 0, width: '48px', height: '48px' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-muted)' }}>info@minixhomes.com.au</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div className="feature-icon" style={{ margin: 0, width: '48px', height: '48px' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>Address</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Unit 1, 38 Palladium Cct, Clyde North VIC 3978</p>
                  </div>
                </div>
              </div>

              <div style={{ 
                marginTop: '3rem', 
                padding: '1.5rem', 
                background: 'var(--surface-muted)', 
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)' 
              }}>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  We handle professional enquiries for carpentry, painting, tiling, 
                  and premium renovation work across the region.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '-40px' }}> {/* Offset to match alignment if needed, or just let it flow */}
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
