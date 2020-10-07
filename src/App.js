import React from 'react';
import Board from './components/Board/Board';
import Notification from './components/Notification/Notification';

const PERSON_PLAYER = 'O';
const MACHINE_PLAYER = 'X';

const getColumnValue = () => {
  const columnValues = [PERSON_PLAYER, MACHINE_PLAYER];
  const randomNumber = Math.round(Math.random());

  return columnValues[randomNumber];
};

const createBoard = () => {
  const board = [];
  let machineAttemps = 3;
  let personAttemps = 3;

  for (let row = 0; row < 2; row++) {
    board[row] = [];
    for (let col = 0; col < 3; col++) {
      const player = getColumnValue();

      if (player === MACHINE_PLAYER) {
        if (machineAttemps > 0) {
          board[row] = [...board[row], MACHINE_PLAYER];
          machineAttemps -= 1;
        } else {
          board[row] = [...board[row], PERSON_PLAYER];
        }
      } else {
        if (personAttemps > 0) {
          board[row] = [...board[row], PERSON_PLAYER];
          personAttemps -= 1;
        } else {
          board[row] = [...board[row], MACHINE_PLAYER];
        }
      }
    }
  }

  board[2] = ['', '', ''];

  return board;
};

const isBottomLeftWinner = (board) =>
  (board[0][0] === MACHINE_PLAYER && board[1][0] === MACHINE_PLAYER) ||
  (board[0][2] === MACHINE_PLAYER && board[1][1] === MACHINE_PLAYER);

const isBottomCenterWinner = (board) =>
  board[0][1] === MACHINE_PLAYER && board[1][1] === MACHINE_PLAYER;

const isBottomRightWinner = (board) =>
  (board[0][2] === MACHINE_PLAYER && board[1][2] === MACHINE_PLAYER) ||
  (board[0][0] === MACHINE_PLAYER && board[1][1] === MACHINE_PLAYER);

const App = () => {
  const board = createBoard();
  const isLeftWinner = isBottomLeftWinner(board);
  const isCenterWinner = isBottomCenterWinner(board);
  const isRightWinner = isBottomRightWinner(board);

  return (
    <div className="app">
      <Board board={board} />
      {isLeftWinner && <Notification message="La máquina gana con izquierda" />}
      {isCenterWinner && <Notification message="La máquina gana con centro" />}
      {isRightWinner && <Notification message="La máquina gana con derecha" />}
      {!isLeftWinner && !isCenterWinner && !isRightWinner && (
        <Notification message="La máquina no puede ganar" />
      )}
    </div>
  );
};

export default App;
