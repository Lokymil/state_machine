import React from "react";
import "./Player.css";

type PlayerProps = {
  vert: string;
  horz: string;
  atk: boolean;
};

function Player({ vert, horz, atk }: PlayerProps) {
  return (
    <div className="player">
      <div>Etat du joueur :</div>
      <div>
        &gt; Vertical : <span className="current-state">{vert}</span>
      </div>
      <div>
        &gt; Horizontal : <span className="current-state">{horz}</span>
      </div>
      <div>
        &gt; Attaque :{" "}
        <span className="current-state">
          {atk ? "Attacking" : "Not attacking"}
        </span>
      </div>
    </div>
  );
}

export default Player;
