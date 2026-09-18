/**
 * Enquiry submission boundary.
 *
 * This site is currently a portfolio + enquiry experience with no backend
 * connected, so enquiries are only acknowledged in the UI. When a backend is
 * added later, replace the body of `submitEnquiry` with a server function call
 * (e.g. `createServerFn` writing to a database or sending an email) — nothing
 * else in the UI needs to change.
 */
export interface EnquiryPayload {
  type: "trip-enquiry" | "custom-trip" | "group-trip" | "contact";
  subject: string;
  fields: Record<string, string | string[]>;
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<{ ok: true }> {
  if (import.meta.env.DEV) {
    console.info("[TripRi8] enquiry captured (no backend connected yet)", payload);
  }
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true };
}
