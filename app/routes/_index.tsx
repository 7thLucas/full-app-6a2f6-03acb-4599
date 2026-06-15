import { useConfigurables } from "~/modules/configurables";
import { HeroSection } from "~/components/landing/hero-section";
import { ProductsSection } from "~/components/landing/products-section";
import { ContactSection } from "~/components/landing/contact-section";

/**
 * Crustyverr landing page — single page with Hero, Products, and Contact sections.
 * All copy, colors, and data are driven by the configurables module.
 */
export default function IndexPage() {
  const { config, loading } = useConfigurables();

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#FAFAF7" }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl animate-pulse select-none">☕ 123</span>
          <p
            className="text-sm font-medium tracking-wide"
            style={{ color: "#6B3F1F", fontFamily: "'Playfair Display', serif" }}
          >
            Sedang menyeduh...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main
      style={{
        background: config.pageBackground ?? "#FAFAF7",
        color: config.textColor ?? "#1C1007",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <HeroSection config={config} />
      <ProductsSection config={config} />
      <ContactSection config={config} />
    </main>
  );
}
