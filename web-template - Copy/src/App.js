import "./App.css";
import InputFiled from "./components/InputFiled";
import ShortCuts from "./components/ShortCuts";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Dock from "./components/Dock";

function App() {
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
        </div>

        <div className="dock-cont">
          <Dock />
        </div>

    </div>
      // {/* <LoginPage /> */}
      // {/* <SignUp /> */}
  );
}

export default App;
