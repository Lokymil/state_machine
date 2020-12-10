import React, { useState } from "react";
import Controller from "../controller/Controller";
import Player from "../player/Player";
import "./Ifs.css";

function Ifs() {
  const [vert, setVert] = useState("Grounded");
  const [horz, setHorz] = useState("Standing");
  const [atk, setAtk] = useState(false);

  const onAClick = () => {
    if (vert === "Grounded") {
      setVert("Fly1");
    } else if (vert === "Fly1") {
      setVert("Fly2");
    } else {
      setVert("Grounded");
    }
  };

  const onBClick = () => {
    if (horz === "Standing") {
      setHorz("Walk right");
    } else if (horz === "Walk right" || horz === "Run right") {
      setHorz("Run right");
    } else if (horz === "Run left") {
      setHorz("Walk left");
    } else {
      setHorz("Standing");
    }
  };

  const onXClick = () => {
    if (horz === "Standing") {
      setHorz("Walk left");
    } else if (horz === "Walk left" || horz === "Run left") {
      setHorz("Run left");
    } else if (horz === "Run right") {
      setHorz("Walk right");
    } else {
      setHorz("Standing");
    }
  };

  const onYClick = () => {
    if (atk) {
      setAtk(false);
    } else {
      setAtk(true);
    }
  };

  return (
    <div className="wrapper">
      <Player vert={vert} horz={horz} atk={atk} />
      <div>
        <div className="if_state">
          <div className="condition">Si Attacking :</div>
          <div>Stop attack</div>
        </div>
        <div className="if_state">
          <div className="condition">Sinon :</div>
          <div>Attack</div>
        </div>
      </div>
      <div className="center">
        <div className="state_col">
          <div className="if_state">
            <div className="condition">Si Standing :</div>
            <div>Walk left</div>
          </div>
          <div className="if_state">
            <div className="condition">Si Walk left :</div>
            <div>Run left</div>
          </div>
          <div className="if_state">
            <div className="condition">Si Run left :</div>
            <div>Run left</div>
          </div>
          <div className="if_state">
            <div className="condition">Si Run right :</div>
            <div>Walk right</div>
          </div>
          <div className="if_state">
            <div className="condition">Sinon :</div>
            <div>Standing</div>
          </div>
        </div>
        <Controller
          onAClick={onAClick}
          onBClick={onBClick}
          onXClick={onXClick}
          onYClick={onYClick}
        />
        <div className="state_col">
          <div className="if_state">
            <div className="condition">Si Standing :</div>
            <div>Walk right</div>
          </div>
          <div className="if_state">
            <div className="condition">Si Walk right :</div>
            <div>Run right</div>
          </div>
          <div className="if_state">
            <div className="condition">Si Run right :</div>
            <div>Run right</div>
          </div>
          <div className="if_state">
            <div className="condition">Si Run left :</div>
            <div>Walk left</div>
          </div>
          <div className="if_state">
            <div className="condition">Sinon :</div>
            <div>Standing</div>
          </div>
        </div>
      </div>
      <div>
        <div className="if_state">
          <div className="condition">Si Grounded :</div>
          <div>Fly1</div>
        </div>
        <div className="if_state">
          <div className="condition">Si Fly1 :</div>
          <div>Fly2</div>
        </div>
        <div className="if_state">
          <div className="condition">Sinon :</div>
          <div>Grounded</div>
        </div>
      </div>
    </div>
  );
}

export default Ifs;
