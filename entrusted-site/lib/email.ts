import { Resend } from "resend";

export type ContactPayload = {
  name: string;
  role?: string;
  organization?: string;
  email: string;
  phone?: string;
  serviceNeed: string;
  message: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactNotification(
  data: ContactPayload,
): Promise<{ id?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  /** When true, skips Resend (local QA only). Not for production. */
  const dryRun = process.env.CONTACT_FORM_DRY_RUN === "true";

  if (dryRun) {
    console.warn(
      "[contact] CONTACT_FORM_DRY_RUN=true — email not sent (mock). Payload:",
      JSON.stringify(data),
    );
    return { id: "dry-run" };
  }

  if (!apiKey || !to || !from) {
    throw new Error("Email is not configured (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).");
  }

  const resend = new Resend(apiKey);
  const lines = [
    `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>`,
    data.role ? `<p><strong>Title / Role:</strong> ${escapeHtml(data.role)}</p>` : "",
    data.organization
      ? `<p><strong>District / Organization:</strong> ${escapeHtml(data.organization)}</p>`
      : "",
    `<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>`,
    data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : "",
    `<p><strong>Service need:</strong> ${escapeHtml(data.serviceNeed)}</p>`,
    `<p><strong>Message:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>`,
  ]
    .filter(Boolean)
    .join("");

  const { data: sent, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `Entrusted inquiry — ${data.name} (${data.serviceNeed})`,
    html: `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;line-height:1.5">${lines}</body></html>`,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { id: sent?.id };
}
