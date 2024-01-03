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
      <ul>
        <li className="state">
          Vertical : <span className="current-state">{vert}</span>
        </li>
        <li className="state">
          Horizontal : <span className="current-state">{horz}</span>
        </li>
        <li className="state">
          Attaque :{" "}
          <span className="current-state">
            {atk ? "Attacking" : "Not attacking"}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Player;
