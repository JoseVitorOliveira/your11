import { useRef, useState } from "react";
import FootballField from "./components/FootballField";
import ColorPicker from "./components/ColorPicker";
import exportAsImage from "./utils/exportAsImage";
import Header from "./components/Header";
import downloadIcon from "./assets/images/download.svg";
import "./style.css";
import Footer from "./components/Footer";

function App() {
  const [formation, setFormation] = useState("4-3-3");

  const [primaryColor, setPrimaryColor] = useState("#13c9f7");
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

  const exportRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main>
        <div className="formation-container">
          <label htmlFor="formation">Select Formation:</label>
          <select
            id="formation"
            value={formation}
            onChange={handleFormationChange}
          >
            <option value="4-3-3">4-3-3</option>
            <option value="4-3-2-1">4-3-2-1</option>
            <option value="4-4-2">4-4-2</option>
            <option value="4-4-1-1">4-4-1-1</option>
            <option value="4-5-1">4-5-1</option>
            <option value="3-5-2">3-5-2</option>
            <option value="3-4-3">3-4-3</option>
          </select>
        </div>
        <div className="colors-container">
          <ColorPicker
            color={primaryColor}
            onChange={handlePrimaryColorChange}
            label="Primary Color"
          />
          <ColorPicker
            color={secondaryColor}
            onChange={handleSecondaryColorChange}
            label="Secondary Color"
          />
        </div>
        <div ref={exportRef}>
          <FootballField
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            formation={formation}
          />
        </div>
        <button
          className="save-button"
          onClick={() =>
            exportRef.current && exportAsImage(exportRef.current, "formation")
          }
        >
          Save as PNG <img src={downloadIcon} alt="download icon" />
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
