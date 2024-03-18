import React, { useState, useRef, useEffect } from "react";
import { BlockPicker, ColorResult } from "react-color";
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  return (
    <div className="pallete-wrapper" ref={containerRef}>
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
          <BlockPicker
            color={color}
            onChange={onChange}
            onChangeComplete={handleClose}
            triangle="hide"
            colors={[
              "#f2eeee",
              "#009300",
              "#c20303",
              "#c2af03",
              "#000000",
              "#014dff",
              "#6CABDD",
              "#ff7620",
              "#4f0e72",
              "#813106",
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
