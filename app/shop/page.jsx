import { Suspense } from "react"
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import Items from "../../components/layout/Items";
import Faq from "../../components/layout/Faq";
import Divider from "../../components/layout/Divider";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default async function Shop() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Header/>
      <Suspense fallback={null}>
        <Items products={products} />
      </Suspense>
      <Divider/>
      <Faq />
      <Footer/>
    </>
  );
}