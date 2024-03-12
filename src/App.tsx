import { useState } from "react";
import FootballField from "./components/FootballField";

function App() {
  const [formation, setFormation] = useState("4-3-3");

  const handleFormationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormation(e.target.value);
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
      <FootballField formation={formation} />
    </>
  );
}

export default App;
