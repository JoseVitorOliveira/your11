import React, { useState } from "react";
import { GithubPicker, ColorResult } from "react-color";
import "./styles.css";

interface ColorPickerProps {
  color: string;
  label: string;
  onChange: (color: ColorResult) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  onChange,
  label,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  return (
    <div className="pallete-wrapper">
      <div className="color-label">
        <label>{label}:</label>
        <div
          className="pallete-color"
          style={{ backgroundColor: color }}
          onClick={handleClick}
        ></div>
      </div>
      {showPicker && (
        <div className="pallete-color-picker">
          <GithubPicker
            color={color}
            onChange={onChange}
            onChangeComplete={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
