export type LogoStyle = {
  name: string;
  src: string;
  prompt: string;
};
export type ColorOption = {
  name: string;
  palette: string[];
  prompt: string;
};

export interface SelectionCardProps {
  actionNext: (value: any) => void;
  actionBack: () => void;
}
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  buttonText: string;
}

export interface AiData {
  title?: string;
  description?: string;
  color?: ColorOption;
  logo?: LogoStyle;
  idea?: string;
}
