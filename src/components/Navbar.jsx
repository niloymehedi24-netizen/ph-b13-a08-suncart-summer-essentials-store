"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

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
          {!user && (
            <ul className="flex items-center font-bold text-sm gap-4">
              <li>
                <Link href={"/signin"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>LogOut</Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex gap-2">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                variant="danger"
                className={"font-semibold"}
                size="sm"
              >
                LogOut
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
