import Link from "next/link";
import { services } from "../../data/services";
import SectionTitle from "../../components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";

const serviceImages: Record<string, string> = {
  carpentry: "/images/carpentry.jpg",
  painting: "/images/painting.jpg",
  tiling: "/images/tiling.jpg",
  "glass-glazing": "/images/glass.jpg",
};

export default function ServicesPreview() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionTitle
          eyebrow="What We Do"
          title="Premium Renovation Services"
          description="We specialize in delivering high-quality finishes and durable solutions for your home's most essential surfaces."
        />

        <div className="service-preview-list">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`service-preview-card ${
                index % 2 === 1 ? "reverse" : ""
              }`}
            >
              <div
                className="service-preview-image"
                style={{
                  backgroundImage: `url(${serviceImages[service.slug]})`,
                }}
              />

              <div className="service-preview-content">
                <h3>{service.name}</h3>
                <p>{service.shortDescription}</p>
                <Link href={`/${service.slug}`} className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
                  Explore Details <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
