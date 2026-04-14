import { Download, CheckCircle, ArrowRight, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Workbook Is Ready | You Are the Goal",
  robots: { index: false },
};

export default function WorkbookDownload() {
  return (
    <main style={{ fontFamily: "'Georgia', serif" }}>
      <div style={{ backgroundColor: "var(--navy)", borderBottom: "4px solid var(--gold-light)" }} className="px-6 py-4 text-center">
        <p style={{ color: "var(--gold-light)" }} className="text-sm font-bold tracking-widest uppercase">
          You Are the Goal
        </p>
      </div>

      {/* CONFIRMATION HERO */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 pt-16 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "2px solid var(--gold-light)" }} className="w-20 h-20 rounded-full flex items-center justify-center">
              <CheckCircle size={40} style={{ color: "var(--gold-light)" }} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            You're In. Your Workbook Is Ready.
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Thank you for investing in yourself. Click below to download your 38-page workbook — then check your email for a copy as well.
          </p>

          <a
            href="/you-are-the-goal-workbook.pdf"
            download="You-Are-the-Goal-Workbook.pdf"
            className="btn-gold inline-flex items-center gap-3 text-lg py-4 px-10 mb-6"
          >
            <Download size={22} />
            Download Your Workbook Now
          </a>

          <p className="text-gray-500 text-sm">38-page PDF · Opens immediately · Save to your device</p>
        </div>
      </section>

      {/* WHAT TO DO NEXT */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--navy)" }}>
            How to Get the Most from Your Workbook
          </h2>
          <div className="space-y-5">
            {[
              { step: "1", title: "Start with Section 1 today", desc: "\"Where Have You Been\" takes 20-30 minutes and sets the foundation for everything else. Don't skip it — even if it feels like looking backward." },
              { step: "2", title: "Don't rush Section 3", desc: "The 10-Year Vision exercise is where most people either soar or get stuck. Give yourself uninterrupted time. The instructions will tell you when to slow down." },
              { step: "3", title: "Section 5 is the most important", desc: "\"Becoming the Person\" is where goals become identity. This is what makes everything else stick. Do the writing. Don't just read it." },
              { step: "4", title: "Come back to it", desc: "This isn't a one-and-done document. Your answers will evolve. Many people return to it quarterly." },
            ].map((s, i) => (
              <div key={i} style={{ borderLeft: "4px solid var(--gold-light)", backgroundColor: "white" }} className="p-5 rounded-r-xl flex gap-4">
                <div style={{ backgroundColor: "var(--navy)", color: "var(--gold-light)", flexShrink: 0 }} className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <p style={{ color: "var(--navy)" }} className="font-bold mb-1">{s.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPSELL — WORKSHOP */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-tag mb-3">Ready to Go Deeper?</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Do This Work Live — With Jason Beside You
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            The <strong style={{ color: "var(--gold-light)" }}>You Are the Goal Workshop</strong> is the live, facilitated version of exactly what you're holding. Five sessions. Small group. Real feedback. Real momentum.
          </p>
          <div style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.3)" }} className="rounded-xl p-6 mb-8">
            <div className="flex justify-center items-baseline gap-3 mb-2">
              <span className="strike text-xl text-gray-400">$497</span>
              <span style={{ color: "var(--gold-light)" }} className="text-4xl font-bold">$97</span>
            </div>
            <p style={{ color: "var(--gold)" }} className="text-sm font-bold mb-4 uppercase tracking-wider">Founding Digital Cohort · 80% Off</p>
            <p className="text-gray-300 text-sm mb-6">Since you already have the workbook, you're further ahead than most people who join. You'll move faster and get more out of every session.</p>
            <a href="https://buy.stripe.com/fZucMX8aF8HB6GL40l4gg01" className="btn-gold block text-center py-3 text-base">
              Add the Live Workshop for $97 →
            </a>
          </div>
          <a href="/workshop" className="flex items-center justify-center gap-2 text-sm" style={{ color: "var(--gold-light)" }}>
            Learn more about the workshop first <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* EMAIL REMINDER */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-10">
        <div className="max-w-xl mx-auto text-center">
          <Mail size={28} style={{ color: "var(--gold)" }} className="mx-auto mb-3" />
          <p style={{ color: "var(--navy)" }} className="font-bold mb-2">Check your email</p>
          <p className="text-gray-600 text-sm">A copy of the workbook download link has been sent to your inbox. Check your Promotions folder if you don't see it within a few minutes.</p>
          <p className="text-gray-500 text-sm mt-4">
            Questions? Email <a href="mailto:jason@youarethegoal.com" style={{ color: "var(--gold)" }}>jason@youarethegoal.com</a>
          </p>
        </div>
      </section>

      <footer style={{ backgroundColor: "var(--navy)", borderTop: "3px solid var(--gold-light)" }} className="px-6 py-8 text-center text-gray-500 text-sm">
        <p className="text-gray-400">© 2026 Jason St. Gelais · <a href="https://stgelaisleadership.com" style={{ color: "var(--gold-light)" }}>stgelaisleadership.com</a></p>
      </footer>
    </main>
  );
}
