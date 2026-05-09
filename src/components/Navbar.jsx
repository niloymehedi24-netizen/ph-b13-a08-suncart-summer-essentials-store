"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2 bg-yellow-100">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={45}
            height={45}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-xl text-yellow-500">
            Sun<span className="text-black">Cart</span>
          </h3>
        </div>

        <ul className="flex items-center gap-5 text-sm font-bold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center font-bold text-sm">
            <li>
              <Link href={"/signup"}>Login</Link>
            </li>
            <li>
              <Link href={"/signin"}>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
