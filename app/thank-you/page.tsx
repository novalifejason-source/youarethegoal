import { CheckCircle, Mail, Download, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Life Audit Is On Its Way! | You Are the Goal",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <main style={{ fontFamily: "'Georgia', serif" }}>
      <div style={{ backgroundColor: "var(--navy)", borderBottom: "4px solid var(--gold-light)" }} className="px-6 py-4 text-center">
        <p style={{ color: "var(--gold-light)" }} className="text-sm font-bold tracking-widest uppercase">You Are the Goal</p>
      </div>

      {/* CONFIRMATION */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 pt-16 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "2px solid var(--gold-light)" }} className="w-20 h-20 rounded-full flex items-center justify-center">
              <CheckCircle size={40} style={{ color: "var(--gold-light)" }} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Your Free Life Audit Is On Its Way!</h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Check your email — including your <strong style={{ color: "var(--gold-light)" }}>Promotions or Spam folder</strong> — right now for your 2-page PDF + 12-minute video.
          </p>
          <div style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.3)" }} className="rounded-xl p-6 flex items-center gap-4 text-left mb-8">
            <Mail size={28} style={{ color: "var(--gold-light)", flexShrink: 0 }} />
            <div>
              <p className="text-white font-bold mb-1">Check your inbox now</p>
              <p className="text-gray-400 text-sm">Subject line: <em>"Your Free 15-Minute Life Audit — From Jason St. Gelais"</em></p>
            </div>
          </div>
          <a href="/life-audit-interactive" className="btn-navy inline-flex items-center gap-2 mb-4">
            <Download size={18} /> Access the Interactive Version Now
          </a>
        </div>
      </section>

      {/* UPSELL — WORKBOOK */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-tag mb-3" style={{ color: "var(--gold)" }}>While You Wait for Your Email</div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--navy)" }}>
            Most People Who Complete the Audit Also Grab the Full Workbook
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            The 38-page <em>You Are the Goal</em> self-paced workbook takes everything you'll discover in the audit and builds it into a complete, committed plan for the next decade of your life. Today's founding client price won't last.
          </p>

          <div style={{ border: "2px solid var(--gold-light)", backgroundColor: "white" }} className="rounded-xl p-8 mb-8">
            <div className="flex justify-center items-baseline gap-4 mb-4">
              <span className="strike text-2xl text-gray-400">$97</span>
              <span className="text-5xl font-bold" style={{ color: "var(--navy)" }}>$37</span>
            </div>
            <p style={{ color: "var(--gold)" }} className="font-bold text-sm mb-6 uppercase tracking-wider">62% Launch Discount — Founding Client Price</p>

            <div className="space-y-3 text-left mb-8">
              {[
                "38 guided pages of exercises and frameworks",
                "5-section journey from past wins → 10-year vision → who you're becoming",
                "Complete goal-setting system aligned to your identity",
                "Instant PDF access after purchase",
                "14-day money-back guarantee",
                "Bonus: Life Audit PDF + 12-min video included",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle size={18} style={{ color: "var(--gold-light)", flexShrink: 0 }} className="mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <a href="/workbook" className="btn-gold block w-full text-center py-4 text-lg">
              Yes — Give Me Instant Access for Only $37 →
            </a>
            <p className="text-gray-400 text-xs mt-3">Secure one-time payment · Instant access · 14-day guarantee</p>
          </div>

          <a href="/workbook" className="flex items-center justify-center gap-2 text-sm font-bold" style={{ color: "var(--navy)" }}>
            View Full Workbook Details <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <footer style={{ backgroundColor: "var(--navy)", borderTop: "3px solid var(--gold-light)" }} className="px-6 py-8 text-center text-gray-500 text-sm">
        <p className="text-gray-400">© 2026 Jason St. Gelais · <a href="https://stgelaisleadership.com" style={{ color: "var(--gold-light)" }}>stgelaisleadership.com</a></p>
      </footer>
    </main>
  );
}

