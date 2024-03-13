import Player from "../Player";
import "./styles.css";

interface FootballFieldProps {
  formation: string;
  primaryColor: string;
  secondaryColor: string;
}

const FootballField = ({
  formation,
  primaryColor,
  secondaryColor,
}: FootballFieldProps) => {
  const formations = {
    "4-3-3": [
      { leftPos: 160, topPos: 370 },
      { leftPos: 200, topPos: 310 },
      { leftPos: 120, topPos: 310 },
      { leftPos: 280, topPos: 290 },
      { leftPos: 40, topPos: 290 },
      { leftPos: 120, topPos: 200 },
      { leftPos: 200, topPos: 200 },
      { leftPos: 40, topPos: 70 },
      { leftPos: 160, topPos: 50 },
      { leftPos: 160, topPos: 140 },
      { leftPos: 280, topPos: 70 },
    ],
    "4-4-2": [
      { leftPos: 160, topPos: 370 },
      { leftPos: 200, topPos: 310 },
      { leftPos: 120, topPos: 310 },
      { leftPos: 280, topPos: 290 },
      { leftPos: 40, topPos: 290 },
      { leftPos: 120, topPos: 200 },
      { leftPos: 200, topPos: 200 },
      { leftPos: 280, topPos: 200 },
      { leftPos: 40, topPos: 70 },
      { leftPos: 160, topPos: 70 },
    ],
  };

  const playerPositions =
    formations[formation as keyof typeof formations] || [];

  return (
    <div className="football-field">
      {playerPositions.map(
        (position: { topPos: number; leftPos: number }, index: number) => (
          <Player
            key={index}
            topPos={position.topPos}
            leftPos={position.leftPos}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            name={`Player ${index + 1}`}
          />
        )
      )}
    </div>
  );
};

export default FootballField;
