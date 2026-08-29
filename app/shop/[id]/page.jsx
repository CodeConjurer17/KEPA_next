import { notFound } from "next/navigation";
import { getProductById, getAllProducts } from "@/lib/products";
import ItemDetail from "../../../components/layout/ItemDetail";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

export const revalidate = 60;
// Pre-render all product pages at build time — fast first load,
// no server round-trip needed when a card is clicked.
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return { title: "Izdelek ni najden" };
  return {
    title: `${product.title} | Ustvarjalnica KEPA`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <>
        <Header/>
      <ItemDetail product={product} />
      <Footer/>
    </>
  );
}