"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const MyProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);

  return (
    <div className="flex items-center justify-center m-10">
      <Card className="max-w-96 mx-auto flex flex-col items-center">
        <Avatar className="h-30 w-30">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="font-bold text-xl">{user?.name}</h2>
        <p className="text-gray-600">{user?.email}</p>

        <UpdateUserModal></UpdateUserModal>
      </Card>
    </div>
  );
};

export default MyProfilePage;
