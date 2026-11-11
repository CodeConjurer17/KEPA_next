-- 1) New columns on Product
ALTER TABLE "Product"
  ADD COLUMN "stock" INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN "madeToOrder" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN "personalizable" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN "woods" TEXT[],
  ADD COLUMN "colors" TEXT[],
  ADD COLUMN "candleType" TEXT,
  ADD COLUMN "heightCm" DOUBLE PRECISION,
  ADD COLUMN "widthCm" DOUBLE PRECISION,
  ADD COLUMN "depthCm" DOUBLE PRECISION,
  ADD COLUMN "diameterCm" DOUBLE PRECISION;

-- 2) Fill the new lists for the existing items
UPDATE "Product" SET "woods" = '{}';
UPDATE "Product"
SET "colors" = CASE WHEN "color" IS NOT NULL THEN ARRAY["color"] ELSE '{}' END;

CREATE INDEX "Product_stock_idx" ON "Product"("stock");

-- 3) ProductImage table
CREATE TABLE "ProductImage" (
  "id" TEXT NOT NULL,
  "productId" TEXT NOT NULL,
  "position" INTEGER NOT NULL DEFAULT 0,
  "alt" TEXT,
  "path" TEXT NOT NULL,
  "thumbPath" TEXT NOT NULL,
  "width" INTEGER,
  "height" INTEGER,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ProductImage_productId_position_idx"
  ON "ProductImage"("productId", "position");

ALTER TABLE "ProductImage"
  ADD CONSTRAINT "ProductImage_productId_fkey"
  FOREIGN KEY ("productId") REFERENCES "Product"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

-- 4) Keep the old images: every old path becomes a ProductImage row
INSERT INTO "ProductImage" ("id", "productId", "position", "path", "thumbPath")
SELECT gen_random_uuid()::text, p."id", (u.ord - 1)::int, u.img, u.img
FROM "Product" p, unnest(p."images") WITH ORDINALITY AS u(img, ord);

-- 5) Only now drop the old columns
ALTER TABLE "Product"
  DROP COLUMN "color",
  DROP COLUMN "size",
  DROP COLUMN "images";