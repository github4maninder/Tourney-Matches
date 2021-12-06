import "./App.css";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import matchData from "../src/data/matchData";
import playerData from "../src/data/playerData";
import { preparePlayerData, addWinsToPlayers } from "../src/helpers/playerHelpers";

function App() {

  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerData={parsedPlayerData}/>
      <MatchList matchData={matchData}/>
    </div>
  );
}

export default App;
