import React, { useState } from "react";
import Box from "./Box";

export default function Board() {
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [boardState, setBoardState] = useState(new Array(9));
  const [winningState, setWinningState] = useState(false);
  const [drawState, setDrawState] = useState(false);

  const boxGrid = [...new Array(9).keys()].map((_, index) => (
    <Box
      key={index}
      id={`box-${index}`}
      index={index}
      onClick={handleClick}
      isPlayerOne={isPlayerOne}
      winningState={winningState}
      boardState={boardState[index]}
    />
  ));

  function handleClick(index) {
    if (winningState || boardState[index]) {
      return;
    }

    setIsPlayerOne(isPlayerOne ? false : true);

    const newArray = [...boardState];
    newArray[index] = isPlayerOne ? "X" : "O";
    setBoardState(newArray);

    winCheck(newArray);
    drawCheck(newArray);
  }

  const winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function winCheck(board) {
    winArray.forEach(function (element) {
      const positionOne = element[0];
      const positionTwo = element[1];
      const positionThree = element[2];

      if (
        board[positionOne] &&
        board[positionOne] === board[positionTwo] &&
        board[positionTwo] === board[positionThree]
      ) {
        setWinningState(true);
      }
    });
  }

  function drawCheck(board){

      const areEmptySquaresLeft = board.some(function (element) {
        return element === undefined
      });

      if(!areEmptySquaresLeft) {
        setDrawState(true);
      }
  
  }

  const winText = winningState ? "You Win!" : "";
  const drawText = !winningState && drawState ? "DRAW!" : "";

  return (
    <>
      <div className="container">{boxGrid}</div>
      <h1 className="win-text">{winText}</h1>
      <h1 className="win-text">{drawText}</h1>
    </>
  );
}
