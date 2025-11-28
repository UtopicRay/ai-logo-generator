import { SelectionCardProps } from "@/type";
import ActionCard from "./ActionCard";
import { Input } from "./ui/input";
import { useState } from "react";

function DescriptionCard({ actionBack, actionNext }: SelectionCardProps) {
  const [description, setDescription] = useState<string>("");
  return (
    <ActionCard
      header="Logo Description"
      description="Introduze the description logo"
      step={2}
      backClick={() => actionBack()}
      continueClick={() => actionNext(description)}
    >
      <Input
        type="text"
        placeholder="Introduze the description logo"
        className="w-full border-lg shadow-md py-2"
        onChange={(event) => setDescription(event.target.value)}
      ></Input>
    </ActionCard>
  );
}

export default DescriptionCard;
