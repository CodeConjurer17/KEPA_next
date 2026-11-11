export type StockStatus = "made-to-order" | "in-stock" | "low" | "sold-out";

// Show the "last pieces" warning at or below this number.
export const LOW_STOCK_THRESHOLD = 2;

export interface StockInfo {
  stock: number;
  madeToOrder: boolean;
}

export function getStockStatus({ stock, madeToOrder }: StockInfo): StockStatus {
  if (madeToOrder) return "made-to-order";
  if (stock <= 0) return "sold-out";
  if (stock <= LOW_STOCK_THRESHOLD) return "low";
  return "in-stock";
}

export function getStockLabel(info: StockInfo): string {
  const status = getStockStatus(info);

  if (status === "made-to-order") return "Izdelano po naročilu";
  if (status === "sold-out") return "Razprodano";
  if (info.stock === 1) return "Na voljo še 1 kos";
  if (status === "low") return `Na voljo še ${info.stock} kosa`;
  return `Na voljo: ${info.stock} kosov`;
}

export function isAvailable(info: StockInfo): boolean {
  return info.madeToOrder || info.stock > 0;
}