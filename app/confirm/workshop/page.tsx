'use client';

import { useEffect, useState, useRef } from 'react';
import { CheckCircle, Calendar, Clock, ExternalLink, Mail, Link2, ChevronDown } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Session {
  day: string;
  date: string;
  label: string;
  // UTC times for calendar links
  startUtc: string; // YYYYMMDDTHHMMSSZ
  endUtc: string;
}

interface Cohort {
  id: number;
  badge: string;
  title: string;
  startLabel: string;
  sessions: Session[];
  calendlyPath: string; // e.g. 'workshop-cohort1'
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const COHORTS: Cohort[] = [
  {
    id: 1,
    badge: 'COHORT 1',
    title: 'Starts April 28',
    startLabel: 'Tuesday, April 28 at 4pm AZ / 7pm ET',
    calendlyPath: 'you-are-the-goal-workshop',
    sessions: [
      { day: 'Tue, Apr 28', date: 'Session 1', label: 'Session 1', startUtc: '20260428T230000Z', endUtc: '20260429T000000Z' },
      { day: 'Wed, Apr 29', date: 'Session 2', label: 'Session 2', startUtc: '20260429T230000Z', endUtc: '20260430T000000Z' },
      { day: 'Thu, Apr 30', date: 'Session 3', label: 'Session 3', startUtc: '20260430T230000Z', endUtc: '20260501T000000Z' },
      { day: 'Tue, May 5',  date: 'Session 4', label: 'Session 4', startUtc: '20260505T230000Z', endUtc: '20260506T000000Z' },
      { day: 'Wed, May 6',  date: 'Session 5', label: 'Session 5', startUtc: '20260506T230000Z', endUtc: '20260507T000000Z' },
    ],
  },
  {
    id: 2,
    badge: 'COHORT 2',
    title: 'Starts May 12',
    startLabel: 'Tuesday, May 12 at 4pm AZ / 7pm ET',
    calendlyPath: 'you-are-the-goal-workshop-c1-clone',
    sessions: [
      { day: 'Tue, May 12', date: 'Session 1', label: 'Session 1', startUtc: '20260512T230000Z', endUtc: '20260513T000000Z' },
      { day: 'Wed, May 13', date: 'Session 2', label: 'Session 2', startUtc: '20260513T230000Z', endUtc: '20260514T000000Z' },
      { day: 'Thu, May 14', date: 'Session 3', label: 'Session 3', startUtc: '20260514T230000Z', endUtc: '20260515T000000Z' },
      { day: 'Tue, May 19', date: 'Session 4', label: 'Session 4', startUtc: '20260519T230000Z', endUtc: '20260520T000000Z' },
      { day: 'Wed, May 20', date: 'Session 5', label: 'Session 5', startUtc: '20260520T230000Z', endUtc: '20260521T000000Z' },
    ],
  },
];

const WORKSHOP_SESSIONS = [
  {
    num: 1,
    name: "Where You've Been — Your Proven Capacity for Success",
    desc: "Reconnect with your track record. Identify the strengths, resilience, and wins you've already demonstrated — and build the confidence foundation everything else rests on.",
  },
  {
    num: 2,
    name: 'The Wheel of Life — Your Honest Snapshot',
    desc: "Go deeper than the free audit. Define your ideal 10 in every area, score your current reality honestly, and build a clear visual picture of where you are versus where you want to be.",
  },
  {
    num: 3,
    name: 'Your 10-Year Vision — Unleash Your Deepest Desires',
    desc: 'No filters, no limiting beliefs. Generate 50+ goals, experiences, and aspirations you actually want — and discover the patterns that reveal what truly matters most to you.',
  },
  {
    num: 4,
    name: 'How You View the Future — Prioritize What Matters Most',
    desc: 'Use your natural time perspective and decision-making patterns to prioritize your vision. Turn 50 desires into a focused, committed plan for the next 90 days and 10 years.',
  },
  {
    num: 5,
    name: 'Becoming the Person — Your Future Identity',
    desc: 'The most powerful session. Shift from "what I want" to "who I must become." Build your future identity statement and leave knowing exactly who you\'re becoming and why it matters.',
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function googleCalUrl(session: Session, sessionLabel: string): string {
  const title = encodeURIComponent(`You Are The Goal Workshop — ${sessionLabel}`);
  const details = encodeURIComponent('Live coaching with Jason St Gelais. Zoom link in your confirmation email.');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${session.startUtc}/${session.endUtc}&details=${details}&location=Zoom`;
}

function outlookUrl(session: Session, sessionLabel: string): string {
  const start = session.startUtc.replace('Z', '').replace(
    /(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/,
    '$1-$2-$3T$4:$5:$6Z'
  );
  const end = session.endUtc.replace('Z', '').replace(
    /(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/,
    '$1-$2-$3T$4:$5:$6Z'
  );
  const subject = encodeURIComponent(`You Are The Goal Workshop — ${sessionLabel}`);
  const body = encodeURIComponent('Live coaching with Jason St Gelais. Zoom link in your confirmation email.');
  return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${subject}&startdt=${start}&enddt=${end}&body=${body}`;
}

function icsContent(session: Session, sessionLabel: string): string {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART:${session.startUtc}`,
    `DTEND:${session.endUtc}`,
    `SUMMARY:You Are The Goal Workshop — ${sessionLabel}`,
    'DESCRIPTION:Live coaching with Jason St Gelais. Zoom link in your confirmation email.',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('%0A');
}

function icsDownloadUrl(session: Session, sessionLabel: string): string {
  return `data:text/calendar;charset=utf8,${icsContent(session, sessionLabel)}`;
}

function buildCalendlyUrl(path: string, name: string, email: string): string {
  // TODO: Replace jasonstgelais with Jason's actual Calendly username
  const base = `https://calendly.com/jasonstgelais/${path}`;
  const params = new URLSearchParams();
  if (name) params.set('name', name);
  if (email) params.set('email', email);
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-medium tracking-widest uppercase text-amber-700 border-b border-amber-200 pb-1.5 mb-4">
      {children}
    </div>
  );
}

function CalDropdown({ session, label, filename }: { session: Session; label: string; filename: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border border-stone-200 bg-stone-50 text-stone-600 hover:border-amber-500 hover:text-amber-700 transition-colors"
      >
        <Calendar size={11} /> Add to calendar <ChevronDown size={11} className={open ? 'rotate-180' : ''} />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 w-40 bg-white border border-stone-200 rounded-lg shadow-lg z-10 overflow-hidden">
          <a href={googleCalUrl(session, label)} target="_blank" rel="noopener noreferrer"
            className="block px-3 py-2 text-xs text-stone-600 hover:bg-amber-50 hover:text-amber-700"
            onClick={() => setOpen(false)}>
            Google Calendar
          </a>
          <a href={outlookUrl(session, label)} target="_blank" rel="noopener noreferrer"
            className="block px-3 py-2 text-xs text-stone-600 hover:bg-amber-50 hover:text-amber-700"
            onClick={() => setOpen(false)}>
            Outlook
          </a>
          <a href={icsDownloadUrl(session, label)} download={`${filename}.ics`}
            className="block px-3 py-2 text-xs text-stone-600 hover:bg-amber-50 hover:text-amber-700"
            onClick={() => setOpen(false)}>
            Apple / iCal (.ics)
          </a>
        </div>
      )}
    </div>
  );
}

