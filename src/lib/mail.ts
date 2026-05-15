export type EmailTemplateParams = {
  full_name: string;
  phone: string;
  email: string;
  services: string;
  message: string;
};

export function buildEnquiryTemplateParams(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  description: string;
  services: string[];
}): EmailTemplateParams {
  return {
    full_name: `${data.firstName} ${data.lastName}`,
    phone: data.phone,
    email: data.email,
    services: data.services.join(", "),
    message: data.description,
  };
}
