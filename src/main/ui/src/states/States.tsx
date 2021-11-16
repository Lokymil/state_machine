import React, { useState } from "react";
import Controller from "../controller/Controller";
import Player from "../player/Player";
import {
  ground,
  no_move,
  notAtk,
  VerticalPlayerState,
  HorizontalPlayerState,
  AttackingPlayerState,
} from "./playerStates";

function States() {
  const [vertState, setVertState] = useState<VerticalPlayerState>(ground);
  const [horzState, setHorzState] = useState<HorizontalPlayerState>(no_move);
  const [atkState, setAtkState] = useState<AttackingPlayerState>(notAtk);

  const handleYClick = () => {
    setAtkState(atkState.onAtk());
  };

  const handleXClick = () => {
    setHorzState(horzState.onLeft());
  };

  const handleBClick = () => {
    setHorzState(horzState.onRight());
  };

  const handleAClick = () => {
    setVertState(vertState.onVertChange());
  };

  return (
    <div className="wrapper">
      <Player
        vert={vertState.value}
        horz={horzState.value}
        atk={atkState.value}
      />
      <div>
        <div className="if_state">
          <div className="condition">Transistion :</div>
          <div>{atkState.onAtkString}</div>
        </div>
      </div>
      <div className="center">
        <div className="state_col">
          <div className="if_state">
            <div className="condition">Transistion :</div>
            <div>{horzState.onLeftString}</div>
          </div>
        </div>
        <Controller
          onYClick={handleYClick}
          onAClick={handleAClick}
          onXClick={handleXClick}
          onBClick={handleBClick}
        />
        <div className="state_col">
          <div className="if_state">
            <div className="condition">Transistion :</div>
            <div>{horzState.onRightString}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="if_state">
          <div className="condition">Transistion :</div>
          <div>{vertState.onVertChangeString}</div>
        </div>
      </div>
    </div>
  );
}

export default States;
