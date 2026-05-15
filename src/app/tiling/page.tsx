import ServiceHero from "../../components/services/ServiceHero";
import ServiceDescription from "../../components/services/ServiceDescription";
import ServiceGallery from "../../components/services/ServiceGallery";
import RelatedServices from "../../components/services/RelatedServices";
import EnquiryForm from "../../components/forms/EnquiryForm";

export default function TilingPage() {
  return (
    <main>
      <ServiceHero
        title="Wall & Tiling Services"
        subtitle="Wall painting, textures, tiling installation, repairs, and complete finishing solutions."
      />

      <ServiceDescription
        heading="Complete Wall & Tiling Solutions"
        paragraphs={[
          "We provide high-quality wall and tiling services designed to enhance the look, durability, and value of your space.",
          "From decorative wall finishes to precise tile installations, our work focuses on clean execution, modern design, and long-lasting results.",
        ]}
      />

      <ServiceGallery
        title="Featured Work"
        items={[
          {
            title: "Wall Painting & Finishing",
            images: [
              "/images/tiling/wall-painting-1.jpg",
              "/images/tiling/wall-painting-2.jpg",
            ],
            description:
              "High-quality wall painting services with smooth finishes and long-lasting colors. We offer modern color combinations and premium coatings for both interior and exterior walls.",
          },
          {
            title: "Decorative Wall Textures",
            images: [
              "/images/tiling/wall-texture-1.jpg",
              "/images/tiling/wall-texture-2.jpg",
            ],
            description:
              "Enhance your walls with stylish textures and feature designs. From modern patterns to luxury finishes, we create visually stunning interiors.",
          },
          {
            title: "Floor Tiling Installation",
            images: [
              "/images/tiling/floor-tiling-1.jpg",
              "/images/tiling/floor-tiling-2.jpg",
            ],
            description:
              "Professional tile installation for homes and offices. We ensure perfect alignment, durability, and a polished finish using high-quality tiles.",
          },
          {
            title: "Bathroom Tiling",
            images: [
              "/images/tiling/bathroom-tiling-1.jpg",
              "/images/tiling/bathroom-tiling-2.jpg",
            ],
            description:
              "Expert bathroom tiling with waterproof solutions and elegant designs. We create clean, safe, and stylish bathroom spaces.",
          },
          {
            title: "Kitchen Backsplash Tiling",
            images: [
              "/images/tiling/kitchen-backsplash-1.jpg",
              "/images/tiling/kitchen-backsplash-2.jpg",
            ],
            description:
              "Add beauty and protection to your kitchen walls with stylish backsplash tiles. Easy to clean and designed to match modern kitchens.",
          },
          {
            title: "Wall Tile Installation",
            images: [
              "/images/tiling/wall-tiles-1.jpg",
              "/images/tiling/wall-tiles-2.jpg",
            ],
            description:
              "Install durable and decorative wall tiles for living rooms, kitchens, and commercial spaces with precision and clean finishing.",
          },
          {
            title: "Tile Repair & Replacement",
            images: [
              "/images/tiling/tile-repair-1.jpg",
              "/images/tiling/tile-repair-2.jpg",
            ],
            description:
              "We repair damaged or cracked tiles and replace them seamlessly, restoring the original look and strength of your flooring or walls.",
          },
          {
            title: "Waterproofing & Grouting",
            images: [
              "/images/tiling/grouting-1.jpg",
              "/images/tiling/grouting-2.jpg",
            ],
            description:
              "Protect your tiles with proper waterproofing and clean grouting. Prevent leaks, mold, and damage while maintaining a neat finish.",
          },
          {
            title: "Outdoor & Exterior Tiling",
            images: [
              "/images/tiling/outdoor-tiling-1.jpg",
              "/images/tiling/outdoor-tiling-2.jpg",
            ],
            description:
              "Durable and weather-resistant tiling solutions for patios, balconies, and outdoor areas with strong grip and long-lasting materials.",
          },
        ]}
      />

      <RelatedServices currentService="tiling" />
      <EnquiryForm />
    </main>
  );
}
