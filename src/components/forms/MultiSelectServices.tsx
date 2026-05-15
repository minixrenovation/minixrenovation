import { services } from "../..//data/services";

type MultiSelectServicesProps = {
  selectedServices: string[];
  onChange: (services: string[]) => void;
};

export default function MultiSelectServices({
  selectedServices,
  onChange,
}: MultiSelectServicesProps) {
  function toggleService(serviceName: string) {
    if (selectedServices.includes(serviceName)) {
      onChange(selectedServices.filter((item) => item !== serviceName));
      return;
    }

    onChange([...selectedServices, serviceName]);
  }

  return (
    <div className="form-field">
      <label className="form-label">Enquiry Related To</label>
      <div className="checkbox-grid">
        {services.map((service) => (
          <label key={service.slug} className="checkbox-item">
            <input
              type="checkbox"
              checked={selectedServices.includes(service.name)}
              onChange={() => toggleService(service.name)}
            />
            <span>{service.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