function CohortCard({ cohort, name, email }: { cohort: Cohort; name: string; email: string }) {
  const calendlyUrl = buildCalendlyUrl(cohort.calendlyPath, name, email);

  return (
    <div className="bg-white rounded-2xl border border-stone-200 hover:border-amber-300 transition-colors p-5 sm:p-6 flex flex-col">
      {/* Badge */}
      <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-amber-50 text-amber-700 mb-3 self-start">
        {cohort.badge}
      </span>

      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{cohort.title}</h3>

      {/* Book button — FIRST */}
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 flex flex-col items-center justify-center gap-0.5 w-full bg-slate-800 hover:bg-slate-700 text-amber-300 font-medium text-sm px-4 py-3.5 rounded-xl transition-colors"
      >
        <span className="flex items-center gap-2">
          Reserve my spot — {cohort.badge} <ExternalLink size={13} />
        </span>
        <span className="text-xs text-stone-400 font-normal">Starts {cohort.startLabel}</span>
      </a>

      {/* Sessions with dropdown calendar */}
      <div className="border-t border-stone-100 pt-3">
        <p className="text-xs font-medium tracking-wide uppercase text-stone-400 mb-2">Session schedule</p>
        <div className="divide-y divide-stone-100">
          {cohort.sessions.map((session, i) => (
            <div key={session.startUtc} className="flex items-center gap-2 py-2.5">
              <span className="text-xs font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded flex-shrink-0 w-16 text-center">
                {session.label}
              </span>
              <span className="text-xs font-medium text-slate-700 flex-shrink-0 w-24">{session.day}</span>
              <span className="text-xs text-stone-400 flex items-center gap-1 flex-1">
                <Clock size={10} /> 4pm AZ / 7pm ET
              </span>
              <CalDropdown
                session={session}
                label={session.label}
                filename={`session${i + 1}-${session.day.toLowerCase().replace(/[, ]+/g, '-')}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkshopConfirmPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Read Stripe-passed params from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setName(params.get('name') || '');
    setEmail(params.get('email') || '');
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">

      {/* ── HEADER ── */}
      <div className="bg-slate-800 px-6 py-10 sm:py-12 text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
        <div className="w-16 h-16 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} color="white" strokeWidth={2} />
        </div>
        <h1 className="text-2xl sm:text-4xl font-semibold text-amber-300 mb-2 leading-tight">
          You're registered — welcome to the workshop.
        </h1>
        <p className="text-stone-400 text-sm sm:text-base max-w-lg mx-auto">
          You Are The Goal — Live Goal Mastery Workshop with Jason St Gelais.
          Your next step is to choose your cohort start date below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* ── WHAT HAPPENS NEXT ── */}
        <SectionLabel>What happens next</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {[
            { n: 1, title: 'Pick your cohort', desc: 'Choose a start date below — Cohort 1 starts April 28 or Cohort 2 starts May 12.' },
            { n: 2, title: 'Add all 5 sessions', desc: 'Use the calendar buttons to add every session to Google, Outlook, or Apple Calendar.' },
            { n: 3, title: 'Check your email', desc: 'A confirmation with your Zoom link and workbook reminder is on its way to your inbox.' },
          ].map(({ n, title, desc }) => (
            <div key={n} className="bg-white rounded-xl border border-stone-200 p-4 text-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-amber-300 text-xs font-semibold flex items-center justify-center mx-auto mb-2.5">
                {n}
              </div>
              <p className="text-sm font-medium text-slate-700 mb-1">{title}</p>
              <p className="text-xs text-stone-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── COHORT CHOOSER ── */}
        <SectionLabel>Choose your cohort start date</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {COHORTS.map((cohort) => (
            <CohortCard key={cohort.id} cohort={cohort} name={name} email={email} />
          ))}
        </div>

        {/* ── WHAT'S COVERED ── */}
        <SectionLabel>What you'll cover across 5 sessions</SectionLabel>
        <div className="divide-y divide-stone-100 mb-10">
          {WORKSHOP_SESSIONS.map((s) => (
            <div key={s.num} className="flex gap-4 py-4">
              <div className="w-9 h-9 rounded-full bg-slate-800 text-amber-300 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {s.num}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 mb-1">{s.name}</p>
                <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CONTACT ── */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 mb-10 text-sm text-stone-600 leading-relaxed">
          <strong className="text-slate-700">Questions?</strong> Reply to your confirmation email or reach Jason directly at{' '}
          <a href="mailto:jason@stgelaisleadership.com" className="text-amber-700 hover:underline inline-flex items-center gap-1">
            <Mail size={13} /> jason@stgelaisleadership.com
          </a>{' '}
          or on{' '}
          <a href="https://linkedin.com/in/jstgelais" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline inline-flex items-center gap-1">
            <Link2 size={13} /> LinkedIn
          </a>. Jason personally reads every message.
        </div>

        {/* ── FOOTER ── */}
        <div className="text-center text-xs text-stone-400 border-t border-stone-200 pt-6">
          Jason St Gelais &nbsp;|&nbsp; jason@stgelaisleadership.com &nbsp;|&nbsp; stgelaisleadership.com &nbsp;|&nbsp; linkedin.com/in/jstgelais
          <br /><br />
          © Jason St Gelais — You Are The Goal Workshop
        </div>

      </div>
    </div>
  );
}

/*
═══════════════════════════════════════════════════════════════════════
  AGENT DEPLOYMENT NOTES
═══════════════════════════════════════════════════════════════════════

FILE LOCATION:
  app/confirm/workshop/page.tsx
  → serves at: youarethegoal.com/confirm/workshop

STRIPE SUCCESS URL:
  Set on the $97 workshop payment link in Stripe dashboard:
  https://youarethegoal.com/confirm/workshop?name={CUSTOMER_NAME}&email={CUSTOMER_EMAIL}

  Stripe supports these dynamic variables in success URLs:
  {CUSTOMER_NAME} and {CUSTOMER_EMAIL} are auto-replaced by Stripe.

CALENDLY USERNAME:
  Replace jasonstgelais in buildCalendlyUrl() with Jason's actual
  Calendly username (visible in any Calendly link Jason has).

CALENDLY EVENT SLUGS:
  Replace 'workshop-cohort1' and 'workshop-cohort2' with the actual
  event type slugs from Jason's Calendly account.

DEPENDENCIES:
  - lucide-react (already in stack)
  - tailwind css (already in stack)
  - No new packages needed

WHEN COHORT 1 IS FULL OR PAST Apr 28:
  Remove the first entry from the COHORTS array.
  The grid automatically becomes single-column.

ADD FUTURE COHORTS:
  Add new entries to the COHORTS array following the same structure.
  All calendar links and buttons generate automatically.

TAILWIND COLORS USED:
  slate-800  = navy brand color
  amber-*    = gold brand color
  stone-*    = warm neutral text/backgrounds
  emerald-700 = success green (checkmark circle)

═══════════════════════════════════════════════════════════════════════
*/



