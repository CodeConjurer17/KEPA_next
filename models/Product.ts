export type PriceBand = "0-50" | "50-100" | "100+";

// Shape of each entry in data/products.json — priceBand is NOT stored here, it's derived.
export interface ProductData {
  id: number;
  title: string;
  price: number;
  oldPrice: number | null;
  top: "Nakit" | "Dekoracija" | "Darila";
  color: string;
  size: "S" | "M" | "L";
  sale: boolean;
  description?: string;
  image?: string; // e.g. "/assets/products/nakit/1.jpg" — omit to show placeholder
}

// Shape used throughout the app — includes the computed priceBand.
export interface Product extends ProductData {
  priceBand: PriceBand;
}