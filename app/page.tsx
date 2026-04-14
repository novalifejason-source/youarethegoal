"use client";

import { useState } from "react";
import { CheckCircle, Shield, Star } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError("Please enter your email."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = "/thank-you";
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main style={{ fontFamily: "'Georgia', serif" }}>
      {/* HEADER BAR */}
      <div style={{ backgroundColor: "var(--navy)", borderBottom: "4px solid var(--gold-light)" }} className="px-6 py-4 text-center">
        <p style={{ color: "var(--gold-light)" }} className="text-sm font-bold tracking-widest uppercase">
          Free for Mid-Career Professionals · No Credit Card Required
        </p>
      </div>

      {/* HERO */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 pt-16 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-4">Free Instant Access</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Feeling Stuck, Unfulfilled, or Unsure<br className="hidden md:block" />
            About Your Next Career Move?
          </h1>
          <p className="text-xl text-gray-300 mb-2 leading-relaxed">
            Get instant clarity with your <strong style={{ color: "var(--gold-light)" }}>Free 2-Page Life Audit</strong> + 12-minute walkthrough video.
          </p>
          <p className="text-gray-400 mb-10">
            Uncover what's holding you back and discover simple next steps toward more fulfillment — in under 15 minutes.
          </p>

          {/* VIDEO PLACEHOLDER */}
          <div style={{ backgroundColor: "#1e3a5f", border: "2px solid rgba(201,168,76,0.3)", aspectRatio: "16/9" }} className="rounded-xl mb-10 flex items-center justify-center max-w-2xl mx-auto">
            <div className="text-center px-8 py-12">
              <div style={{ color: "var(--gold-light)" }} className="text-5xl mb-4">▶</div>
              <p className="text-white text-lg font-bold mb-2">Video Coming Soon</p>
              <p className="text-gray-400 text-sm">Jason's 12-minute Life Audit walkthrough will appear here</p>
            </div>
          </div>

          {/* OPT-IN FORM */}
          <div style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.3)" }} className="rounded-xl p-8 max-w-xl mx-auto">
            <p className="text-white text-xl font-bold mb-6">Get Your Free Life Audit Now</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="First Name (optional)"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 text-base"
              />
              <input
                type="email"
                placeholder="Your Best Email Address *"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 text-base"
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button type="submit" disabled={loading} className="btn-gold text-base py-4 w-full">
                {loading ? "Sending..." : "Send Me the Free Life Audit + Video Now →"}
              </button>
            </form>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Shield size={14} className="text-gray-400" />
              <p className="text-gray-400 text-xs">We respect your inbox. Unsubscribe anytime. Your info is safe.</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Join other mid-career professionals who finally got clear on their path in under 15 minutes.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="section-tag text-center mb-3" style={{ color: "var(--gold)" }}>What You'll Receive Immediately</div>
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "var(--navy)" }}>
            Everything You Need to Get Clear in 15 Minutes
          </h2>
          <div className="space-y-5">
            {[
              "A proven 2-page Life Audit that reveals your current blind spots around career fulfillment and direction",
              "A clear 12-minute video walkthrough that shows exactly how to complete it and turn insights into actionable steps",
              "Personalized clarity on what's draining your energy versus what will bring real satisfaction and momentum",
              "Quick wins you can apply the same day",
              "Designed specifically for mid-career professionals who want more meaning and progress",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle size={22} style={{ color: "var(--gold-light)", flexShrink: 0 }} className="mt-0.5" />
                <p style={{ color: "#333" }} className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-3" style={{ color: "var(--gold)" }}>Who This Is For</div>
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--navy)" }}>
            Does This Sound Like You?
          </h2>
          <div className="grid md:grid-cols-2 gap-5 text-left max-w-2xl mx-auto mb-10">
            {[
              "You feel dissatisfied with where your career is heading",
              "You've been passed over for promotions and aren't sure why",
              "You're unclear about your next chapter, even after years of experience",
              "You work hard but feel like something important is missing",
              "You want more meaning, not just a higher salary",
              "You're ready to gain real direction — not just motivation",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle size={18} style={{ color: "var(--gold-light)", flexShrink: 0 }} className="mt-0.5" />
                <p style={{ color: "#444" }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--navy)", backgroundColor: "var(--warm-tan)", borderLeft: "5px solid var(--gold-light)" }} className="text-left p-5 rounded-r-xl text-lg font-medium max-w-2xl mx-auto">
            This was built for mid-career professionals who feel capable but lost — and are ready to stop waiting for clarity to arrive on its own.
          </p>
        </div>
      </section>

      {/* ABOUT JASON */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-3">Created By</div>
          <h2 className="text-3xl font-bold text-white mb-6">Jason St. Gelais</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Bachelor's in IT · MBA · Master of Science in Leadership · McKinsey Leadership Trained · Maxwell Leadership Certified Team Member
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            "I know what it feels like to be capable and lost at the same time. For years I moved through jobs and roles — always working hard — but never quite landing in a place that felt like mine. This audit is the starting point I wish someone had handed me twenty years ago."
          </p>
          <p style={{ color: "var(--gold-light)" }} className="font-bold mt-4">— Jason St. Gelais</p>
        </div>
      </section>

      {/* SECOND CTA */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <div className="section-tag mb-3" style={{ color: "var(--gold)" }}>It's Free. Take It.</div>
          <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--navy)" }}>
            15 Minutes to More Clarity Than You've Had in Years
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your Best Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ border: "2px solid var(--gold-light)" }}
              className="w-full rounded-lg px-4 py-3 outline-none text-base"
            />
            <button type="submit" disabled={loading} className="btn-gold w-full text-base py-4">
              {loading ? "Sending..." : "Send Me the Free Life Audit →"}
            </button>
          </form>
          <p className="text-gray-500 text-xs mt-4 flex items-center justify-center gap-1">
            <Shield size={12} /> No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "var(--navy)", borderTop: "3px solid var(--gold-light)" }} className="px-6 py-8 text-center text-gray-500 text-sm">
        <p className="text-gray-400">© 2026 Jason St. Gelais · <a href="https://stgelaisleadership.com" style={{ color: "var(--gold-light)" }}>stgelaisleadership.com</a></p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="/privacy" className="text-gray-500 hover:text-gray-300 text-xs">Privacy Policy</a>
          <a href="/terms" className="text-gray-500 hover:text-gray-300 text-xs">Terms</a>
          <a href="mailto:jason@stgelaisleadership.com" className="text-gray-500 hover:text-gray-300 text-xs">Contact</a>
        </div>
      </footer>
    </main>
  );
}
