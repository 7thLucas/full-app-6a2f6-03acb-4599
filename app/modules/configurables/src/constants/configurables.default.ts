/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TCoffeeProduct = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  badge: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  // Hero
  heroTagline: string;
  heroSubheadline: string;
  heroCTALabel: string;
  heroImage: string;
  // Products
  productsSectionTitle: string;
  productsSectionSubtitle: string;
  products: TCoffeeProduct[];
  // Contact
  contactSectionTitle: string;
  contactSectionSubtitle: string;
  whatsappNumber: string;
  whatsappMessage: string;
  contactCTALabel: string;
  instagramHandle: string;
  footerText: string;
  // Colors
  pageBackground: string;
  textColor: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "Crustyverr",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#6B3F1F",
    secondary: "#F5E6C8",
    accent: "#C8860A",
  },
  // Hero
  heroTagline: "Kopi Rumahan, Rasa Kedai",
  heroSubheadline: "Nikmati cita rasa kopi pilihan yang diseduh dengan penuh cinta, langsung dari dapur kami ke tanganmu.",
  heroCTALabel: "Pesan Sekarang",
  heroImage: "",
  // Products
  productsSectionTitle: "Pilihan Kopi Kami",
  productsSectionSubtitle: "Setiap biji kopi dipilih dengan cermat untuk menghadirkan pengalaman minum kopi terbaik di rumahmu.",
  products: [
    {
      name: "Kopi Tubruk Arabika",
      description: "Kopi tubruk klasik dari biji Arabika pilihan Sumatera. Aroma kuat, rasa seimbang antara asam dan pahit.",
      price: "Rp 25.000",
      imageUrl: "",
      badge: "Best Seller",
    },
    {
      name: "Cold Brew Robusta",
      description: "Diseduh dingin selama 12 jam untuk menghasilkan rasa bold dan creamy yang menyegarkan.",
      price: "Rp 30.000",
      imageUrl: "",
      badge: "",
    },
    {
      name: "Kopi Susu Gula Aren",
      description: "Perpaduan espresso pekat dengan susu segar dan gula aren lokal. Manis alami, bikin nagih.",
      price: "Rp 28.000",
      imageUrl: "",
      badge: "Favorit",
    },
    {
      name: "Single Origin Flores",
      description: "Kopi single origin dari Bajawa, Flores. Profil rasa buah-buahan segar dengan aftertaste cokelat.",
      price: "Rp 35.000",
      imageUrl: "",
      badge: "Limited",
    },
  ],
  // Contact
  contactSectionTitle: "Yuk, Pesan Kopimu!",
  contactSectionSubtitle: "Hubungi kami langsung via WhatsApp untuk pemesanan, pertanyaan, atau sekadar ngobrol soal kopi.",
  whatsappNumber: "6281234567890",
  whatsappMessage: "Halo Crustyverr! Saya mau pesan kopi 😊",
  contactCTALabel: "Chat via WhatsApp",
  instagramHandle: "crustyverr.coffee",
  footerText: "© 2024 Crustyverr. Dibuat dengan ☕ dan cinta.",
  // Colors
  pageBackground: "#FAFAF7",
  textColor: "#1C1007",
};
