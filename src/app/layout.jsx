import "./globals.css";

export async function generateMetadata() {
  let seoData = {
    title: "Sharda Academy - Academic Excellence in Mankhurd",
    description: "Sharda Academy offers premium coaching for classes 1st to 12th in Mankhurd, Mumbai.",
    keywords: "Sharda Academy, SSC coaching Mankhurd, HSC coaching Mumbai, coaching classes Mankhurd, board preparation, classes 1 to 12 coaching Mumbai"
  };

  return {
    metadataBase: new URL("https://sharda-academy.in"),
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    icons: {
      icon: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png",
      shortcut: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png",
      apple: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png",
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: "https://sharda-academy.in",
      siteName: "Sharda Academy",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: [{ url: "/og-image.png" }]
    }
  };
}

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
        <link rel="icon" href="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png" type="image/png" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
