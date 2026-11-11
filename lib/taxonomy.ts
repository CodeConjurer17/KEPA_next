// Single source of truth for filter values and form options.
// The admin project should use the same lists (copy this file over when it changes).

export const PRODUCT_TYPES = [
  "Svečniki",
  "Okraski za smrečico",
  "Viseče dekoracije",
  "Namizne dekoracije",
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

// Edit this list to match the woods you actually use.
export const WOODS = [
  "Breza",
  "Topol",
  "Okoume",
  "Mix"
] as const;
export type Wood = (typeof WOODS)[number];

export const COLORS = [
  "Naravna",
  "Bela",
  "Rdeča",
  "Zelena",
  "Zlata",
  "Srebrna",
  "Črna",
  "Modra",
  "Večbarvna",
] as const;
export type Color = (typeof COLORS)[number];

export const CANDLE_TYPES = [
  "Čajna svečka",
  "Debela sveča",
  "Dolga sveča",
] as const;
export type CandleType = (typeof CANDLE_TYPES)[number];

export const MAX_IMAGES_PER_PRODUCT = 8;