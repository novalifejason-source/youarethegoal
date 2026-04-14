import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy | You Are the Goal" };
export default function Privacy() {
  return (
    <main style={{ fontFamily: "'Georgia', serif", maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ color: "var(--navy)", marginBottom: "24px" }}>Privacy Policy</h1>
      <p style={{ color: "#666", marginBottom: "32px" }}>Last updated: April 2026</p>
      {[
        { h: "Information We Collect", p: "We collect your name (optional) and email address when you opt in to receive our free Life Audit or purchase our products. We may also collect standard usage data (pages visited, time on site) via analytics tools." },
        { h: "How We Use Your Information", p: "Your email is used to deliver the free resources you requested and to send follow-up emails about related products and services from Jason St. Gelais. You can unsubscribe at any time using the link in any email." },
        { h: "Email Marketing", p: "We use MailerLite to manage our email list. Your information is stored securely on their platform. You can unsubscribe from any email at any time. We do not sell or share your email address with third parties." },
        { h: "Payments", p: "All payments are processed securely through Stripe. We do not store your credit card information. Stripe's privacy policy applies to payment processing." },
        { h: "Cookies", p: "We may use cookies and similar technologies to improve your experience and analyze site traffic. You can disable cookies in your browser settings." },
        { h: "Your Rights", p: "You can request deletion of your personal data at any time by emailing jason@stgelaisleadership.com. We will respond within 30 days." },
        { h: "Contact", p: "Questions about this policy? Email jason@stgelaisleadership.com." },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: "28px" }}>
          <h2 style={{ color: "var(--navy)", fontSize: "1.2rem", marginBottom: "8px" }}>{s.h}</h2>
          <p style={{ color: "#444", lineHeight: "1.7" }}>{s.p}</p>
        </div>
      ))}
    </main>
  );
}
