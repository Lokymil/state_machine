import React, { useState } from "react";
import Controller from "../controller/Controller";
import Player from "../player/Player";
import "./Ifs.css";

function Ifs() {
  const [vert, setVert] = useState("ground");
  const [horz, setHorz] = useState("static");
  const [atk, setAtk] = useState(false);

  const onAClick = () => {
    if (vert === "ground") {
      setVert("fly1");
    } else if (vert === "fly1") {
      setVert("fly2");
    } else {
      setVert("ground");
    }
  };

  const onBClick = () => {
    if (horz === "static") {
      setHorz("right");
    } else if (horz === "right" || horz === "right rush") {
      setHorz("right rush");
    } else if (horz === "left rush") {
      setHorz("left");
    } else {
      setHorz("static");
    }
  };

  const onXClick = () => {
    if (horz === "static") {
      setHorz("left");
    } else if (horz === "left" || horz === "left rush") {
      setHorz("left rush");
    } else if (horz === "right rush") {
      setHorz("right");
    } else {
      setHorz("static");
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
          <div className="condition">Si atk :</div>
          <div>stop atk</div>
        </div>
        <div className="if_state">
          <div className="condition">Sinon :</div>
          <div>atk</div>
        </div>
      </div>
      <div className="center">
        <div className="state_col">
          <div className="if_state">
            <div className="condition">Si static :</div>
            <div>left</div>
          </div>
          <div className="if_state">
            <div className="condition">Si left :</div>
            <div>left rush</div>
          </div>
          <div className="if_state">
            <div className="condition">Si left rush :</div>
            <div>left rush</div>
          </div>
          <div className="if_state">
            <div className="condition">Si right rush :</div>
            <div>right</div>
          </div>
          <div className="if_state">
            <div className="condition">Sinon :</div>
            <div>static</div>
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
            <div className="condition">Si static :</div>
            <div>right</div>
          </div>
          <div className="if_state">
            <div className="condition">Si right :</div>
            <div>right rush</div>
          </div>
          <div className="if_state">
            <div className="condition">Si right rush :</div>
            <div>right rush</div>
          </div>
          <div className="if_state">
            <div className="condition">Si left rush :</div>
            <div>left</div>
          </div>
          <div className="if_state">
            <div className="condition">Sinon :</div>
            <div>static</div>
          </div>
        </div>
      </div>
      <div>
        <div className="if_state">
          <div className="condition">Si ground :</div>
          <div>fly1</div>
        </div>
        <div className="if_state">
          <div className="condition">Si fly1 :</div>
          <div>fly2</div>
        </div>
        <div className="if_state">
          <div className="condition">Sinon :</div>
          <div>ground</div>
        </div>
      </div>
    </div>
  );
}

export default Ifs;
