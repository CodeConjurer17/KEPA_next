import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import fs from "fs";
import path from "path";
import type { ProductData } from "../models/Product";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const raw: ProductData[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
);

async function main() {
  for (const p of raw) {
    await prisma.product.create({
      data: {
        title: p.title,
        price: p.price,
        oldPrice: p.oldPrice ?? null,
        sale: p.sale,
        type: p.top,
        occasions: [],
        color: p.color,
        size: p.size ?? null,
        description: p.description ?? null,
        images: p.image ? [p.image] : [],
      },
    });
  }
  console.log(`Migrated ${raw.length} products.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());