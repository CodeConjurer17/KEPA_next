import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import CTA from "../components/layout/CTA";
import NewCarousel from "../components/layout/NewCarousel";
import About from "../components/layout/About";
import Faq from "../components/layout/Faq";
import Comments from "../components/layout/Comments";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default async function Home() {
  const newest = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return (
    <>
      <Header/>
      <CTA />
      <NewCarousel items={newest} />
      <Faq />
      <Comments/>
      <About />
      <Footer/>
    </>
  );
}