import { CheckCircle, Shield, Calendar, Clock, Users, Video, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Goal-Setting Workshop | You Are the Goal",
  description: "5 live sessions with Jason St. Gelais to build a decade of direction. Mid-career professionals who are done with vague goals and ready for real momentum. Launch price: $97.",
};

export default function Workshop() {
  return (
    <main style={{ fontFamily: "'Georgia', serif" }}>
      <div style={{ backgroundColor: "var(--navy)", borderBottom: "4px solid var(--gold-light)" }} className="px-6 py-4 text-center">
        <p style={{ color: "var(--gold-light)" }} className="text-sm font-bold tracking-widest uppercase">
          Live Workshop · Small Group · 5 Sessions · Launch Price $97
        </p>
      </div>

      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 pt-14 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-4">5-Session Live Workshop</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            You Are the Goal —<br />
            <span style={{ color: "var(--gold-light)" }}>With Jason Beside You</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            The live, facilitated version of the workbook journey. Five focused sessions where you do the work, get direct feedback, and leave with a committed plan for the next decade of your life.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Clock size={20} />, label: "5 Sessions", sub: "45-60 min each" },
              { icon: <Users size={20} />, label: "Small Group", sub: "Max 12 people" },
              { icon: <Video size={20} />, label: "Live on Zoom", sub: "Recordings included" },
              { icon: <Calendar size={20} />, label: "2-Week Format", sub: "Tue/Wed/Thu" },
            ].map((s, i) => (
              <div key={i} style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.2)" }} className="p-4 rounded-xl text-center">
                <div style={{ color: "var(--gold-light)" }} className="flex justify-center mb-2">{s.icon}</div>
                <p className="text-white font-bold text-sm">{s.label}</p>
                <p className="text-gray-400 text-xs">{s.sub}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.3)" }} className="rounded-xl p-8 max-w-sm mx-auto">
            <p className="text-gray-400 text-sm mb-1">Anchor Value</p>
            <p className="strike text-2xl text-gray-400 mb-1">$497</p>
            <p className="text-white text-sm font-bold mb-1 uppercase tracking-widest">Launch Price</p>
            <p style={{ color: "var(--gold-light)" }} className="text-5xl font-bold mb-2">$97</p>
            <p style={{ color: "var(--gold)" }} className="text-sm font-bold mb-6">80% off — founding cohort only</p>
            <a href="/#contact" className="btn-gold block w-full text-center py-4">
              Reserve My Seat →
            </a>
            <p className="text-gray-400 text-xs mt-3 text-center">Small group · Limited seats per cohort</p>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="section-tag text-center mb-3" style={{ color: "var(--gold)" }}>Workshop Schedule</div>
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "var(--navy)" }}>Choose Your Cohort</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div style={{ border: "2px solid var(--gold-light)", backgroundColor: "white" }} className="rounded-xl p-6">
              <div style={{ backgroundColor: "var(--navy)", color: "var(--gold-light)" }} className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-3">East Coast Cohort</div>
              <p style={{ color: "var(--navy)" }} className="font-bold text-lg mb-2">6:00 PM Eastern Time</p>
              <p className="text-gray-600 mb-3">Week 1: Tuesday · Wednesday · Thursday<br />Week 2: Tuesday · Wednesday</p>
              <p className="text-gray-500 text-sm">5 sessions over 2 weeks</p>
            </div>
            <div style={{ border: "2px solid var(--gold-light)", backgroundColor: "white" }} className="rounded-xl p-6">
              <div style={{ backgroundColor: "var(--navy)", color: "var(--gold-light)" }} className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-3">Pacific Coast Cohort</div>
              <p style={{ color: "var(--navy)" }} className="font-bold text-lg mb-2">6:00 PM Pacific Time</p>
              <p className="text-gray-600 mb-3">Week 3: Tuesday · Wednesday · Thursday<br />Week 4: Tuesday · Wednesday</p>
              <p className="text-gray-500 text-sm">5 sessions over 2 weeks</p>
            </div>
          </div>
          <p className="text-gray-500 text-center text-sm">Can't make a session? All sessions are recorded and sent to registered participants.</p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="section-tag text-center mb-3" style={{ color: "var(--gold)" }}>What's Included</div>
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "var(--navy)" }}>Everything You Need to Leave with a Real Plan</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "5 live facilitated Zoom sessions (45-60 min each)",
              "All session recordings sent within 24 hours",
              "Session worksheets and reflection exercises",
              "The complete 38-page You Are the Goal workbook (PDF)",
              "The 15-Minute Life Audit + 12-min video",
              "Direct feedback from Jason during each session",
              "Small group setting (max 12) — you're not lost in a crowd",
              "Access to Jason between sessions for clarifying questions",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle size={18} style={{ color: "var(--gold-light)", flexShrink: 0 }} className="mt-0.5" />
                <p style={{ color: "#444" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-3">Who This Is For</div>
          <h2 className="text-4xl font-bold text-white mb-8">Mid-Career Professionals Who Are Done with Vague Goals</h2>
          <div className="grid md:grid-cols-2 gap-5 text-left max-w-2xl mx-auto">
            {[
              "You've tried journaling, goal-setting apps, and motivational content — and still feel stuck",
              "You want live support and accountability, not another self-paced course you won't finish",
              "You're ready to do the deep work, not just the surface stuff",
              "You want someone to call out your blind spots in real time",
              "You're serious about this being the year things actually change",
              "You've completed the Life Audit or Workbook and want to go further",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle size={18} style={{ color: "var(--gold-light)", flexShrink: 0 }} className="mt-0.5" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--navy)" }}>Reserve Your Seat</h2>
          <p className="text-gray-600 mb-8">Small cohorts mean seats go fast. Secure your spot at the founding price before it's gone.</p>
          <div style={{ border: "2px solid var(--gold-light)", backgroundColor: "white" }} className="rounded-xl p-8 mb-8">
            <div className="flex justify-center items-baseline gap-4 mb-2">
              <span className="strike text-xl text-gray-400">$497</span>
              <span className="text-5xl font-bold" style={{ color: "var(--navy)" }}>$97</span>
            </div>
            <p style={{ color: "var(--gold)" }} className="text-sm font-bold mb-6 uppercase tracking-wider">Founding Digital Cohort Price</p>
            <a href="https://calendly.com/jasonstgelais" target="_blank" rel="noopener noreferrer" className="btn-gold block w-full text-center py-4 text-lg mb-3">
              Reserve My Seat →
            </a>
            <p className="text-gray-400 text-xs">You'll select your cohort after booking</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 mb-3">Want personalized 1:1 support instead?</p>
            <a href="/coaching" className="flex items-center justify-center gap-2 font-bold" style={{ color: "var(--navy)" }}>
              Learn about 90-Day Coaching <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: "var(--navy)", borderTop: "3px solid var(--gold-light)" }} className="px-6 py-8 text-center text-gray-500 text-sm">
        <p className="text-gray-400">© 2026 Jason St. Gelais · <a href="https://stgelaisleadership.com" style={{ color: "var(--gold-light)" }}>stgelaisleadership.com</a></p>
      </footer>
    </main>
  );
}



