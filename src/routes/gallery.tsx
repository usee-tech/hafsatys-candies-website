import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero-candies.jpg";
import iloka from "@/assets/product-iloka.jpg";
import gullisuwa from "@/assets/product-gullisuwa.jpg";
import alawar from "@/assets/product-alawar.jpg";
import albishir from "@/assets/product-albishir.jpg";
import tsami from "@/assets/product-tsami.jpg";
import gifts from "@/assets/gift-boxes.jpg";
import craft from "@/assets/gallery-craft.jpg";
import display from "@/assets/gallery-display.jpg";
import event from "@/assets/gallery-event.jpg";

const images = [
  { src: hero, alt: "Assorted Hafsatys candies on pink silk" },
  { src: craft, alt: "Hands wrapping candy in pink foil" },
  { src: iloka, alt: "ILOKA milk toffees" },
  { src: gifts, alt: "Pink gift boxes with ribbons" },
  { src: gullisuwa, alt: "Gullisuwa milk balls" },
  { src: display, alt: "Candy jars on marble counter" },
  { src: alawar, alt: "Alawar Madara milk candy" },
  { src: event, alt: "Candy treat bags for an event" },
  { src: albishir, alt: "Albishir golden celebration candy" },
  { src: tsami, alt: "Tsami Gaye tamarind candy" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hafsatys Candies Co" },
      { name: "description", content: "A visual journey through Hafsatys candies, packaging, and event setups." },
      { property: "og:title", content: "Gallery — Hafsatys Candies Co" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Gallery</p>
          <h1 className="text-5xl md:text-6xl font-display italic mb-6">Moments of Sweetness</h1>
          <p className="text-foreground/70 leading-relaxed">A glimpse into our craft, packaging, and celebrations.</p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="block w-full overflow-hidden rounded-2xl group focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
