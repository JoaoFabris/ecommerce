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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de descontos esse mês!"
      />
      <div className="px-5">
        <Categories />
      </div>
      <div>
        <Sectiontitle>Ofertas</Sectiontitle>
        <ProductList products={deals} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de descontos em mouses!"
        />
      </div>

      <div>
        <Sectiontitle>Teclados</Sectiontitle>
        <ProductList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 20% de descontos em fones!"
        />
      </div>

      <div>
        <Sectiontitle>Mouses</Sectiontitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
