import ServiceHero from "../../components/services/ServiceHero";
import ServiceDescription from "../../components/services/ServiceDescription";
import ServiceGallery from "../../components/services/ServiceGallery";
import RelatedServices from "../../components/services/RelatedServices";
import EnquiryForm from "../../components/forms/EnquiryForm";

export default function GlassGlazingPage() {
  return (
    <main>
      <ServiceHero
        title="Glass & Glazing Services"
        subtitle="Window glass, shower screens, glass doors, mirrors, partitions, repairs, and more."
      />

      <ServiceDescription
        heading="Professional Glass & Glazing for Modern Spaces"
        paragraphs={[
          "Our glass and glazing services are designed to improve natural light, functionality, and the overall appearance of your property. We focus on strong materials, safe installation, and clean finishes.",
          "Whether you need custom glass partitions, shower screens, mirror installation, or glass repair and replacement, Minix Renovation delivers reliable glazing solutions tailored to your space.",
        ]}
      />

      <ServiceGallery
        title="Featured Glass & Glazing Work"
        items={[
          {
            title: "Window Glass Installation",
            images: [
              "/images/glass/window-glass-1.jpg",
              "/images/glass/window-glass-2.jpg",
            ],
            description:
              "Professional installation of high-quality window glass for homes and offices with durability, proper sealing, and a modern finish.",
          },
          {
            title: "Glass Door Installation",
            images: [
              "/images/glass/glass-door-1.jpg",
              "/images/glass/glass-door-2.jpg",
            ],
            description:
              "Stylish and secure glass doors including sliding, hinged, and frameless options for modern interiors and commercial spaces.",
          },
          {
            title: "Shower Glass & Enclosures",
            images: [
              "/images/glass/shower-glass-1.jpg",
              "/images/glass/shower-glass-2.jpg",
            ],
            description:
              "Custom shower glass solutions that are waterproof, easy to maintain, and designed to enhance bathroom style and functionality.",
          },
          {
            title: "Glass Partition Walls",
            images: [
              "/images/glass/glass-partition-1.jpg",
              "/images/glass/glass-partition-2.jpg",
            ],
            description:
              "Modern glass partitions that help create open, bright, and flexible spaces in offices and homes.",
          },
          {
            title: "Mirror Installation",
            images: [
              "/images/glass/mirror-installation-1.jpg",
              "/images/glass/mirror-installation-2.jpg",
            ],
            description:
              "Decorative and practical mirror installations for bathrooms, bedrooms, living spaces, and commercial interiors.",
          },
          {
            title: "Shopfront & Commercial Glass",
            images: [
              "/images/glass/shopfront-glass-1.jpg",
              "/images/glass/shopfront-glass-2.jpg",
            ],
            description:
              "Attractive and durable commercial glass solutions for retail shops and business spaces that improve visibility and presentation.",
          },
          {
            title: "Glass Repair & Replacement",
            images: [
              "/images/glass/glass-repair-1.jpg",
              "/images/glass/glass-repair-2.jpg",
            ],
            description:
              "Fast and reliable repair or replacement of cracked, broken, or damaged glass to restore safety and appearance.",
          },
          {
            title: "Safety & Toughened Glass",
            images: [
              "/images/glass/toughened-glass-1.jpg",
              "/images/glass/toughened-glass-2.jpg",
            ],
            description:
              "Installation of strong, impact-resistant safety glass for homes and commercial properties where extra durability is needed.",
          },
          {
            title: "Balcony & Railing Glass",
            images: [
              "/images/glass/balcony-glass-1.jpg",
              "/images/glass/balcony-glass-2.jpg",
            ],
            description:
              "Modern glass railings for balconies and staircases that provide safety while keeping spaces open and visually clean.",
          },
        ]}
      />

      <RelatedServices currentService="glass-glazing" />
      <EnquiryForm />
    </main>
  );
}
