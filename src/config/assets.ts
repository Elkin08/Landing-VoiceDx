// Configuración de URLs de assets (imágenes y videos)
// Actualiza estas URLs cuando tengas los assets reales

export const ASSETS = {
  // Logo
  logo: "/logo-voicedx.svg",

  // Hero Section
  heroVideo: "/videos/hero-demo.mp4", // Video de demostración del producto
  heroVideoPoster: "/images/hero-poster.jpg", // Imagen de preview del video

  // Badges/Logos de cumplimiento
  badges: {
    hipaa: "/images/badges/hipaa-compliant.svg",
    soc2: "/images/badges/soc2.svg",
    digitalHealth50: "/images/badges/digital-health-50.svg",
  },

  // How It Works - Mockups de la aplicación
  howItWorks: {
    before: "/images/mockups/before-visit.png", // Pantalla de contexto del paciente
    during: "/images/mockups/during-visit.png", // Pantalla de grabación
    after: "/images/mockups/after-visit.png", // Pantalla de códigos y export
  },

  // Accuracy Section
  accuracy: {
    doctorPhoto: "/images/testimonials/doctor-erica.jpg", // Foto del médico testimonio
  },

  // Testimonials - Fotos de médicos
  testimonials: {
    doctor1: "/images/testimonials/doctor-1.jpg",
    doctor2: "/images/testimonials/doctor-2.jpg",
    doctor3: "/images/testimonials/doctor-3.jpg",
    doctor4: "/images/testimonials/doctor-4.jpg",
  },

  // Integrations - Logos de sistemas médicos
  integrations: {
    epic: "/images/integrations/epic-logo.svg",
    cerner: "/images/integrations/cerner-logo.svg",
    athenahealth: "/images/integrations/athenahealth-logo.svg",
    allscripts: "/images/integrations/allscripts-logo.svg",
    ecw: "/images/integrations/ecw-logo.svg",
    nextgen: "/images/integrations/nextgen-logo.svg",
  },

  // Built with Love
  builtWithLove: {
    founderPhoto: "/images/founder-photo.jpg", // Foto del fundador con esposa
  },

  // SEO/Open Graph
  ogImage: "/og-image.jpg", // 1200x630px para compartir en redes sociales
  favicon: "/favicon.ico",
};

// Helper para obtener URL completa
export const getAssetUrl = (path: string, baseUrl?: string): string => {
  if (path.startsWith("http")) return path;
  const base = baseUrl || process.env.NEXT_PUBLIC_SITE_URL || "";
  return `${base}${path}`;
};
