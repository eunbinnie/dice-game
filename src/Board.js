import Dice from "./Dice";
import "./Board.css";

const Board = (props) => {
  const { name, color, gameHistory, className = "" } = props;
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  const classNames = `Board App-board ${className}`;
  return (
    <div className={classNames}>
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(", ")}</p>
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
    </div>
  );
};

export default Board;
