// Configuración SEO centralizada
export const siteConfig = {
  name: "VoiceDx",
  title: "VoiceDx",
  description:
    "Transform your clinical documentation with AI. VoiceDx delivers accurate medical transcription, seamless EHR integration, and saves clinicians 80% of documentation time. HIPAA compliant and purpose-built for healthcare.",
  url: "https://www.voicedx.com",
  locale: "en_US",
  siteName: "VoiceDx",
  keywords: [
    "medical transcription",
    "AI medical scribe",
    "clinical documentation",
    "EHR integration",
    "HIPAA compliant",
    "healthcare AI",
    "medical notes",
    "voice to text medical",
    "clinical efficiency",
    "physician productivity",
    "medical dictation",
    "automated documentation",
    "healthcare technology",
    "medical software",
    "clinical workflow",
  ],
  social: {
    email: "hello@voicedx.com",
  },
  ogImage: "/og-image.jpg",
};

export const generateMetaTags = (options?: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
  const title = options?.title
    ? `${options.title} | ${siteConfig.name}`
    : siteConfig.title;
  const description = options?.description || siteConfig.description;
  const image = options?.image || `${siteConfig.url}${siteConfig.ogImage}`;
  const url = options?.url || siteConfig.url;

  return {
    title,
    description,
    keywords: siteConfig.keywords.join(", "),
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.siteName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Agrega aquí tus códigos de verificación cuando los tengas
      // google: 'tu-codigo-google',
      // yandex: 'tu-codigo-yandex',
      // bing: 'tu-codigo-bing',
    },
  };
};
