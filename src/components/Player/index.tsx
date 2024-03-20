import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import checkMark from "../../assets/images/checkMark.svg";

interface PlayerProps {
  name: string;
  topPos: number;
  leftPos: number;
  primaryColor: string;
  secondaryColor: string;
}

const Player = ({
  name,
  topPos,
  leftPos,
  primaryColor,
  secondaryColor,
}: PlayerProps) => {
  const playerPosition: React.CSSProperties = {
    top: `${topPos}px`,
    left: `${leftPos}px`,
  };
  const circleColors: React.CSSProperties = {
    background: `linear-gradient(to bottom, ${primaryColor} 50%, ${secondaryColor} 50%)`,
  };

  const [showInput, setShowInput] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const closeInput = () => {
    setShowInput(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  return (
    <div className="player-container" style={playerPosition}>
      <div className="circle" style={circleColors}>
        {" "}
      </div>
      {showInput && (
        <div className="input-wrapper" ref={containerRef}>
          <div className="triangle"></div>
          <div className="player-input-container">
            <input
              type="text"
              value={playerName}
              onChange={handleInputChange}
              placeholder="Enter player name"
            />
            <button className="close-button" onClick={closeInput}>
              <img src={checkMark} alt="" />
            </button>
          </div>
        </div>
      )}
      <span className="player-name" onClick={toggleInput}>
        {playerName || name}
      </span>
    </div>
  );
};

export default Player;
