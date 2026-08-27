// Single source of truth for filter values

export const PRODUCT_TYPES = [
  "Uhani",
  "Broške",
  "Voščilnice",
  "Namizni okraski",
  "Darila"
] as const;

export type ProductType = (typeof PRODUCT_TYPES)[number];

export const OCCASIONS = [
  "Rojstni dan",
  "Darila za učitelje",
  "Noč čarovnic",
  "Božič",
  "Birma",
  "Valentinovo",
] as const;

export type Occasion = (typeof OCCASIONS)[number];