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
  const topColor: React.CSSProperties = {
    backgroundColor: primaryColor,
  };

  const bottomColor: React.CSSProperties = {
    backgroundColor: secondaryColor,
  };

  const [showInput, setShowInput] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select(); // Select input content
    }
  }, [showInput]);

  return (
    <div className="player-container" style={playerPosition}>
      <div className="circle">
        <div className="top-half" style={topColor}></div>
        <div className="bottom-half" style={bottomColor}></div>
      </div>
      {showInput && (
        <div className="input-wrapper" ref={containerRef}>
          <div className="triangle"></div>
          <div className="player-input-container">
            <input
              type="text"
              maxLength={12}
              value={playerName}
              onChange={handleInputChange}
              placeholder="Enter player name"
              ref={inputRef}
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
