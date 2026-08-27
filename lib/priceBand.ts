export type PriceBand = "0-10" | "10-20" | "20-30" | "30+";

export function getPriceBand(price: number): PriceBand {
  if (price < 10) return "0-10";
  if (price < 20) return "10-20";
  if (price < 30) return "20-30";
  return "30+";
}