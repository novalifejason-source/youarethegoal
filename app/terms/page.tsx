import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service | You Are the Goal" };
export default function Terms() {
  return (
    <main style={{ fontFamily: "'Georgia', serif", maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ color: "var(--navy)", marginBottom: "24px" }}>Terms of Service</h1>
      <p style={{ color: "#666", marginBottom: "32px" }}>Last updated: April 2026</p>
      {[
        { h: "Products & Services", p: "You Are the Goal offers digital products (workbooks, PDFs) and live services (workshops, coaching) provided by Jason St. Gelais. By purchasing, you agree to these terms." },
        { h: "Digital Products — No Refund After Access", p: "Due to the immediate digital nature of our downloadable products, all sales are final once the file has been accessed or downloaded, except where our specific guarantee applies." },
        { h: "14-Day Workbook Guarantee", p: "If you purchase the 38-page self-paced workbook and complete the exercises within 14 days without gaining meaningful clarity, contact us at jason@stgelaisleadership.com for a full refund. Access will be revoked upon refund." },
        { h: "Workshop & Coaching Cancellations", p: "Workshop seats are non-refundable within 48 hours of the first session. Coaching agreements are governed by the individual coaching contract signed at the time of enrollment." },
        { h: "Intellectual Property", p: "All content — including workbooks, PDFs, videos, frameworks, and website copy — is the intellectual property of Jason St. Gelais. Personal use only. No resale, redistribution, or reproduction without written permission." },
        { h: "Results Disclaimer", p: "Results from coaching, workshops, or workbooks vary by individual. We do not guarantee specific outcomes. Your results depend on your effort, commitment, and individual circumstances." },
        { h: "Contact", p: "Questions? Email jason@stgelaisleadership.com." },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: "28px" }}>
          <h2 style={{ color: "var(--navy)", fontSize: "1.2rem", marginBottom: "8px" }}>{s.h}</h2>
          <p style={{ color: "#444", lineHeight: "1.7" }}>{s.p}</p>
        </div>
      ))}
    </main>
  );
}
