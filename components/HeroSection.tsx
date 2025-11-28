"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

function HeroSection() {
  const [title, setTitle] = useState<string>("");
  return (
    <section>
      <div className="flex flex-col gap-6 items-center text-center mt-32">
        <h2 className="text-6xl font-bold text-red-400">AI Logo Maker</h2>
        <h2 className="text-5xl font-bold ">
          Perfect Logos for App, Business and Websites
        </h2>
        <p className="text-2xl text-gray-500">
          Create stunning logos in seconds with our AI-powered logo maker
        </p>
        <div className="flex gap-4 w-full max-w-2xl">
          <Input
            type="text"
            className="shadow-md px-2 py-7 text-2xl"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Describe your logo"
          ></Input>
          <Link href={"/create?title=" + title}>
            <Button className="bg-red-500 text-2xl py-7 px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
