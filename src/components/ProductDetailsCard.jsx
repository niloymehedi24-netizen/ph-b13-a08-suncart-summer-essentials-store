"use client";

import { Button } from "@heroui/react";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";

const ProductDetailsCard = ({ brand }) => {
  const animation = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(50px) scale(0.95)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
    },
    config: {
      tension: 120,
      friction: 14,
    },
  });

  return (
    <animated.div
      style={animation}
      className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 m-10"
    >
      <div className="overflow-hidden rounded-2xl relative w-full aspect-square">
        <Image
          src={brand.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={brand.name}
          className="w-full h-125 object-cover hover:scale-105 transition duration-500"
        ></Image>
      </div>

      <div className="flex flex-col justify-center">
        <span className="badge badge-warning mb-4 font-semibold bg-green-400">
          {brand.category}
        </span>

        <h1 className="text-4xl font-extrabold text-gray-800">{brand.name}</h1>

        <p className="text-gray-600 mt-2 text-lg">Brand: {brand.brand}</p>

        <div className="flex items-center gap-5 mt-5">
          <p className="text-3xl font-bold text-orange-500">${brand.price}</p>

          <p className="text-lg">⭐ {brand.rating}</p>
        </div>

        <p className="mt-6 text-gray-600 leading-relaxed">
          {brand.description}
        </p>

        <div className="mt-6">
          <p className="font-semibold">
            Stock Available:
            <span className="text-green-600 ml-2">{brand.stock}</span>
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <Button
            className={
              "w-full font-bold bg-linear-to-r from-yellow-500 via-orange-500 bg-red-500"
            }
          >
            Buy Now
          </Button>

          <Button
            className={
              "w-full font-bold bg-linear-to-r from-cyan-400 via-sky-500 to-blue-600"
            }
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </animated.div>
  );
};

export default ProductDetailsCard;
