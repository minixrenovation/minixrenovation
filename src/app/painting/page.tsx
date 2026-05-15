import ServiceHero from "../../components/services/ServiceHero";
import ServiceDescription from "../../components/services/ServiceDescription";
import ServiceGallery from "../../components/services/ServiceGallery";
import RelatedServices from "../../components/services/RelatedServices";
import EnquiryForm from "../../components/forms/EnquiryForm";

export default function PaintingPage() {
  return (
    <main>
      <ServiceHero
        title="Painting Services"
        subtitle="Interior painting, exterior painting, feature walls, texture finishes, repairs, and more."
      />

      <ServiceDescription
        heading="Professional Painting for Beautiful and Lasting Finishes"
        paragraphs={[
          "Our painting services are designed to refresh, protect, and enhance your property with clean finishes and quality workmanship. We focus on proper preparation, smooth application, and colours that suit your space.",
          "Whether you need interior wall painting, exterior painting, decorative finishes, or surface repairs before painting, Minix Renovation delivers reliable painting solutions tailored to your home or commercial property.",
        ]}
      />

      <ServiceGallery
        title="Featured Painting Work"
        items={[
          {
            title: "Interior Wall Painting",
            images: [
              "/images/painting/interior-painting-1.jpg",
              "/images/painting/interior-painting-2.jpg",
            ],
            description:
              "High-quality interior painting that improves the look and feel of your home with smooth finishes and modern colour combinations.",
          },
          {
            title: "Exterior House Painting",
            images: [
              "/images/painting/exterior-painting-1.jpg",
              "/images/painting/exterior-painting-2.jpg",
            ],
            description:
              "Durable exterior painting solutions that protect your property from weather while giving it a fresh and attractive appearance.",
          },
          {
            title: "Feature Walls & Accent Painting",
            images: [
              "/images/painting/feature-wall-1.jpg",
              "/images/painting/feature-wall-2.jpg",
            ],
            description:
              "Create striking focal points with bold colours and stylish accent wall designs that elevate your interior spaces.",
          },
          {
            title: "Decorative & Texture Painting",
            images: [
              "/images/painting/texture-paint-1.jpg",
              "/images/painting/texture-paint-2.jpg",
            ],
            description:
              "Decorative and textured paint finishes that add depth, character, and a premium touch to your walls.",
          },
          {
            title: "Door & Window Painting",
            images: [
              "/images/painting/door-window-paint-1.jpg",
              "/images/painting/door-window-paint-2.jpg",
            ],
            description:
              "Precision painting for doors and window frames that improves durability and complements your overall home design.",
          },
          {
            title: "Surface Preparation & Priming",
            images: [
              "/images/painting/surface-prep-1.jpg",
              "/images/painting/surface-prep-2.jpg",
            ],
            description:
              "Careful wall preparation including sanding, filling, and priming to achieve a smooth, even, and long-lasting finish.",
          },
          {
            title: "Crack Filling & Wall Repairs",
            images: [
              "/images/painting/wall-repair-1.jpg",
              "/images/painting/wall-repair-2.jpg",
            ],
            description:
              "Repair cracks, holes, and damaged wall surfaces before painting to ensure a neat and professional final result.",
          },
          {
            title: "Waterproof & Protective Coatings",
            images: [
              "/images/painting/waterproof-paint-1.jpg",
              "/images/painting/waterproof-paint-2.jpg",
            ],
            description:
              "Protective coatings that help guard surfaces against moisture, stains, and wear while improving durability.",
          },
          {
            title: "Commercial Painting Services",
            images: [
              "/images/painting/commercial-paint-1.jpg",
              "/images/painting/commercial-paint-2.jpg",
            ],
            description:
              "Professional painting solutions for offices, shops, and commercial spaces with efficient delivery and quality finishes.",
          },
        ]}
      />

      <RelatedServices currentService="painting" />
      <EnquiryForm />
    </main>
  );
}
