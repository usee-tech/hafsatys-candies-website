import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/products";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Collection" },
  { to: "/about", label: "Our Story" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight text-primary">
          HAFSATYS <span className="text-foreground/40 font-light">CANDIES</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-primary transition-colors"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={waLink("Hi Hafsatys Candies! I'd like to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="bg-foreground text-background px-6 py-2.5 rounded-full hover:bg-primary transition-all"
          >
            Order via WhatsApp
          </a>
        </div>
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-foreground/5 bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-wider"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink("Hi Hafsatys Candies! I'd like to place an order.")}
              target="_blank"
              rel="noreferrer"
              className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium text-center"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
