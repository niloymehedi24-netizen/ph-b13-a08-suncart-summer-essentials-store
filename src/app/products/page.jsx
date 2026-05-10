import BrandCard from "@/components/BrandCard";
import React from "react";

const AllProductsPage = async () => {
  const res = await fetch(
    "https://ph-b13-a08-suncart-summer-essential.vercel.app/data.json",
  );
  const brands = await res.json();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bold text-3xl m-5">All Products</h1>
      <div className="grid grid-cols-3 gap-5">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
