import { useState } from "react";
import Button from "./Button";
import Board from "./Board";
import Logo from "./Logo";
import "./App.css";

// 숫자 랜덤 리턴
const random = (n) => {
  return Math.ceil(Math.random() * n);
};

const App = () => {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  const [myResult, setMyResult] = useState("");
  const [otherResult, setOtherResult] = useState("");

  // State를 변경하는 함수
  const HandleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
    setMyResult(nextMyNum > nextOtherNum ? "Board-winner" : "");
    setOtherResult(nextMyNum < nextOtherNum ? "Board-winner" : "");
  };

  // State 초기화하는 함수
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
    setMyResult("");
    setOtherResult("");
  };

  return (
    <div className="App">
      <div>
        <Logo></Logo>
        <div>
          <Button className="App-button" color="blue" onClick={HandleRollClick}>
            던지기
          </Button>
          <Button className="App-button" color="red" onClick={handleClearClick}>
            처음부터
          </Button>
        </div>
      </div>
      <div className="App-boards">
        <Board
          name="나"
          color="blue"
          gameHistory={myHistory}
          className={myResult}
        />
        <Board
          name="상대"
          color="red"
          gameHistory={otherHistory}
          className={otherResult}
        />
      </div>
    </div>
  );
};

export default App;
