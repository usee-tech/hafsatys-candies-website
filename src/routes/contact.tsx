import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ADDRESS, EMAIL, FACEBOOK, INSTAGRAM, TIKTOK, WHATSAPP_DISPLAY, waLink } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hafsatys Candies Co" },
      { name: "description", content: "Reach Hafsatys Candies Co via WhatsApp, Instagram, TikTok, Facebook, email, or visit us in Gadon Qaya, Kano." },
      { property: "og:title", content: "Contact — Hafsatys Candies Co" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      phone: form.get("phone"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `Hi Hafsatys! My name is ${parsed.data.name} (${parsed.data.phone}).\n\n${parsed.data.message}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-display italic mb-6">Let's Talk Sweets.</h1>
          <p className="text-foreground/70 leading-relaxed mb-10 max-w-md">
            Orders, wholesale, event packaging, or just a question — we'd love to hear from you.
            WhatsApp is the fastest way to reach us.
          </p>

          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">WhatsApp / Phone</dt>
              <dd><a className="text-lg hover:text-primary" href={waLink("Hello Hafsatys!")} target="_blank" rel="noreferrer">{WHATSAPP_DISPLAY}</a></dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Email</dt>
              <dd><a className="text-lg hover:text-primary break-all" href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">Address</dt>
              <dd className="text-lg">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2">Social</dt>
              <dd className="flex gap-3 flex-wrap">
                {[
                  { label: "Instagram", href: INSTAGRAM },
                  { label: "TikTok", href: TIKTOK },
                  { label: "Facebook", href: FACEBOOK },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-foreground/10 text-xs font-bold uppercase tracking-widest hover:bg-secondary">
                    {s.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="bg-card rounded-3xl p-8 md:p-10 border border-foreground/5 space-y-6">
          <h2 className="text-2xl font-display italic">Send a message</h2>
          <Field label="Full name" name="name" error={errors.name} />
          <Field label="Phone number" name="phone" type="tel" error={errors.phone} />
          <Field label="Your message" name="message" textarea error={errors.message} />
          <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold hover:bg-foreground transition-colors">
            Send via WhatsApp
          </button>
          <p className="text-xs text-foreground/50 text-center">Your message will open in WhatsApp with our team.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea, error }: {
  label: string; name: string; type?: string; textarea?: boolean; error?: string;
}) {
  const cls = "w-full px-4 py-3 rounded-xl border border-foreground/10 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
  return (
    <div>
      <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 block mb-2">{label}</label>
      {textarea ? (
        <textarea name={name} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} className={cls} />
      )}
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
