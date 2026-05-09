import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/banner.jpg')] h-screen w-full bg-cover bg-no-repeat bg-center flex items-center shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Summer Sale 50% OFF
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Discover Your Summer Essentials.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-yellow-500 via-orange-500 bg-red-500">
                Hot Deals 🔥
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
