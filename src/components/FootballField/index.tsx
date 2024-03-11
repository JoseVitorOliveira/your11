import Player from "../Player";
import "./styles.css";

const FootballField = () => {
  return (
    <div className="football-field">
      <Player
        leftPos={300}
        topPos={300}
        primaryColor="red"
        secondaryColor="white"
        name="Player 1"
      />
    </div>
  );
};

export default FootballField;
