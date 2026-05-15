type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="section-title">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto 1.5rem', borderRadius: '2px' }} />
      {description ? <p>{description}</p> : null}
    </div>
  );
}
