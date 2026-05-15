"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type EnquiryFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  description: string;
  services: string[];
};

const initialForm: EnquiryFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  description: "",
  services: [],
};

const servicesList = [
  "Carpentry",
  "Painting",
  "Wall & Tiling",
  "Glass Glazing",
];

export default function EnquiryForm() {
  const [formData, setFormData] = useState<EnquiryFormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((item) => item !== service)
          : [...prev.services, service],
      };
    });
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required.";
    if (!formData.lastName.trim()) return "Last name is required.";
    if (!formData.phone.trim()) return "Phone number is required.";
    if (!formData.email.trim()) return "Email address is required.";
    if (!formData.description.trim()) return "Project description is required.";
    if (formData.services.length === 0)
      return "Please select at least one service.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    try {
      setLoading(true);

      const templateParams = {
        full_name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        email: formData.email,
        services: formData.services.join(", "),
        message: formData.description,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      );

      setSuccessMessage("Your enquiry has been sent successfully. We'll be in touch soon!");
      setFormData(initialForm);
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      setErrorMessage("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="enquiry">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="feature-card" style={{ textAlign: 'left', padding: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--secondary-dark)' }}>
            Start Your Transformation
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Fill out the form below and we'll get back to you with a personalized consultation.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '1.5rem' 
            }}>
              <div>
                <label htmlFor="firstName" className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="form-input"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--surface-muted)' }}
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="form-input"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--surface-muted)' }}
                  placeholder="Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--surface-muted)' }}
                  placeholder="+61 000 000 000"
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--surface-muted)' }}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="description" className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                className="form-input"
                value={formData.description}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: 'var(--radius)', 
                  border: '1px solid var(--border)', 
                  background: 'var(--surface-muted)',
                  resize: 'vertical',
                  minHeight: '120px'
                }}
                placeholder="Tell us about your project..."
              />
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label className="form-label" style={{ display: 'block', marginBottom: '1rem', fontWeight: 600 }}>
                Services Needed
              </label>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                gap: '1rem' 
              }}>
                {servicesList.map((service) => {
                  const checked = formData.services.includes(service);

                  return (
                    <label
                      key={service}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "var(--radius)",
                        border: checked ? "2px solid var(--primary)" : "1px solid var(--border)",
                        background: checked ? "var(--primary-light)" : "var(--white)",
                        padding: "0.75rem 1rem",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: checked ? "var(--primary-dark)" : "var(--text-main)",
                        cursor: "pointer",
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleServiceChange(service)}
                        style={{ accentColor: "var(--primary-dark)" }}
                      />
                      <span>{service}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {errorMessage && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '1rem', 
                background: '#fef2f2', 
                color: '#b91c1c', 
                borderRadius: 'var(--radius)', 
                marginBottom: '1.5rem',
                fontSize: '0.9375rem'
              }}>
                <AlertCircle size={20} /> {errorMessage}
              </div>
            )}

            {successMessage && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '1rem', 
                background: '#f0fdf4', 
                color: '#15803d', 
                borderRadius: 'var(--radius)', 
                marginBottom: '1.5rem',
                fontSize: '0.9375rem'
              }}>
                <CheckCircle2 size={20} /> {successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ width: '100%', padding: '1.125rem' }}
            >
              {loading ? "Sending..." : <><Send size={18} /> Submit Enquiry</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
