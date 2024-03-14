import React from "react";
import { GithubPicker, ColorResult } from "react-color";

interface ColorPickerProps {
  color: string;
  onChange: (color: ColorResult) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  return <GithubPicker color={color} onChange={onChange} />;
};

export default ColorPicker;
