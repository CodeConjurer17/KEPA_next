import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function getAllProducts() {
  return prisma.product.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getProductById(id: string) {
  return prisma.product.findUnique({ where: { id } });
}

export async function getProductsByType(type: string) {
  return prisma.product.findMany({ where: { type } });
}

export async function getProductsByOccasion(occasion: string) {
  return prisma.product.findMany({ where: { occasions: { has: occasion } } });
}

export async function getSaleProducts() {
  return prisma.product.findMany({ where: { sale: true } });
}