import React, { useState } from "react";
import Ifs from "./ifs/Ifs";
import States from "./states/States";

function App() {
  const [mode, setMode] = useState("if");

  return (
    <div>
      <div>
        Choix du mode :
        <button onClick={() => setMode("if")}>Forêt de if</button>
        <button onClick={() => setMode("state")}>Machine à état</button>
      </div>
      <div>
        {mode === "if" && <Ifs />}
        {mode === "state" && <States />}
      </div>
    </div>
  );
}

export default App;
