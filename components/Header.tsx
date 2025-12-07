"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignInButton, UserAvatar, useUser } from "@clerk/nextjs";

function Header() {
  const user = useUser();
  return (
    <div className="flex justify-between px-10 lg:px-32 xl:px-48 2xl:px-56 py-5 shadow-md">
      <Link href="/">
        <Image width={180} height={100} alt="logo-img" src="/logo.svg"></Image>
      </Link>
      <div className="flex gap-3 items-center">
        <Link href="/create">
          <Button className="bg-red-500">Get Stared</Button>
        </Link>
        {user.isSignedIn ? (
          <UserAvatar></UserAvatar>
        ) : (
          <SignInButton mode="modal">
            <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
              Sign In
            </Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Header;
