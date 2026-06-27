import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-candies.jpg";
import giftBoxes from "@/assets/gift-boxes.jpg";
import { products, waLink } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hafsatys Candies Co — Handcrafted Northern Nigerian Sweets" },
      {
        name: "description",
        content:
          "Discover Milk Toffee (ILOKA), Gullisuwa, Alawar Madara, Albishir and Tsami Gaye — handcrafted candies from Gadon Qaya. Order via WhatsApp.",
      },
      { property: "og:title", content: "Hafsatys Candies Co" },
      { property: "og:description", content: "Handcrafted Northern Nigerian confectionery. Order via WhatsApp." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              Handcrafted in Small Batches
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display italic leading-[1.05]">
              Sweetness <br />
              <span className="text-primary">Redefined.</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
              Discover the authentic taste of premium Northern delights. From our signature
              Milk Toffee to traditional favorites, every bite is a celebration of quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-transform italic font-display text-lg tracking-wide"
              >
                Explore Sweets
              </Link>
              <Link
                to="/gallery"
                className="px-8 py-4 border border-foreground/10 rounded-full font-semibold hover:bg-card transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Assorted handcrafted Hafsatys candies on pink silk"
              width={1216}
              height={1536}
              className="w-full aspect-[4.5/5] object-cover rounded-3xl outline-1 -outline-offset-1 outline-black/5 relative z-10"
            />
            <div className="absolute -top-12 -right-12 size-48 rounded-full bg-orange-soft/20 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 size-64 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display italic mb-4">Signature Confections</h2>
              <p className="text-foreground/60">Hand-picked favorites from our traditional recipe book.</p>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary underline decoration-primary/30 underline-offset-4"
            >
              View All Sweets →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group"
              >
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
                    <span className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
                    <p className="text-sm text-foreground/50">{p.subtitle}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground group-hover:text-primary underline decoration-primary/30">
                    View
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-foreground text-background overflow-hidden grid md:grid-cols-2">
          <div className="p-12 md:p-16 flex flex-col justify-center items-start">
            <h2 className="text-3xl md:text-4xl font-display italic mb-6">Craving Something Sweet?</h2>
            <p className="text-background/60 mb-8 leading-relaxed">
              Planning an event, looking for a gift, or just treating yourself — our team is
              ready to deliver sweetness to your doorstep via WhatsApp.
            </p>
            <a
              href={waLink("Hi Hafsatys! I'd like to place an order.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 bg-primary hover:bg-background hover:text-foreground px-8 py-4 rounded-full transition-all duration-300"
            >
              <span className="font-bold">Chat to Order</span>
              <span className="bg-background/20 group-hover:bg-foreground/10 px-2 py-0.5 rounded-full">→</span>
            </a>
          </div>
          <div className="hidden md:block">
            <img
              src={giftBoxes}
              alt="Pink candy gift boxes with ribbons"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { kpi: "100%", title: "Hygienic", body: "Prepared in certified clean environments" },
            { kpi: "Fresh", title: "Handmade", body: "Crafted daily for peak flavor" },
            { kpi: "Custom", title: "Event Ready", body: "Bespoke packaging for celebrations" },
            { kpi: "Fast", title: "Delivery", body: "Reliable dispatch across locations" },
          ].map((v) => (
            <div key={v.title}>
              <div className="text-primary text-3xl mb-4 font-display italic">{v.kpi}</div>
              <h4 className="font-bold text-sm uppercase mb-2">{v.title}</h4>
              <p className="text-xs text-foreground/50">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display italic text-center mb-16">Sweet Words from Our Customers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { q: "The ILOKA milk toffees are unforgettable. We ordered for our wedding and guests still talk about them.", a: "ABUZARRIN I., Kura" },
              { q: "Gullisuwa is perfect for our shop — fresh every week and the packaging is beautiful.", a: "Usman U Muh'd., Retailer" },
              { q: "Quality and hygiene are top-notch. My kids ask for Alawar Madara every weekend.", a: "Aisha I., Mother" },
            ].map((t, i) => (
              <figure key={i} className="bg-background rounded-2xl p-8 border border-foreground/5">
                <blockquote className="text-foreground/80 italic font-display text-lg leading-snug">“{t.q}”</blockquote>
                <figcaption className="mt-6 text-xs font-bold uppercase tracking-widest text-primary">{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
