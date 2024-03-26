export interface ISelectedProps {
  selected: string[];
  onSelectedChange: (newOption: string, name?: string) => void;
  name?: string;
  value?: string | null;
}
