import { CheckCircle, Shield, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "90-Day Identity Transformation Coaching | You Are the Goal",
  description: "Personalized 1:1 or small group coaching with Jason St. Gelais. 90 days to transform your identity, clarify your direction, and create lasting momentum. Application required.",
};

export default function Coaching() {
  return (
    <main style={{ fontFamily: "'Georgia', serif" }}>
      <div style={{ backgroundColor: "var(--navy)", borderBottom: "4px solid var(--gold-light)" }} className="px-6 py-4 text-center">
        <p style={{ color: "var(--gold-light)" }} className="text-sm font-bold tracking-widest uppercase">
          90-Day Coaching · Application Required · Limited Spots
        </p>
      </div>

      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 pt-14 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-4">Identity Transformation Coaching</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            90 Days to Become the Person<br />
            <span style={{ color: "var(--gold-light)" }}>Your Goals Require</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Most coaching stays at the strategy level. This goes deeper — into identity, belief, and the behavioral changes that make results not just possible, but inevitable.
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
            <div style={{ backgroundColor: "#1e3a5f", border: "2px solid rgba(201,168,76,0.4)" }} className="rounded-xl p-7">
              <div style={{ color: "var(--gold-light)" }} className="text-xs font-bold tracking-widest uppercase mb-3">1:1 Private Coaching</div>
              <p className="text-gray-400 text-sm mb-2 line-through">$4,997 value</p>
              <p className="text-white text-4xl font-bold mb-1">$2,997</p>
              <p style={{ color: "var(--gold)" }} className="text-sm font-bold mb-4">or 3 × $1,097</p>
              <p className="text-gray-300 text-sm mb-4">~10 sessions over 90 days<br />6 weekly + bi-weekly cadence</p>
              <a href="#apply" className="btn-gold block text-center py-3">Apply for 1:1 →</a>
            </div>
            <div style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.2)" }} className="rounded-xl p-7">
              <div style={{ color: "var(--gold-light)" }} className="text-xs font-bold tracking-widest uppercase mb-3">Small Group Coaching</div>
              <p className="text-gray-400 text-sm mb-2 line-through">$2,497 value</p>
              <p className="text-white text-4xl font-bold mb-1">$1,497</p>
              <p style={{ color: "var(--gold)" }} className="text-sm font-bold mb-4">or 3 × $597</p>
              <p className="text-gray-300 text-sm mb-4">4-8 people · same 90-day structure<br />Cohort energy + accountability</p>
              <a href="#apply" className="btn-navy block text-center py-3">Apply for Group →</a>
            </div>
          </div>
          <p className="text-gray-500 text-sm">Application required. Jason reviews every application personally.</p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="section-tag text-center mb-3" style={{ color: "var(--gold)" }}>The Journey</div>
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "var(--navy)" }}>What 90 Days Actually Looks Like</h2>
          <div className="space-y-6">
            {[
              { phase: "Month 1 — Clarity", desc: "We start with the full Goal Setting Workshop framework — but live, with Jason beside you. Deep dive into your wheel of life, 10-year vision, and the patterns underneath your current results. You leave month one knowing exactly what you want and why you've been stuck." },
              { phase: "Month 2 — Identity", desc: "This is the work most coaching skips. We go into the beliefs, stories, and self-image that are keeping you at your current level. You don't just get new goals — you become someone different enough to actually achieve them." },
              { phase: "Month 3 — Execution", desc: "Accountability, momentum, and course-correction. We measure what matters, address what's blocking you in real time, and build the habits and routines that make your new direction the default — not the exception." },
            ].map((p, i) => (
              <div key={i} style={{ borderLeft: "4px solid var(--gold-light)", backgroundColor: "white" }} className="p-6 rounded-r-xl">
                <h3 style={{ color: "var(--navy)" }} className="text-xl font-bold mb-2">{p.phase}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="section-tag text-center mb-3" style={{ color: "var(--gold)" }}>What's Included</div>
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "var(--navy)" }}>Everything in Your Corner</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "~10 sessions over 90 days (1:1) or same structure in small group",
              "Session recordings sent within 24 hours",
              "Direct access to Jason between sessions (messaging)",
              "Full You Are the Goal workbook + Goal Setting Workshop included",
              "Custom identity exercises and reflection prompts",
              "Goal-tracking system built to your specifics",
              "Payment plans available (3-pay option)",
              "Application review within 48 hours",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle size={18} style={{ color: "var(--gold-light)", flexShrink: 0 }} className="mt-0.5" />
                <p style={{ color: "#444" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" style={{ backgroundColor: "var(--navy)" }} className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-tag mb-3">Apply Now</div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Do the Real Work?</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Start with a free 30-minute discovery call. We'll talk about where you are, what you want, and whether this is the right fit.
          </p>
          <a href="https://calendly.com/jasonstgelais" target="_blank" rel="noopener noreferrer" className="btn-gold inline-block py-4 px-10 text-lg mb-6">
            Book Your Free Discovery Call →
          </a>
          <p className="text-gray-500 text-sm">No pressure. No pitch. Just a real conversation.</p>
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-4">Not ready for coaching yet? Start with the workbook.</p>
            <a href="/workbook" className="flex items-center justify-center gap-2 font-bold" style={{ color: "var(--gold-light)" }}>
              Get the 38-Page Workbook for $37 <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: "#0a1a30", borderTop: "3px solid var(--gold-light)" }} className="px-6 py-8 text-center text-gray-500 text-sm">
        <p className="text-gray-400">© 2026 Jason St. Gelais · <a href="https://stgelaisleadership.com" style={{ color: "var(--gold-light)" }}>stgelaisleadership.com</a></p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="/privacy" className="text-gray-500 hover:text-gray-300 text-xs">Privacy Policy</a>
          <a href="/terms" className="text-gray-500 hover:text-gray-300 text-xs">Terms</a>
        </div>
      </footer>
    </main>
  );
}

