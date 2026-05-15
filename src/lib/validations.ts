import { z } from "zod";

export const enquirySchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  phone: z.string().min(1, "Phone number is required."),
  email: z.string().email("Valid email is required."),
  description: z.string().min(1, "Description is required."),
  services: z.array(z.string()).min(1, "Select at least one service."),
});
