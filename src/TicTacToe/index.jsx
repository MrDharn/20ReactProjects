import { useState, useEffect } from "react";
import "./index.css";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  function isWinner(squares) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }
  const handleOnclick = (getId) => {
    let cpySquares = [...squares];
    if (isWinner(cpySquares) || cpySquares[getId]) {
      return;
    }
    cpySquares[getId] = isXTurn ? "X" : "O";
    setIsXturn(!isXTurn);
    setSquares(cpySquares);
  };


  //Restart the game

  function handleRestart(){
    setSquares(Array(9).fill(''))
    setIsXturn(true)
    setStatus('')
  }

  useEffect(() => {
    if (!isWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This game is a Draw ! please restart the game`);
    } else if (isWinner(squares)) {
      setStatus(`Winner is ${isWinner(squares)} !!! Restart`);
    } else {
      setStatus(`Next Player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleOnclick(0)} />
        <Square value={squares[1]} onClick={() => handleOnclick(1)} />
        <Square value={squares[2]} onClick={() => handleOnclick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleOnclick(3)} />
        <Square value={squares[4]} onClick={() => handleOnclick(4)} />
        <Square value={squares[5]} onClick={() => handleOnclick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleOnclick(6)} />
        <Square value={squares[7]} onClick={() => handleOnclick(7)} />
        <Square value={squares[8]} onClick={() => handleOnclick(8)} />
      </div>
      <h2 className="game-status">{status}</h2>

      <button className="restart-btn" onClick={handleRestart} >
        Restart
      </button>
    </div>
  );
}
