import { NextResponse } from "next/server";

const QUOTE_ACCEPT_RECIPIENTS = [
  "idorado@kathyclean.com",
  "info@kathyclean.com",
  // TODO(Houston team): expand this list once the operations recipients are confirmed.
];

type QuoteAcceptPayload = {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  service?: string;
  serviceLabel?: string;
  frequency?: string | null;
  frequencyLabel?: string | null;
  quotePrice?: number | null;
  sqft?: number | null;
  address?: string | null;
  email?: string | null;
  phone?: string | null;
  market?: string | null;
  quoteUrl?: string | null;
};

export async function POST(request: Request) {
  const webhookUrl = process.env.ZAPIER_QUOTE_ACCEPT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Missing ZAPIER_QUOTE_ACCEPT_WEBHOOK_URL");
    return NextResponse.json(
      { ok: false, error: "Webhook is not configured." },
      { status: 500 },
    );
  }

  let payload: QuoteAcceptPayload;

  try {
    payload = (await request.json()) as QuoteAcceptPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const fullName = payload.fullName?.trim() || "Unknown Lead";
  const serviceLabel = payload.serviceLabel?.trim() || "Unknown Service";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "quote_accepted",
        acceptedAt: new Date().toISOString(),
        recipients: QUOTE_ACCEPT_RECIPIENTS,
        firstName: payload.firstName?.trim() || null,
        lastName: payload.lastName?.trim() || null,
        fullName,
        service: payload.service ?? null,
        serviceLabel,
        frequency: payload.frequency ?? null,
        frequencyLabel: payload.frequencyLabel ?? null,
        quotePrice: payload.quotePrice ?? null,
        sqft: payload.sqft ?? null,
        address: payload.address?.trim() || null,
        email: payload.email?.trim() || null,
        phone: payload.phone?.trim() || null,
        market: payload.market?.trim() || null,
        quoteUrl: payload.quoteUrl?.trim() || null,
        subject: `${fullName} accepted the quote for ${serviceLabel}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Zapier quote accept webhook failed", response.status, errorText);
      return NextResponse.json(
        { ok: false, error: "Webhook request failed." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Zapier quote accept webhook error", error);
    return NextResponse.json(
      { ok: false, error: "Unexpected webhook error." },
      { status: 500 },
    );
  }
}
