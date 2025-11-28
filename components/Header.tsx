import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between px-10 lg:px-32 xl:px-48 2xl:px-56 py-5 shadow-md">
      <Link href="/">
        <Image width={180} height={100} alt="logo-img" src="/logo.svg"></Image>
      </Link>
      <Link href="/create">
        <Button className="bg-red-500">Get Stared</Button>
      </Link>
    </div>
  );
}

export default Header;
