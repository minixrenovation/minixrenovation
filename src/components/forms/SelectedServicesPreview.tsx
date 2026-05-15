type SelectedServicesPreviewProps = {
  selectedServices: string[];
};

export default function SelectedServicesPreview({
  selectedServices,
}: SelectedServicesPreviewProps) {
  if (selectedServices.length === 0) {
    return null;
  }

  return (
    <div className="selected-services-box">
      <h4>Selected Services</h4>
      <ul>
        {selectedServices.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
