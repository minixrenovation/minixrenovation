type TextareaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Textarea({
  label,
  name,
  value,
  onChange,
}: TextareaProps) {
  return (
    <div className="form-field">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        rows={5}
        className="form-textarea"
        onChange={(event) => onChange(event.target.value)}
        required
      />
    </div>
  );
}
