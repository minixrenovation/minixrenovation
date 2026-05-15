import Link from "next/link";
import { services } from "../../data/services";
import SectionTitle from "../ui/SectionTitle";

type RelatedServicesProps = {
  currentService: string;
};

export default function RelatedServices({
  currentService,
}: RelatedServicesProps) {
  const related = services.filter((service) => service.slug !== currentService);

  return (
    <section className="section">
      <div className="container">
        <SectionTitle 
          title="Related Services" 
          description="Explore our other professional renovation solutions to complete your home transformation."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {related.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="card-hover"
              style={{ 
                display: 'block',
                background: 'var(--white)',
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary-dark)' }}>{service.name}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
