import { prisma } from "../lib/prisma";

async function main() {
  const products = await prisma.product.findMany();

  for (const p of products) {
    const newImages = p.images.map((img) =>
      img.replace(/\.(jpe?g|png)$/i, ".webp")
    );

    if (JSON.stringify(newImages) !== JSON.stringify(p.images)) {
      await prisma.product.update({
        where: { id: p.id },
        data: { images: newImages },
      });
      console.log(`${p.title}: updated`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => process.exit());