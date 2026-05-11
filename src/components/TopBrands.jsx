import React from "react";
import BrandCard from "./BrandCard";
import SummerCareTips from "./SummerCareTips";

const TopBrands = async () => {
  const res = await fetch(
    "https://ph-b13-a08-suncart-summer-essential.vercel.app/data.json",
  );
  const data = await res.json();
  const topBrands = data.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto">
      <SummerCareTips></SummerCareTips>
      <h1 className="text-3xl font-bold mt-5">Popular Products</h1>
      <div className="grid grid-cols-3 gap-5">
        {topBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
