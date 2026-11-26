const API_ENDPOINT = "";
// Set API_ENDPOINT to a service URL (for example "/api/inquiries" or a
// form-spam / email service endpoint) to send enquiries to A1 Royal Exim.
// While it is empty, the form will not claim the enquiry was delivered and
// will offer direct WhatsApp / email handoff instead.

export async function submitInquiry(payload) {
  if (!API_ENDPOINT) {
    return { status: "offline" };
  }

  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Enquiry could not be sent.");
  }

  return { status: "sent" };
}