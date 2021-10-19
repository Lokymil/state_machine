import React from "react";
import "./Player.css";

function Player({ vert, horz, atk }) {
  return (
    <div className="player">
      <div>Etat du joueur :</div>
      <div>
        > Vertical : <span className="current-state">{vert}</span>
      </div>
      <div>
        > Horizontal : <span className="current-state">{horz}</span>
      </div>
      <div>
        > Attaque :{" "}
        <span className="current-state">
          {atk ? "Attacking" : "Not attacking"}
        </span>
      </div>
    </div>
  );
}

export default Player;
