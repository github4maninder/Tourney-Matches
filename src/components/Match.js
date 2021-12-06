import React from "react";

function Match(props) {
  return (
    <article className="Match">
      <h1>
        {props.players[0]} <span>vs</span> {props.players[1]}
      </h1>
      {props.winner && (
        <h2>
          {props.winner} is the winner by {props.scoreDifference}!
        </h2>
      )}
      {!props.winner && <h2>No winners yet!</h2>}
    </article>
  );
}

export default Match;
