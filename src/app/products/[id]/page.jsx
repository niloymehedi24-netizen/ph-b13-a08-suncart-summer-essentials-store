import ProductDetailsCard from "@/components/ProductDetailsCard";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://ph-b13-a08-suncart-summer-essential.vercel.app/data.json",
  );
  const brands = await res.json();

  const brand = brands.find((b) => b.id == id);

  return (
    <div>
      <ProductDetailsCard brand={brand}></ProductDetailsCard>
    </div>
  );
};

export default ProductDetailsPage;
