import React, { useState } from "react";
import Controller from "../controller/Controller";
import Player from "../player/Player";

const ground = {
  value: "ground",
  onVertChange: () => fly1,
  onVertChangeString: "fly1",
};

const fly1 = {
  value: "fly1",
  onVertChange: () => fly2,
  onVertChangeString: "fly2",
};

const fly2 = {
  value: "fly2",
  onVertChange: () => ground,
  onVertChangeString: "ground",
};

const no_move = {
  value: "static",
  onLeft: () => left,
  onLeftString: "left",
  onRight: () => right,
  onRightString: "right",
};

const left = {
  value: "left",
  onLeft: () => left_rush,
  onLeftString: "left rush",
  onRight: () => no_move,
  onRightString: "static",
};

const right = {
  value: "right",
  onLeft: () => no_move,
  onLeftString: "static",
  onRight: () => right_rush,
  onRightString: "right rush",
};

const left_rush = {
  value: "left rush",
  onLeft: () => left_rush,
  onLeftString: "left rush",
  onRight: () => left,
  onRightString: "left",
};

const right_rush = {
  value: "right rush",
  onLeft: () => right,
  onLeftString: "right",
  onRight: () => right_rush,
  onRightString: "right rush",
};

const atk = {
  value: true,
  onAtk: () => notAtk,
  onAtkString: "stop atk",
};

const notAtk = {
  value: false,
  onAtk: () => atk,
  onAtkString: "atk",
};

function States() {
  const [vertState, setVertState] = useState(ground);
  const [horzState, setHorzState] = useState(no_move);
  const [atkState, setAtkState] = useState(notAtk);

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
