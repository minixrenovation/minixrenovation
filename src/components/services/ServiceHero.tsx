type ServiceHeroProps = {
  title: string;
  subtitle: string;
};

export default function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Minix Renovation</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
