import "./globals.css";

export const metadata = {
  title: "Sharda Academy | Premier SSC, HSC & Board Coaching — Mankhurd-43",
  description:
    "Sharda Academy, Mankhurd-43 — Mumbai's most trusted coaching institute for Classes 1–12. Expert board specialist faculty, smart classrooms, biometric attendance, and a 92%+ success rate. Enroll for SSC & HSC Board preparation programs.",
  keywords:
    "Sharda Academy, SSC coaching Mankhurd, HSC coaching Mumbai, coaching classes Mankhurd, board preparation, classes 1 to 12 coaching Mumbai",
  icons: {
    icon: "/logo_cropped.png",
    shortcut: "/logo_cropped.png",
    apple: "/logo_cropped.png",
  },
  openGraph: {
    title: "Sharda Academy — Nurturing Minds & Building Board Achievers",
    description:
      "Join Mumbai's premier coaching institute for academic excellence. SSC, HSC, Board preparation & Primary programs for Classes 1–12.",
    url: "https://sharda-academy.in",
    siteName: "Sharda Academy",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo_cropped.png" type="image/png" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
