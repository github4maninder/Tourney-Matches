import React from "react"; //optional
import Match from "./Match";

function MatchList(props) {
  //loop through props and create an array of the various matches found within to render all
  let matches = props.matchData.map((object) => {
    let match = (
      <Match
        key={object.matchNumber}
        players={object.players}
        winner={object.winner}
        scoreDifference={object.scoreDifference}
      />)
      return(match)
  });

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
}

export default MatchList;
