import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products, waLink } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "The Collection — Hafsatys Candies Co" },
      { name: "description", content: "Browse our handcrafted candies: Milk Toffee (ILOKA), Gullisuwa, Alawar Madara, Albishir, and Tsami Gaye." },
      { property: "og:title", content: "The Collection — Hafsatys Candies Co" },
      { property: "og:description", content: "Handcrafted Northern Nigerian candies." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.subtitle.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">The Collection</p>
          <h1 className="text-5xl md:text-6xl font-display italic mb-6">Our Handcrafted Sweets</h1>
          <p className="text-foreground/70 leading-relaxed">
            Every candy in our collection is prepared in small batches with fresh ingredients
            and traditional Northern recipes. Tap any product to learn more or order on WhatsApp.
          </p>
        </div>

        <div className="mb-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <input
            type="search"
            placeholder="Search candies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-80 px-5 py-3 rounded-full border border-foreground/10 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <span className="text-xs uppercase tracking-widest text-foreground/40">{filtered.length} items</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <article key={p.slug} className="group">
              <Link to="/products/$slug" params={{ slug: p.slug }} className="block">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full aspect-[4/5] object-cover bg-secondary/40 group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-1">{p.name}</h2>
                <p className="text-sm text-foreground/50 mb-4">{p.subtitle}</p>
              </Link>
              <a
                href={waLink(`Hi Hafsatys! I'd like to order ${p.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-[10px] font-bold uppercase tracking-widest text-foreground hover:text-primary underline decoration-primary/30 underline-offset-4"
              >
                Order on WhatsApp →
              </a>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-16 text-foreground/50">No sweets match "{query}".</p>
        )}
      </div>
    </section>
  );
}
