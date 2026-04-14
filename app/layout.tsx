import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "You Are the Goal | Free 15-Minute Life Audit",
  description: "Feeling stuck mid-career? Get instant clarity with your free 2-page Life Audit + 12-minute walkthrough video. Discover what's holding you back in under 15 minutes.",
  keywords: "life audit, mid-career clarity, goal setting, leadership coaching, career fulfillment, Jason St Gelais",
  openGraph: {
    title: "You Are the Goal | Free 15-Minute Life Audit",
    description: "Feeling stuck mid-career? Get instant clarity in under 15 minutes.",
    url: "https://youarethegoal.com",
    siteName: "You Are the Goal",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
