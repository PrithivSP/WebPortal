import "./App.css";
import InputFiled from "./components/InputFiled";
import ShortCuts from "./components/ShortCuts";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Dock from "./components/Dock";
import { useState } from "react";
import WindowsDiv from "./components/WindowsDiv";

function App() {
  const [openDiv, setOpenDiv] = useState(false);

  function showDiv() {
    setOpenDiv(!openDiv);
  }

  return (
    // <div className="">
      // {/* <h1>Hi, UserName</h1> */}
      <div className="App">
        
        <div className="screen">
          <div className="app-shortcut">
            <ShortCuts />
          </div>

          <div className="app-inputfield">
            <InputFiled />
          </div>

          <WindowsDiv divVisibility={openDiv}/>
        </div>

        <div className="dock-cont">
          <Dock onDivClick={showDiv} />
        </div>

    </div>
      // {/* <LoginPage /> */}
      // {/* <SignUp /> */}
  );
}

export default App;
