import React, { useState, FC, useEffect } from "react";
import { ISelectedProps } from "./type";

const Selected: FC<ISelectedProps> = ({
  selected,
  onSelectedChange,
  name,
  value,
}) => {
  const [selectedOption, setSelectedOption] = useState(selected[0]);

  useEffect(() => {
    const index = selected.findIndex((item) => item === value);
    if (index !== -1) {
      setSelectedOption(selected[index]);
    }
  }, [selected, value]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelectedChange(option, name);
  };
  return (
    <div className="flex justify-center bg-gray-200 rounded-md beautiful">
      {selected.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors 
             ${
               selectedOption === option
                 ? "bg-blue-500 text-white"
                 : "bg-gray-200 text-gray-800"
             }`}
          onClick={() => handleOptionClick(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Selected;
