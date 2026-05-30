export const defaultTitle = "Sharda Academy | Quality Education & Skill Development Institute";
export const defaultDescription = "Sharda Academy provides quality education, professional training, and skill development programs designed to help students achieve academic excellence, practical knowledge, and career success.";

export const defaultOpenGraph = {
  title: defaultTitle,
  description: defaultDescription,
  url: "https://sharda-academy.in",
  siteName: "Sharda Academy",
  locale: "en_IN",
  type: "website",
};

export const defaultTwitter = {
  card: "summary_large_image",
  title: defaultTitle,
  description: defaultDescription,
  images: [{ url: "/og-image.png" }],
};

export function getCanonicalUrl(path: string): string {
  const base = "https://sharda-academy.in";
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}
