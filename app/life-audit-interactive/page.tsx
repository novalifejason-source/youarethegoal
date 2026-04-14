import type { Metadata } from "next";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Life Audit | You Are the Goal",
  robots: { index: false },
};

export default function LifeAuditInteractive() {
  return (
    <main style={{ fontFamily: "'Georgia', serif" }}>
      <div style={{ backgroundColor: "var(--navy)", borderBottom: "4px solid var(--gold-light)" }} className="px-6 py-4 flex justify-between items-center">
        <a href="/" style={{ color: "var(--gold-light)" }} className="text-sm font-bold tracking-widest uppercase hover:opacity-80">← You Are the Goal</a>
        <a href="/life-audit.pdf" download className="flex items-center gap-2 text-sm font-bold" style={{ color: "var(--gold-light)" }}>
          <Download size={14} /> Download PDF Version
        </a>
      </div>
      <iframe
        src="/life-audit-interactive.html"
        style={{ width: "100%", height: "calc(100vh - 60px)", border: "none" }}
        title="15-Minute Life Audit"
      />
    </main>
  );
}
