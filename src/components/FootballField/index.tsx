import Player from "../Player";
import "./styles.css";

const FootballField = () => {
  return (
    <div className="football-field">
      <Player
        leftPos={160}
        topPos={370}
        primaryColor="red"
        secondaryColor="white"
        name="Player 1"
      />
      <Player
        leftPos={200}
        topPos={310}
        primaryColor="red"
        secondaryColor="white"
        name="Player 2"
      />
      <Player
        leftPos={120}
        topPos={310}
        primaryColor="red"
        secondaryColor="white"
        name="Player 3"
      />
      <Player
        leftPos={280}
        topPos={290}
        primaryColor="red"
        secondaryColor="white"
        name="Player 4"
      />
      <Player
        leftPos={40}
        topPos={290}
        primaryColor="red"
        secondaryColor="white"
        name="Player 5"
      />
      <Player
        leftPos={120}
        topPos={200}
        primaryColor="red"
        secondaryColor="white"
        name="Player 6"
      />
      <Player
        leftPos={200}
        topPos={200}
        primaryColor="red"
        secondaryColor="white"
        name="Player 7"
      />
      <Player
        leftPos={40}
        topPos={70}
        primaryColor="red"
        secondaryColor="white"
        name="Player 8"
      />
      <Player
        leftPos={160}
        topPos={50}
        primaryColor="red"
        secondaryColor="white"
        name="Player 9"
      />
      <Player
        leftPos={160}
        topPos={140}
        primaryColor="red"
        secondaryColor="white"
        name="Player 10"
      />
      <Player
        leftPos={280}
        topPos={70}
        primaryColor="red"
        secondaryColor="white"
        name="Player 11"
      />
    </div>
  );
};

export default FootballField;
