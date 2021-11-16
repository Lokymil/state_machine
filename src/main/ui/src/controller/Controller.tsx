import React from "react";
import "./Controller.css";

type ControllerProps = {
  onAClick: () => void;
  onXClick: () => void;
  onYClick: () => void;
  onBClick: () => void;
};

function Controller({
  onAClick,
  onXClick,
  onYClick,
  onBClick,
}: ControllerProps) {
  return (
    <div className="controller">
      <div className="controller-line">
        <button className="y" onClick={onYClick}>
          Y
        </button>
      </div>
      <div className="controller-line">
        <button className="x" onClick={onXClick}>
          X
        </button>
        <button className="b" onClick={onBClick}>
          B
        </button>
      </div>
      <div className="controller-line">
        <button className="a" onClick={onAClick}>
          A
        </button>
      </div>
    </div>
  );
}

export default Controller;
