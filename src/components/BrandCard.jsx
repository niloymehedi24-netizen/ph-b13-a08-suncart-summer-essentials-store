import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const BrandCard = ({ brand }) => {
  console.log(brand);
  return (
    <Card>
      <div>
        <Image
          src={brand.image}
          height={300}
          width={300}
          alt={brand.name}
        ></Image>
      </div>
    </Card>
  );
};

export default BrandCard;
