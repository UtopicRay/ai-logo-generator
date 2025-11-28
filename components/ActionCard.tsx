"use client";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Card, CardAction, CardDescription, CardHeader } from "./ui/card";

interface ActionCardProps {
  header: string;
  description: string;
  step: number;
  children?: React.ReactNode;
  continueClick: () => void;
  backClick: () => void;
}
function ActionCard({
  header,
  description,
  children,
  step,
  continueClick,
  backClick,
}: ActionCardProps) {
  return (
    <Card className="w-full max-w-lg lg:max-w-4xl xl:max-w-6xl p-4">
      <CardHeader className="text-4xl font-bold text-red-400">
        {header}
      </CardHeader>
      <CardDescription className="text-xl text-gray-500 mb-4">
        {description}
      </CardDescription>
      {children}
      <CardAction className="flex justify-between items-center w-full">
        {step > 1 && (
          <Button
            variant="outline"
            onClick={() => backClick()}
            className="cursor-pointer inline-flex gap-2 item-center"
          >
            {" "}
            <IconArrowNarrowLeft stroke={2} /> Previous
          </Button>
        )}
        <Button className="bg-red-500 cursor-pointer" onClick={() => continueClick()}>
          {" "}
          <IconArrowNarrowRight stroke={2}  />{" "}
          Continue
        </Button>
      </CardAction>
    </Card>
  );
}

export default ActionCard;
