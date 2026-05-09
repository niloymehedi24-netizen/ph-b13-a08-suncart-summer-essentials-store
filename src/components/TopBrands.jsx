import React from "react";
import BrandCard from "./BrandCard";

const TopBrands = async () => {
  const res = await fetch(
    "https://ph-b13-a08-suncart-summer-essential.vercel.app/data.json",
  );
  const data = await res.json();
  const topBrands = data.slice(0, 6);
  console.log(topBrands);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mt-5">Top Brands</h1>
      <div>
        {topBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
