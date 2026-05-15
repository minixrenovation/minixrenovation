import { Resend } from "resend";
import type { Enquiry } from "../types/enquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEnquiryEmail(data: Enquiry) {
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!ownerEmail) {
    throw new Error("OWNER_EMAIL is missing");
  }

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is missing");
  }

  await resend.emails.send({
    from: "Minix Renovation <onboarding@resend.dev>",
    to: ownerEmail,
    subject: "New Enquiry - Minix Renovation",
    html: `
      <h2>New Enquiry Received</h2>
      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
        <tr>
          <td><strong>Name</strong></td>
          <td>${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <td><strong>Phone</strong></td>
          <td>${data.phone}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>${data.email}</td>
        </tr>
        <tr>
          <td><strong>Services</strong></td>
          <td>${data.services.join(", ")}</td>
        </tr>
        <tr>
          <td><strong>Description</strong></td>
          <td>${data.description}</td>
        </tr>
      </table>
    `,
  });
}
