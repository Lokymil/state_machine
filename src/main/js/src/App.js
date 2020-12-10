import React, { useState } from "react";
import Ifs from "./ifs/Ifs";
import States from "./states/States";
import "./App.css";

function App() {
  const [mode, setMode] = useState("if");

  return (
    <div>
      <div>
        Choix du mode :
        <div className="button-group">
          <button
            className={mode === "if" ? "button-active" : ""}
            onClick={() => setMode("if")}
          >
            Forêt de if
          </button>
          <button
            className={mode === "state" ? "button-active" : ""}
            onClick={() => setMode("state")}
          >
            Machine à état
          </button>
        </div>
      </div>
      <div>
        {mode === "if" && <Ifs />}
        {mode === "state" && <States />}
      </div>
    </div>
  );
}

export default App;
