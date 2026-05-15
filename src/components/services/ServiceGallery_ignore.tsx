type ServiceGalleryProps = {
  title: string;
  items: string[];
};

export default function ServiceGallery({ title, items }: ServiceGalleryProps) {
  return (
    <section className="section section-muted">
      <div className="container">
        <h2 className="content-heading">{title}</h2>

        <div className="gallery-grid">
          {items.map((item) => (
            <div key={item} className="gallery-card">
              <div className="gallery-image-placeholder" />
              <h3>{item}</h3>
              <p>
                High-quality renovation work designed to match your home and
                project goals.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
