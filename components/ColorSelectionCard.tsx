"use client";
import { ColorOption, SelectionCardProps } from "@/type";
import ActionCard from "./ActionCard";
import { ColorPalettes } from "@/data/colors";
import { useState } from "react";


function ColorSelectionCard({
  actionBack,
  actionNext,
}: SelectionCardProps) {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>();

  return (
    <ActionCard
      header="Logo Color"
      description="select the color for your logo"
      step={4}
      continueClick={()=>actionNext(selectedColor)}
      backClick={()=>actionBack()}
    >
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
        {ColorPalettes.map((ColorPalettes, index) => (
          <div
            key={index}
            className={`${
              selectedColor == ColorPalettes &&
              "border-2 border-red-400 rounded-md p-2"
            } select-option`}
            onClick={() => setSelectedColor(ColorPalettes)}
          >
            <h3 className="text-2xl font-semibold mb-2">
              {ColorPalettes.name}
            </h3>
            <div className="flex">
              {ColorPalettes.palette.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className="w-full h-10" // Círculos de color
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </ActionCard>
  );
}

export default ColorSelectionCard;
