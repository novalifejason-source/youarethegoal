import { CheckCircle, Shield, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You Are the Goal — 38-Page Workbook | Jason St. Gelais",
  description: "Stop feeling stuck mid-career. The complete 38-page self-paced workbook that builds crystal-clear goals aligned with your identity and life vision. Founding client price: $37.",
};

export default function Workbook() {
  return (
    <main style={{ fontFamily: "'Georgia', serif" }}>
      <div style={{ backgroundColor: "var(--navy)", borderBottom: "4px solid var(--gold-light)" }} className="px-6 py-4 text-center">
        <p style={{ color: "var(--gold-light)" }} className="text-sm font-bold tracking-widest uppercase">
          Special Launch Price — Founding Clients Only
        </p>
      </div>

      {/* HERO */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 pt-14 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-4">38-Page Self-Paced Workbook</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Stop Feeling Stuck Mid-Career —<br className="hidden md:block" />
            <span style={{ color: "var(--gold-light)" }}>Finally Get Crystal-Clear Goals<br className="hidden md:block" />
            That Actually Bring Fulfillment</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed">
            The complete self-paced workbook with full step-by-step descriptions you can complete on your own — now at a special launch price for founding clients.
          </p>

          {/* PRICE */}
          <div style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.3)" }} className="rounded-xl p-8 max-w-sm mx-auto mt-10">
            <p className="text-gray-400 text-sm mb-2">Regular Value</p>
            <p className="strike text-3xl text-gray-400 mb-1">$97</p>
            <p className="text-white text-sm font-bold mb-1 uppercase tracking-widest">Founding Client Launch Price</p>
            <p style={{ color: "var(--gold-light)" }} className="text-6xl font-bold mb-2">$37</p>
            <p style={{ color: "var(--gold)" }} className="text-sm font-bold mb-6">You save 62% today</p>
            <a
              href="https://buy.stripe.com/PLACEHOLDER_WORKBOOK"
              className="btn-gold block w-full text-center py-4 text-lg"
            >
              Get Instant Access — $37 →
            </a>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Shield size={14} className="text-gray-400" />
              <p className="text-gray-400 text-xs">Secure payment · Instant access · 14-day guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="section-tag text-center mb-3" style={{ color: "var(--gold)" }}>What's Inside</div>
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "var(--navy)" }}>
            5 Sections. One Complete Transformation.
          </h2>

          <div className="space-y-6 mb-12">
            {[
              { num: "01", title: "Where Have You Been", desc: "Begin with your proven success. List your top 5 accomplishments, feel the victory, uncover the patterns, and build your gratitude anchor. Reclaim the proof that you're more capable than you know." },
              { num: "02", title: "The Wheel of Life", desc: "Assess your life's balance across 8 areas. Define your ideal vision for each, rate your current reality honestly, and identify exactly where small changes create the biggest ripple effects." },
              { num: "03", title: "Your 10-Year Vision", desc: "Unleash your deepest desires without limits. This section is where you stop filtering yourself and start writing the life you actually want — on every level, in every area." },
              { num: "04", title: "How You View the Future", desc: "Prioritize your vision. Assign time horizons, identify your natural patterns, and turn your desires into an intentional, organized roadmap you can actually follow." },
              { num: "05", title: "Becoming the Person", desc: "The most important section. Shift from 'what I want' to 'who I must become.' Select your top priorities, envision your future self, and write your identity vision — the foundation that makes goals stick." },
            ].map((s, i) => (
              <div key={i} style={{ borderLeft: "4px solid var(--gold-light)", backgroundColor: "white" }} className="p-6 rounded-r-xl">
                <div style={{ color: "var(--gold)" }} className="text-xs font-bold tracking-widest uppercase mb-2">Section {s.num}</div>
                <h3 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {[
              "38 detailed pages of guided exercises and frameworks",
              "Proven tools to uncover what truly drives your fulfillment",
              "Goal-setting process aligned with your career, identity, and life vision",
              "Clarity on why you feel dissatisfied — and exactly what to do about it",
              "Actionable worksheets you can revisit anytime",
              "Instant PDF download — start today",
              "BONUS: Life Audit PDF + 12-min walkthrough video included",
              "BONUS: Goal-tracking template",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle size={18} style={{ color: "var(--gold-light)", flexShrink: 0 }} className="mt-0.5" />
                <p style={{ color: "#444" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div style={{ backgroundColor: "var(--warm-tan)", border: "2px solid var(--gold-light)" }} className="rounded-xl p-8">
            <Shield size={36} style={{ color: "var(--gold)" }} className="mx-auto mb-4" />
            <h3 style={{ color: "var(--navy)" }} className="text-2xl font-bold mb-3">14-Day Money-Back Guarantee</h3>
            <p className="text-gray-700 leading-relaxed">
              Go through the workbook and apply the exercises. If you don't gain meaningful clarity within 14 days, contact us for a full refund. No questions asked. Access will be revoked upon refund to protect the digital content.
            </p>
          </div>
        </div>
      </section>

      {/* FROM JASON */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">A Note from Jason</h3>
          <p className="text-gray-300 text-lg leading-relaxed italic mb-6">
            "I'm not handing you a motivational poster. I'm handing you the framework I wish someone had put in front of me twenty years ago. Take your time with it. Be more honest than feels comfortable. And know this — the fact that you're here, doing this work, already puts you ahead of where I was for a long time."
          </p>
          <p style={{ color: "var(--gold-light)" }} className="font-bold">— Jason St. Gelais</p>
          <p className="text-gray-500 text-sm mt-1">BS IT · MBA · MS Leadership · McKinsey · Maxwell Certified</p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--navy)" }}>
            Ready to Get Clear?
          </h2>
          <p className="text-gray-600 mb-8">This is the work that changes your decade, not just your week.</p>
          <div style={{ border: "2px solid var(--gold-light)" }} className="rounded-xl p-8 bg-white">
            <div className="flex justify-center items-baseline gap-4 mb-2">
              <span className="strike text-xl text-gray-400">$97</span>
              <span className="text-5xl font-bold" style={{ color: "var(--navy)" }}>$37</span>
            </div>
            <p style={{ color: "var(--gold)" }} className="text-sm font-bold mb-6 uppercase tracking-wider">Founding Client Launch Price</p>
            <a href="https://buy.stripe.com/PLACEHOLDER_WORKBOOK" className="btn-gold block w-full text-center py-4 text-lg mb-3">
              Yes — Give Me Instant Access for $37 →
            </a>
            <p className="text-gray-400 text-xs">Secure one-time payment · Instant PDF download · 14-day guarantee</p>
          </div>
          <div className="mt-8">
            <p className="text-gray-500 mb-3">Ready to go deeper with live support?</p>
            <a href="/workshop" className="flex items-center justify-center gap-2 font-bold" style={{ color: "var(--navy)" }}>
              Learn about the live Goal-Setting Workshop <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: "var(--navy)", borderTop: "3px solid var(--gold-light)" }} className="px-6 py-8 text-center text-gray-500 text-sm">
        <p className="text-gray-400">© 2026 Jason St. Gelais · <a href="https://stgelaisleadership.com" style={{ color: "var(--gold-light)" }}>stgelaisleadership.com</a></p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="/privacy" className="text-gray-500 hover:text-gray-300 text-xs">Privacy Policy</a>
          <a href="/terms" className="text-gray-500 hover:text-gray-300 text-xs">Terms</a>
        </div>
      </footer>
    </main>
  );
}
