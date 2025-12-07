"use client";
import ActionCard from "@/components/ActionCard";
import ColorSelectionCard from "@/components/ColorSelectionCard";
import DescriptionCard from "@/components/DescriptionCard";
import IdeaSelectionCard from "@/components/IdeaSelectionCard";
import LogoSelectionCard from "@/components/LogoSelectionCard";
import SuscribePlanCard from "@/components/SuscribePlanCard";
import { Input } from "@/components/ui/input";
import useFormData from "@/hooks/useFormData";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function CreatePage() {
  const params = useSearchParams();
  const title = params.get("title");
  const [step, setStep] = useState(1);
  const { formData, handleForm } = useFormData();
  const [titleLogo, setTitle] = useState<string>(title ? title : "");

  function handleNext(atribute: string, value: any) {
    handleForm(atribute, value);
    setStep(step + 1);
    console.log(formData);
  }
  function handleBack(atribute: string) {
    handleForm(atribute, null);
    setStep(step - 1);
    console.log(formData);
  }
  return (
    <section className="flex mt-56 justify-center items-center w-full">
      {step === 1 ? (
        <ActionCard
          header="Logo Title"
          description="Introduze the title logo"
          step={step}
          backClick={() => console.log("no hay paso atras")}
          continueClick={() => handleNext("title", titleLogo)}
        >
          <Input
            type="text"
            placeholder="Introduze the title logo"
            defaultValue={titleLogo ? titleLogo : ""}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full border-lg shadow-md py-2"
          ></Input>
        </ActionCard>
      ) : step === 2 ? (
        <DescriptionCard
          actionBack={() => handleBack("description")}
          actionNext={(value) => handleNext("description", value)}
        />
      ) : step === 3 ? (
        <ColorSelectionCard
          actionBack={() => handleBack("color")}
          actionNext={(value) => handleNext("color", value)}
        ></ColorSelectionCard>
      ) : step === 4 ? (
        <LogoSelectionCard
          actionBack={() => handleBack("logo")}
          actionNext={(value) => handleNext("logo", value)}
        />
      ) : step === 5 ? (
        <IdeaSelectionCard
          actionBack={() => handleBack("idea")}
          actionNext={(value) => handleNext("idea", value)}
        />
      ) : step === 6 ? (
        <ActionCard
          header="Suscribe Plan"
          description="Select the best plan for you"
          backClick={()=>handleBack("idea")}
          step={6}
        >
          <SuscribePlanCard formData={formData} />
        </ActionCard>
      ) : null}
    </section>
  );
}

export default CreatePage;
