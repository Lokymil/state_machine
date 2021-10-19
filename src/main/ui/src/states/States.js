import React, { useState } from "react";
import Controller from "../controller/Controller";
import Player from "../player/Player";

const ground = {
  value: "Grounded",
  onVertChange: () => fly1,
  onVertChangeString: "Fly1",
};

const fly1 = {
  value: "Fly1",
  onVertChange: () => fly2,
  onVertChangeString: "Fly2",
};

const fly2 = {
  value: "Fly2",
  onVertChange: () => ground,
  onVertChangeString: "Grounded",
};

const no_move = {
  value: "Standing",
  onLeft: () => left,
  onLeftString: "Walk left",
  onRight: () => right,
  onRightString: "Walk right",
};

const left = {
  value: "Walk left",
  onLeft: () => left_rush,
  onLeftString: "Run left",
  onRight: () => no_move,
  onRightString: "Stop",
};

const right = {
  value: "Walk right",
  onLeft: () => no_move,
  onLeftString: "Stop",
  onRight: () => right_rush,
  onRightString: "Run right",
};

const left_rush = {
  value: "Run left",
  onLeft: () => left_rush,
  onLeftString: "Run left",
  onRight: () => left,
  onRightString: "Walk left",
};

const right_rush = {
  value: "Run right",
  onLeft: () => right,
  onLeftString: "Walk right",
  onRight: () => right_rush,
  onRightString: "Run right",
};

const atk = {
  value: true,
  onAtk: () => notAtk,
  onAtkString: "Stop attack",
};

const notAtk = {
  value: false,
  onAtk: () => atk,
  onAtkString: "Attack",
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
