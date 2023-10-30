import PromoBanner from "./components/promo-banner";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import Sectiontitle from "./components/section-title";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PromoBanner 
      src="/banner-home-01.png"
      alt="Até 55% de descontos esse mês!"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <Sectiontitle>Ofertas</Sectiontitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner 
      src="/banner-home-02.png"
      alt="Até 55% de descontos em mouses!"
      />

      <div className="mt-8">
        <Sectiontitle>Teclados</Sectiontitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
