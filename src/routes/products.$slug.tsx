import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products, waLink } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Hafsatys Candies` : "Product";
    const description = p?.tagline ?? "Handcrafted Hafsatys candy.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
        ...(p ? [{ property: "og:image", content: p.image }] : []),
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="text-3xl font-display italic">Sweet not found</h1>
      <Link to="/products" className="mt-6 inline-block text-primary underline">Back to collection</Link>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/products" className="text-xs uppercase tracking-widest text-foreground/50 hover:text-primary mb-8 inline-block">
            ← Collection
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover rounded-3xl"
              />
              {product.badge && (
                <span className="absolute top-6 right-6 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="space-y-8 lg:py-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{product.subtitle}</p>
                <h1 className="text-4xl md:text-5xl font-display italic mb-4">{product.name}</h1>
                <p className="text-lg text-foreground/70 italic font-display">{product.tagline}</p>
              </div>
              <p className="text-foreground/80 leading-relaxed">{product.description}</p>
              <dl className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-foreground/10">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2">Ingredients</dt>
                  <dd className="text-sm text-foreground/70">{product.ingredients}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2">Packaging</dt>
                  <dd className="text-sm text-foreground/70">{product.packaging}</dd>
                </div>
              </dl>
              <a
                href={waLink(`Hi Hafsatys! I'd like to order ${product.name}.\n\nQuantity: \nDelivery address: `)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                Order via WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display italic mb-12">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((r) => (
              <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="group">
                <img
                  src={r.image}
                  alt={r.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] object-cover rounded-2xl mb-4 group-hover:scale-[1.02] transition-transform"
                />
                <h3 className="text-lg font-semibold">{r.name}</h3>
                <p className="text-sm text-foreground/50">{r.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
