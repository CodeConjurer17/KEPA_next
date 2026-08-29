import { Suspense } from "react"
import { prisma } from "@/lib/prisma";
import Items from "../../components/layout/Items";
import Faq from "../../components/layout/Faq";
import Divider from "../../components/layout/Divider";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export const revalidate = 60;

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