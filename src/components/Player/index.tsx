import React from "react";
import "./styles.css";

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
  return (
    <div className="player-container" style={playerPosition}>
      <div className="circle" style={circleColors}>
        <div className="player-input">
          <input type="text" placeholder="Enter player name" />
          <button className="close-button">Close</button>
        </div>
      </div>
      <div className="player-name">{name}</div>
    </div>
  );
};

export default Player;
