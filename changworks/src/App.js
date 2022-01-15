import "./App.css";
import { useRef } from "react";
import { HotKeys } from "react-hotkeys";

export default function App() {
  const confetti = require("canvas-confetti");
  const myCanvas = useRef(null);

  const keyMap = {
    keyPress: "c h a n g w o r k s"
  };
 
  const handlers = {
    keyPress: () => {
      const myConfetti = confetti.create(myCanvas.current, {
        resize: true,
        useWorker: true,
      });
      myConfetti({
        particleCount: 300,
        spread: 200,
      });
    },
  };
  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <div className="App">
        <h1
          className="heading-preview"
          style={{
            left: "0",
            lineHeight: "200px",
            marginTop: "-100px",
            position: "absolute",
            textAlign: "center",
            top: "50%",
            width: "100%",
          }}
        >
          Type "changworks"
        </h1>
        <canvas
          style={{ width: "200vh", height: "100vh" }}
          ref={myCanvas}
        ></canvas>
      </div>
    </HotKeys>
  );
}
