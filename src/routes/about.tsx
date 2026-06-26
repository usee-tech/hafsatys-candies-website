import { createFileRoute } from "@tanstack/react-router";
import craftImage from "@/assets/gallery-craft.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Hafsatys Candies Co" },
      { name: "description", content: "Hafsatys Candies Co is a Northern Nigerian confectionery brand from Gadon Qaya producing premium milk toffees and traditional sweets." },
      { property: "og:title", content: "Our Story — Hafsatys Candies Co" },
      { property: "og:description", content: "Premium handcrafted candies from Gadon Qaya, Kano." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-display italic leading-tight mb-8">
            A family kitchen, <br />grown into a <span className="text-primary">boutique</span>.
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
            Hafsatys Candies Co was born in a small kitchen in Gadon Qaya, Kano —
            from a love for traditional Northern Nigerian sweets and a belief that
            every candy should be made with care, fresh ingredients, and pride.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img src={craftImage} alt="Artisan hands wrapping candy" loading="lazy" width={896} height={1152} className="rounded-3xl w-full aspect-[4/5] object-cover" />
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-display italic mb-3">Our Vision</h2>
              <p className="text-foreground/70 leading-relaxed">
                To become Northern Nigeria's most trusted boutique confectionery — celebrated
                for taste, hygiene, and packaging that turns every candy into a small gift.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-display italic mb-3">Our Mission</h2>
              <p className="text-foreground/70 leading-relaxed">
                Preserve traditional candy recipes while elevating them with modern care.
                Make ordering simple. Deliver sweetness reliably to families, events, and resellers.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-display italic mb-3">What We Stand For</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {["Hygiene first", "Fresh, real ingredients", "Hand-finished packaging", "Honest pricing", "Reliable delivery", "Community first"].map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" /> {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
