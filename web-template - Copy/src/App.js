import "./App.css";
import InputFiled from "./components/InputFiled";
import ShortCuts from "./components/ShortCuts";
import Dock from "./components/Dock";
import { useState } from "react";
import WindowsDiv from "./components/WindowsDiv";

function App() {
  const [openDiv, setOpenDiv] = useState(false);

  function showDiv() {
    setOpenDiv(!openDiv);
  }

  return (
    <div className="App" onClick={openDiv ? showDiv : null}>
      <div className="screen">
        <div className="app-shortcut">
          <ShortCuts />
        </div>

        <div className="app-inputfield">
          <InputFiled />
        </div>

        <WindowsDiv divVisibility={openDiv} />
      </div>

      <div className="dock-cont">
        <Dock onDivClick={showDiv} />
      </div>
    </div>
  );
}

export default App;
