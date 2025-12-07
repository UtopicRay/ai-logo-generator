"use client";
import { PricingData } from "@/data/pricing";
import { Button } from "./ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { AiData } from "@/type";

function SuscribePlanCard({ formData }: { formData: AiData |null}) {
  const user = useUser();
  useEffect(() => {
    if (formData && typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10 w-full h-full">
      {PricingData.map((plan) => (
        <div
          key={plan.id}
          className="border p-9 rounded-lg flex flex-col gap-10 w-full lg:max-w-lg h-full max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            {plan.name}
          </h2>
          <p className="text-3xl font-bold text-center text-red-500">
            {plan.price}
          </p>
          <ul className="space-y-8 text-gray-600">
            {plan.features.map((feature, index) => (
              <li key={index} className="list-disc ml-5 font-bold text-2xl">
                {feature}
              </li>
            ))}
          </ul>
          {user.isSignedIn ? (
            <Button className="p-4 bg-red-500 text-white font-medium rounded-md w-full hover:bg-red-600 transition-colors duration-300">
              {plan.buttonText}
            </Button>
          ) : (
            <SignInButton
              mode="modal"
              forceRedirectUrl={"/generate-logo?type=" + plan.id}
            >
              <Button className="p-4 bg-red-500 text-white font-medium rounded-md w-full hover:bg-red-600 transition-colors duration-300">
                {plan.buttonText}
              </Button>
            </SignInButton>
          )}
        </div>
      ))}
    </div>
  );
}

export default SuscribePlanCard;
