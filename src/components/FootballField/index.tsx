import Player from "../Player";
import "./styles.css";
import formations from "../../utils/Fomations";

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
