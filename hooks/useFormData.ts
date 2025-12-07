import { AiData } from "@/type";
import { useState } from "react";

export default function useFormData(title?: string) {
  const [formData, setFormData] = useState<AiData>({
    title: title || "",
    description: "",
    color: undefined,
    logo: undefined,
    idea: undefined,
  });

  function handleForm(atribute: string, value: any) {
    try {
      setFormData((prev) => ({ ...prev, [atribute]: value }));
    } catch (err) {
      console.log(err.message);
    }
  }

  return { formData, handleForm };
}
