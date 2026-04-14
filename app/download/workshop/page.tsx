import { CheckCircle, Calendar, Clock, Mail, Users, Video, Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're In — You Are the Goal Workshop | Jason St. Gelais",
  robots: { index: false },
};

export default function WorkshopDownload() {
  return (
    <main style={{ fontFamily: "'Georgia', serif" }}>
      <div style={{ backgroundColor: "var(--navy)", borderBottom: "4px solid var(--gold-light)" }} className="px-6 py-4 text-center">
        <p style={{ color: "var(--gold-light)" }} className="text-sm font-bold tracking-widest uppercase">
          You Are the Goal — Workshop
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
            You're In. Welcome to the Founding Cohort.
          </h1>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed">
            Your seat is confirmed. This is a big step and I'm genuinely glad you're here.
          </p>
          <p className="text-gray-400 mb-8">
            Check your email — you'll receive a welcome message from Jason within a few minutes with everything you need to know before Session 1.
          </p>
          <div style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.3)" }} className="rounded-xl p-6 mb-4 flex items-center gap-4 text-left">
            <Mail size={28} style={{ color: "var(--gold-light)", flexShrink: 0 }} />
            <div>
              <p className="text-white font-bold mb-1">Check your inbox now</p>
              <p className="text-gray-400 text-sm">Subject: <em>"Welcome to the You Are the Goal Workshop — Here's What to Expect"</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--navy)" }}>
            What Happens Next
          </h2>
          <div className="space-y-5">
            {[
              { icon: <Mail size={20} />, title: "Watch for your welcome email", desc: "It contains the Zoom link, your pre-work assignment, and the full session schedule. Add it to your calendar as soon as it arrives." },
              { icon: <Calendar size={20} />, title: "Choose your cohort", desc: "East Coast cohort: Tues/Wed/Thu at 6pm ET · Pacific cohort: Tues/Wed/Thu at 6pm PT. Details in your welcome email — reply to it with your preference." },
              { icon: <Download size={20} />, title: "Download your workbook (included)", desc: "The 38-page You Are the Goal workbook is included with your workshop. Glance through it before Session 1 — you'll use it throughout the program." },
              { icon: <Video size={20} />, title: "Complete the pre-work", desc: "Before Session 1, do your 15-Minute Life Audit if you haven't already. It sets the foundation for everything we'll cover together." },
            ].map((s, i) => (
              <div key={i} style={{ borderLeft: "4px solid var(--gold-light)", backgroundColor: "white" }} className="p-5 rounded-r-xl flex gap-4">
                <div style={{ color: "var(--gold-light)", flexShrink: 0 }} className="mt-0.5">{s.icon}</div>
                <div>
                  <p style={{ color: "var(--navy)" }} className="font-bold mb-1">{s.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/you-are-the-goal-workbook.pdf"
              download="You-Are-the-Goal-Workbook.pdf"
              className="btn-gold inline-flex items-center gap-2 py-3 px-8"
            >
              <Download size={18} /> Download Your Workbook
            </a>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-3">Your 5 Sessions</div>
          <h2 className="text-3xl font-bold text-white mb-10">What We'll Cover Together</h2>
          <div className="grid md:grid-cols-2 gap-5 text-left">
            {[
              { num: "01", title: "Where You've Been", desc: "Your proven capacity for success — we start by reclaiming what you've already accomplished and understanding the patterns that got you here." },
              { num: "02", title: "The Wheel of Life", desc: "Your honest snapshot — where life is strong and where it's wobbling. This is where we get real about the gaps." },
              { num: "03", title: "Your 10-Year Vision", desc: "What you truly want, uncensored. This session removes the filters and lets you see what's actually calling you forward." },
              { num: "04", title: "How You View the Future", desc: "Prioritizing what matters most — turning a list of desires into an intentional, organized direction." },
              { num: "05", title: "Becoming the Person", desc: "The identity shift that makes everything else stick. Who do you need to become to live the life you just mapped out?" },
            ].map((s, i) => (
              <div key={i} style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.2)" }} className="p-5 rounded-xl">
                <div style={{ color: "var(--gold)" }} className="text-xs font-bold tracking-widest uppercase mb-2">Session {s.num}</div>
                <p className="text-white font-bold mb-2">{s.title}</p>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
            <div style={{ backgroundColor: "#1e3a5f", border: "1px solid rgba(201,168,76,0.2)" }} className="p-5 rounded-xl flex items-center gap-3">
              <Users size={24} style={{ color: "var(--gold-light)", flexShrink: 0 }} />
              <p className="text-gray-300 text-sm">Small group · max 12 people · every participant gets direct attention from Jason</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ backgroundColor: "var(--cream)" }} className="px-6 py-10">
        <div className="max-w-xl mx-auto text-center">
          <p style={{ color: "var(--navy)" }} className="font-bold mb-2">Questions before the first session?</p>
          <p className="text-gray-600 text-sm">
            Reply to your welcome email or reach Jason directly at{" "}
            <a href="mailto:jason@youarethegoal.com" style={{ color: "var(--gold)" }}>jason@youarethegoal.com</a>
          </p>
          <p className="text-gray-500 text-sm mt-4">
            <a href="https://linkedin.com/in/jstgelais" style={{ color: "var(--gold)" }}>linkedin.com/in/jstgelais</a>
          </p>
        </div>
      </section>

      <footer style={{ backgroundColor: "var(--navy)", borderTop: "3px solid var(--gold-light)" }} className="px-6 py-8 text-center text-gray-500 text-sm">
        <p className="text-gray-400">© 2026 Jason St. Gelais · <a href="https://stgelaisleadership.com" style={{ color: "var(--gold-light)" }}>stgelaisleadership.com</a></p>
      </footer>
    </main>
  );
}
