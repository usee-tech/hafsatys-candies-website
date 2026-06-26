import { Link } from "@tanstack/react-router";
import { ADDRESS, EMAIL, FACEBOOK, INSTAGRAM, TIKTOK, WHATSAPP_DISPLAY, waLink } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-foreground/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="text-xl font-bold text-primary">HAFSATYS CANDIES CO</div>
          <p className="text-sm text-foreground/60 max-w-sm leading-relaxed">
            Handcrafted Northern Nigerian confectionery — milk toffees, gullisuwa, and
            traditional sweets prepared with care from Gadon Qaya, Kano.
          </p>
          <p className="text-sm text-foreground/50">{ADDRESS}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-primary">Collection</Link></li>
            <li><Link to="/about" className="hover:text-primary">Our Story</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">Reach Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={waLink("Hello Hafsatys!")} target="_blank" rel="noreferrer" className="hover:text-primary">{WHATSAPP_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-primary break-all">{EMAIL}</a></li>
            <li className="flex gap-4 pt-2 text-xs font-bold uppercase tracking-widest text-foreground/60">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
              <a href={TIKTOK} target="_blank" rel="noreferrer" className="hover:text-primary">TikTok</a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-primary">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-foreground/5 flex flex-col sm:flex-row gap-3 sm:justify-between text-[10px] uppercase tracking-[0.2em] text-foreground/30">
        <span>© {new Date().getFullYear()} Hafsatys Candies Co. All rights reserved.</span>
        <span>Crafted in Gadon Qaya</span>
      </div>
    </footer>
  );
}
