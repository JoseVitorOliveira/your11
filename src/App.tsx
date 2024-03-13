import { useState } from "react";
import FootballField from "./components/FootballField";
import ColorPicker from "./components/ColorPicker";

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
      </div>
      <FootballField
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        formation={formation}
      />
    </>
  );
}

export default App;
