import iloka from "@/assets/product-iloka.jpeg";
import gullisuwa from "@/assets/product-gullisuwa.jpg";
import alawar from "@/assets/product-alawar.jpg";
import albishir from "@/assets/product-albishir.jpg";
import tsami from "@/assets/product-tsami.jpg";

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  ingredients: string;
  packaging: string;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "milk-toffee-iloka",
    name: "Milk Toffee (ILOKA)",
    subtitle: "Silky, caramelized classic",
    tagline: "Our signature slow-cooked milk toffee.",
    description:
      "ILOKA is our signature milk toffee — slowly cooked until the milk caramelizes into a deep, buttery sweetness. Each piece is hand-wrapped to lock in freshness and aroma.",
    ingredients: "Fresh milk, pure cane sugar, butter, natural vanilla.",
    packaging: "Available in 100g, 250g, 500g and 1kg party packs.",
    image: iloka,
    badge: "Bestseller",
  },
  {
    slug: "gullisuwa",
    name: "GULLISUWA",
    subtitle: "Traditional milky delight",
    tagline: "Crisp on the outside, soft and milky within.",
    description:
      "GULLISUWA are golden, lightly sweetened milk balls — a beloved Northern Nigerian treat. Crispy outside, soft and milky inside, perfect with tea or as a daily snack.",
    ingredients: "Wheat flour, fresh milk, sugar, eggs, a hint of nutmeg.",
    packaging: "Sold by weight: 250g sealed packs and bulk event trays.",
    image: gullisuwa,
  },
  {
    slug: "alawar-madara",
    name: "Milk Candy (ALAWAR MADARA)",
    subtitle: "Rich, melt-in-your-mouth milk",
    tagline: "Pure milk pressed into a soft, melting square.",
    description:
      "ALAWAR MADARA is a traditional milk candy made from concentrated fresh milk and sugar — delicately set into squares that melt on the tongue.",
    ingredients: "Concentrated fresh milk, pure sugar, a pinch of cinnamon.",
    packaging: "100g foil packs and 500g gift jars.",
    image: alawar,
  },
  {
    slug: "albishir",
    name: "ALBISHIR",
    subtitle: "Honeyed celebration sweet",
    tagline: "A festive favorite for naming days and weddings.",
    description:
      "ALBISHIR is our golden celebration candy — lightly honeyed, gently spiced, and shaped for sharing. Long associated with happy news, it is a fixture at weddings, naming ceremonies, and family gatherings.",
    ingredients: "Sugar, honey, butter, ground groundnut, natural spices.",
    packaging: "250g family packs and event-ready 1kg trays.",
    image: albishir,
  },
  {
    slug: "tsami-gaye",
    name: "TSAMI GAYE",
    subtitle: "Tangy tamarind candy",
    tagline: "Sweet, sour, and impossible to put down.",
    description:
      "TSAMI GAYE balances bright tamarind tang with a deep candy sweetness. A grown-up flavor that brings nostalgia in every bite.",
    ingredients: "Tamarind pulp, sugar, salt, a touch of pepper.",
    packaging: "Individually wrapped, sold in 100g and 250g packs.",
    image: tsami,
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const WHATSAPP_NUMBER = "2347088649669";
export const WHATSAPP_DISPLAY = "+234 708 864 9669";
export const EMAIL = "hafsatbelloabubakar893@gmail.com";
export const ADDRESS = "Gadon Qaya, Kano, Nigeria";
export const INSTAGRAM = "https://www.instagram.com/";
export const TIKTOK = "https://www.tiktok.com/";
export const FACEBOOK = "https://www.facebook.com/";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
