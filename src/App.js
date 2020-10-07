import React from 'react';

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

const App = () => {
  const board = createBoard();

  return (
    <div className="App">
      <div className="board">
        {board.map((row, index) => (
          <div className="row" key={index}>
            {row.map((col, index) => (
              <div className="col" key={index}>
                {col}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
