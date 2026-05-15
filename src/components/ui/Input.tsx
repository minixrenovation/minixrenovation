type InputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
};

export default function Input({
  label,
  name,
  value,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <div className="form-field">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        className="form-input"
        onChange={(event) => onChange(event.target.value)}
        required
      />
    </div>
  );
}
