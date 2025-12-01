// Configuración SEO centralizada
export const siteConfig = {
  name: "VoiceDx",
  title: "VoiceDx",
  description:
    "Revolutionize medical charting with intelligent AI assistance. VoiceDx provides precise clinical transcription, FHIR R4 compliant data export, and reclaims hours from your day. Fully HIPAA-certified and designed exclusively for healthcare professionals.",
  url: "https://www.voicedx.com",
  locale: "en_US",
  siteName: "VoiceDx",
  keywords: [
    "medical transcription",
    "AI medical scribe",
    "clinical documentation",
    "automated medical notes",
    "FHIR R4 integration",
    "FHIR compliant",
    "HL7 FHIR",
    "HIPAA compliant",
    "healthcare AI",
    "medical notes",
    "voice to text medical",
    "clinical efficiency",
    "physician productivity",
    "medical dictation",
    "automated documentation",
    "healthcare interoperability",
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
