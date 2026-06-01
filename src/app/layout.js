import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sharda-academy.in"),
  title: "Sharda Academy | Quality Education & Skill Development Institute",
  description:
    "Sharda Academy provides quality education, professional training, and skill development programs designed to help students achieve academic excellence, practical knowledge, and career success.",
  keywords:
    "Sharda Academy, SSC coaching Mankhurd, HSC coaching Mumbai, coaching classes Mankhurd, board preparation, classes 1 to 12 coaching Mumbai",
  icons: {
    icon: "/logo_cropped.png",
    shortcut: "/logo_cropped.png",
    apple: "/logo_cropped.png",
  },
  openGraph: {
    title: "Sharda Academy | Quality Education & Skill Development Institute",
    description:
      "Sharda Academy provides quality education, professional training, and skill development programs designed to help students achieve academic excellence, practical knowledge, and career success.",
    url: "https://sharda-academy.in",
    siteName: "Sharda Academy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharda Academy | Quality Education & Skill Development Institute",
    description: "Sharda Academy provides quality education, professional training, and skill development programs designed to help students achieve academic excellence, practical knowledge, and career success.",
    images: [{ url: "/og-image.png" }]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
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
