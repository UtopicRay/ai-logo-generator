import { ColorOption, LogoStyle } from "@/type";
import { useState } from "react";

interface FormData {
  title?: string;
  description?: string;
  color?: ColorOption;
  logo?: LogoStyle;
}
export default function useFormData(title?: string) {
  const [formData, setFormData] = useState<FormData>({
    title: title || "",
    description: "",
    color: undefined,
    logo: undefined,
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
