import ServiceHero from "../../components/services/ServiceHero";
import ServiceDescription from "../../components/services/ServiceDescription";
import ServiceGallery from "../../components/services/ServiceGallery";
import RelatedServices from "../../components/services/RelatedServices";
import EnquiryForm from "../../components/forms/EnquiryForm";

export default function CarpentryPage() {
  return (
    <main>
      <ServiceHero
        title="Carpentry Services"
        subtitle="Custom woodwork, cabinetry, shelving, doors, wardrobes, and more."
      />

      <ServiceDescription
        heading="Professional Carpentry for Beautiful Spaces"
        paragraphs={[
          "Our carpentry services are designed to improve both the function and style of your home. We focus on neat finishes, strong materials, and practical design.",
          "Whether you need built-in storage, feature timber work, doors, or custom cabinetry, Minix Renovation delivers tailored carpentry solutions that fit your space and lifestyle.",
        ]}
      />

      <ServiceGallery
        title="Featured Carpentry Work"
        items={[
          {
            title: "Custom Cabinetry",
            images: [
              "/images/carpentry/custom-cabinetry-1.jpg",
              "/images/carpentry/custom-cabinetry-2.jpg",
            ],
            description:
              "Tailor-made cabinetry designed to maximise storage while matching your home’s style and layout.",
          },
          {
            title: "Built-In Wardrobes",
            images: [
              "/images/carpentry/built-in-wardrobes-1.jpg",
              "/images/carpentry/built-in-wardrobes-2.jpg",
            ],
            description:
              "Smart and stylish wardrobes that improve organisation and make better use of your bedroom space.",
          },
          {
            title: "Shelving and Joinery",
            images: [
              "/images/carpentry/shelving-joinery-1.jpg",
              "/images/carpentry/shelving-joinery-2.jpg",
            ],
            description:
              "Clean and modern shelving solutions that combine storage with a refined interior finish.",
          },
          {
            title: "Timber Doors",
            images: [
              "/images/carpentry/timber-doors-1.jpg",
              "/images/carpentry/timber-doors-2.jpg",
            ],
            description:
              "Durable and elegant timber doors that enhance both the appearance and strength of your interiors.",
          },
          {
            title: "Wall Panels",
            images: [
              "/images/carpentry/wall-panels-1.jpg",
              "/images/carpentry/wall-panels-2.jpg",
            ],
            description:
              "Feature wall panels that add warmth, texture, and a premium finish to your living spaces.",
          },
          {
            title: "Kitchen Woodwork",
            images: [
              "/images/carpentry/kitchen-woodwork-1.jpg",
              "/images/carpentry/kitchen-woodwork-2.jpg",
            ],
            description:
              "Custom kitchen woodwork built for everyday functionality with a clean and modern finish.",
          },
          {
            title: "TV Units & Entertainment Cabinets",
            images: [
              "/images/carpentry/tv-units-1.jpg",
              "/images/carpentry/tv-units-2.jpg",
            ],
            description:
              "Custom TV units designed to keep your living space organised and visually appealing.",
          },
          {
            title: "Study Nooks & Workstations",
            images: [
              "/images/carpentry/study-nook-1.jpg",
              "/images/carpentry/study-nook-2.jpg",
            ],
            description:
              "Compact and functional study spaces designed for productivity with custom desks and storage.",
          },
          {
            title: "Doors, Frames & Architraves",
            images: [
              "/images/carpentry/doors-frames-1.jpg",
              "/images/carpentry/doors-frames-2.jpg",
            ],
            description:
              "Precision installation of doors, frames, and trims for a clean and professional finish.",
          },
        ]}
      />

      <RelatedServices currentService="carpentry" />
      <EnquiryForm />
    </main>
  );
}
