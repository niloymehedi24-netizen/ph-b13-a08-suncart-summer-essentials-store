import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { FcRating } from "react-icons/fc";
import { IoIosPricetags } from "react-icons/io";
import React from "react";
import Link from "next/link";

const BrandCard = ({ brand }) => {
  console.log(brand);
  return (
    <Card className=" max-w-7xl mx-auto border rounded-xl m-10">
      <div className="relative w-full aspect-square">
        <Image
          src={brand.image}
          fill
          alt={brand.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl"
        ></Image>
      </div>
      <div>
        <h2 className="font-medium">{brand.name}</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <p className="font-medium">
            <FcRating></FcRating>
          </p>
          <p className="font-medium">{brand.rating}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="font-medium">
            <IoIosPricetags></IoIosPricetags>
          </p>
          <p className="font-bold text-xl text-green-600">${brand.price}</p>
        </div>
      </div>
      <Link href={`/products/${brand.id}`}>
        <Button
          className={
            "w-full font-bold bg-linear-to-r from-yellow-500 via-orange-500 bg-red-500"
          }
        >
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default BrandCard;
