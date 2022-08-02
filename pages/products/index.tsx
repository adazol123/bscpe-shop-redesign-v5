import React, { ReactElement } from "react";
import ProductCarousel from "../../components/Layouts/Carousel/ProductCarousel";
import ProductContext from "../../components/Layouts/Home/ProductContext";
import Layout from "../../components/Layouts/layout";
import ProductListFull from "../../components/Layouts/Products/ProductListFull";
import ProductListGrid from "../../components/Layouts/Products/ProductListGrid";
import DropdownRounded from "../../components/UI/Button/Dropdown/DropdownRounded";
import ButtonRounded from "../../components/UI/Button/Rounded/ButtonRounded";

const Products = () => {
  return (
    <section id="product" className="scroll-py-10">
      <ProductCarousel />
      <div className="flex gap-1 py-2 px-4 sticky top-[var(--nav-height)] bg-white z-10 mb-2 shadow">
        <ButtonRounded active />
        <DropdownRounded label="Men" />
        <DropdownRounded label="Women" />
        <DropdownRounded label="Kids" />
      </div>
      <ProductListFull />
      <ProductContext />
    </section>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};

export default Products;
