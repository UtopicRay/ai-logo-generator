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
