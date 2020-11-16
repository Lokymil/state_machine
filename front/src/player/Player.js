import React from "react";
import "./Player.css";

function Player({ vert, horz, atk }) {
  return (
    <div className="player">
      <div>Etat du joueur :</div>
      <div>> Vertical : {vert}</div>
      <div>> Horizontal : {horz}</div>
      <div>> Attaque : {atk ? "oui" : "non"}</div>
    </div>
  );
}

export default Player;
