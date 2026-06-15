"use client";
import React from 'react';

import type { TDefaultConfigurableData } from "~/modules/configurables/src/constants/configurables.default";

interface HeroSectionProps {
  config: TDefaultConfigurableData;
}

/**
 * Hero section — full-viewport height banner with brand name, tagline,
 * sub-headline and a primary CTA button that scrolls to the contact section.
 */
export function HeroSection({ config }: HeroSectionProps) {
  const primary = config.brandColor?.primary ?? "#6B3F1F";
  const accent = config.brandColor?.accent ?? "#C8860A";
  const secondary = config.brandColor?.secondary ?? "#F5E6C8";
  const bgColor = config.pageBackground ?? "#FAFAF7";
  const textColor = config.textColor ?? "#1C1007";
  const heroImage = config.heroImage;

  const handleOrderClick = () => {
    const el = document.getElementById("kontak");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const backgroundStyle = heroImage
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(107,63,31,0.72) 0%, rgba(28,16,7,0.55) 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        background: `linear-gradient(135deg, ${primary} 0%, #8B5124 40%, #4A2810 100%)`,
      };

  const isImageHero = Boolean(heroImage);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={backgroundStyle}
    >
      {/* Decorative coffee-ring blur blobs */}
      {!isImageHero && (
        <>
          <div
            className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: accent }}
          />
          <div
            className="absolute bottom-[-100px] left-[-60px] w-[360px] h-[360px] rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ background: secondary }}
          />
        </>
      )}

      {/* Navbar strip */}
      <header className="absolute top-0 left-0 right-0 px-6 py-5 flex items-center justify-between z-20">
        <span
          className="font-bold text-xl tracking-wider uppercase"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: isImageHero ? "#fff" : secondary,
          }}
        >
          {config.appName ?? "Crustyverr"}
        </span>
        <button
          onClick={handleOrderClick}
          className="hidden sm:block px-5 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
          style={{
            background: secondary,
            color: primary,
          }}
        >
          {config.heroCTALabel ?? "Pesan Sekarang"}
        </button>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Coffee icon decoration */}
        <div
          className="mb-6 text-5xl select-none"
          aria-hidden="true"
        >
          ☕
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: isImageHero ? "#fff" : secondary,
          }}
        >
          {config.heroTagline ?? "Kopi Rumahan, Rasa Kedai"}
        </h1>

        {config.heroSubheadline && (
          <p
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            style={{
              color: isImageHero ? "rgba(255,255,255,0.88)" : "rgba(245,230,200,0.85)",
            }}
          >
            {config.heroSubheadline}
          </p>
        )}

        <button
          onClick={handleOrderClick}
          className="px-8 py-4 rounded-full text-base font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
          style={{
            background: secondary,
            color: primary,
          }}
        >
          {config.heroCTALabel ?? "Pesan Sekarang"}
        </button>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce"
        aria-hidden="true"
      >
        <div
          className="w-0.5 h-8 rounded-full"
          style={{ background: isImageHero ? "rgba(255,255,255,0.4)" : "rgba(245,230,200,0.4)" }}
        />
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          className="opacity-40"
        >
          <path
            d="M1 1L8 9L15 1"
            stroke={isImageHero ? "white" : secondary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
