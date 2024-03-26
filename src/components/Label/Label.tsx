import React, { FC } from "react";

const Label: FC<ILabelProps> = ({ text, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-amber-50"
    >
      {text}
    </label>
  );
};

export default Label;
