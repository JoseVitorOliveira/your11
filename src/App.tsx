import { useRef, useState } from "react";
import FootballField from "./components/FootballField";
import ColorPicker from "./components/ColorPicker";
import { exportAsImage } from "./utils/exportAsImage";

declare module "./utils/exportAsImage" {
  export function exportAsImage(element: HTMLElement, fileName: string): void;
}

function App() {
  const [formation, setFormation] = useState("4-3-3");

  const [primaryColor, setPrimaryColor] = useState("#77ff00");
  const [secondaryColor, setSecondaryColor] = useState("#ffffff");

  const handleFormationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormation(e.target.value);
  };

  const handlePrimaryColorChange = (color: { hex: string }) => {
    setPrimaryColor(color.hex);
  };

  const handleSecondaryColorChange = (color: { hex: string }) => {
    setSecondaryColor(color.hex);
  };

  const exportRef = useRef(null);

  return (
    <>
      <div>
        <label htmlFor="formation">Select Formation:</label>
        <select
          id="formation"
          value={formation}
          onChange={handleFormationChange}
        >
          <option value="4-4-2">4-4-2</option>
          <option value="4-3-3">4-3-3</option>
        </select>
      </div>
      <div>
        <label>Primary Color:</label>
        <div
          style={{
            display: "inline-block",
            width: "30px",
            height: "30px",
            backgroundColor: primaryColor,
            cursor: "pointer",
          }}
          onClick={() => setPrimaryColor(primaryColor)}
        />
        <ColorPicker color={primaryColor} onChange={handlePrimaryColorChange} />
      </div>
      <div>
        <label>Secondary Color:</label>
        <div
          style={{
            display: "inline-block",
            width: "30px",
            height: "30px",
            backgroundColor: secondaryColor,
            cursor: "pointer",
          }}
          onClick={() => setSecondaryColor(secondaryColor)}
        />
        <ColorPicker
          color={secondaryColor}
          onChange={handleSecondaryColorChange}
        />
        <button onClick={() => exportAsImage(exportRef.current!, "formation")}>
          Save as PNG
        </button>
      </div>
      <div ref={exportRef}>
        <FootballField
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          formation={formation}
        />
      </div>
    </>
  );
}

export default App;
