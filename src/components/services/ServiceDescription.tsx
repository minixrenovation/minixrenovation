type ServiceDescriptionProps = {
  heading: string;
  paragraphs: string[];
};

export default function ServiceDescription({
  heading,
  paragraphs,
}: ServiceDescriptionProps) {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>{heading}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'center' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
