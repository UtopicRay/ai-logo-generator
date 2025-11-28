import React, { useState } from "react";
import ActionCard from "./ActionCard";
import { logosData } from "@/data/logoStyle";
import Image from "next/image";
import { LogoStyle, SelectionCardProps } from "@/type";

function LogoSelectionCard({ actionBack, actionNext }: SelectionCardProps) {
  const [selectedLogo, setSelectedLogo] = useState<LogoStyle | null>();
  return (
    <ActionCard
      step={3}
      header="Logo Design"
      description="Select the design for your logo"
      continueClick={()=>actionNext(selectedLogo)}
      backClick={()=>actionBack()}
    >
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
        {logosData.map((logo, index) => (
          <div
            onClick={() => setSelectedLogo(logo)}
            key={index}
            className={`${
              selectedLogo == logo && "border-2 border-red-400 rounded-md"
            } select-option`}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={300}
              height={200}
              className="object-cover h-[150px]  w-full rounded-md shadow-md"
            ></Image>
          </div>
        ))}
      </div>
    </ActionCard>
  );
}

export default LogoSelectionCard;
