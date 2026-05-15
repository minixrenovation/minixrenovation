import SectionTitle from "../../components/ui/SectionTitle";
import { Award, ShieldCheck, Zap } from "lucide-react";

const points = [
  {
    title: "Expert Craftsmanship",
    description:
      "Our team of skilled professionals delivers precision and care in every single project we undertake.",
    icon: <Award size={32} />,
  },
  {
    title: "Quality Guaranteed",
    description:
      "We use premium materials and proven techniques to ensure your renovation stands the test of time.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "Efficient Process",
    description:
      "We value your time. Our streamlined workflow ensures projects are completed on schedule without compromising quality.",
    icon: <Zap size={32} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionTitle
          eyebrow="The Minix Advantage"
          title="Why Homeowners Trust Us"
          description="We combine traditional craftsmanship with modern project management for a stress-free renovation experience."
        />

        <div className="why-grid">
          {points.map((point) => (
            <div key={point.title} className="feature-card">
              <div className="feature-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
