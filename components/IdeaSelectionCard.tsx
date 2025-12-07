"use client";
import { SelectionCardProps } from "@/type";
import { useState } from "react";
import ActionCard from "./ActionCard";
import { LogoIdeas } from "@/data/ideas";

function IdeaSelectionCard({ actionBack, actionNext }: SelectionCardProps) {
  const [selectedIdea, setSelectedIdea] = useState<string>();
   return (
    <ActionCard
      step={3}
      header="Select your Design Idea"
      description="Choose one of the following design ideas to inspire your logo creation."
      continueClick={() => actionNext(selectedIdea)}
      backClick={() => actionBack()}
    >
      <div className="flex flex-wrap gap-5">
        {LogoIdeas.map((idea, index) => (
          <div
            onClick={() => setSelectedIdea(idea)}
            key={index}
            className={`${
              selectedIdea == idea && "border-2 border-red-400 "
            } select-option rounded-md p-2 border-gray-500 border-2`}
          >
            {idea}
          </div>
        ))}
      </div>
    </ActionCard>
  );
}

export default IdeaSelectionCard;
