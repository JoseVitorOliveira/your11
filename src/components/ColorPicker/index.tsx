import React from "react";
import { SketchPicker, ColorResult } from "react-color";

interface ColorPickerProps {
  color: string;
  onChange: (color: ColorResult) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  return <SketchPicker color={color} onChange={onChange} />;
};

export default ColorPicker;
