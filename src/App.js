import React from 'react';

const getColumnValue = () => {
  const columnValues = ['O', 'X'];
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

      if (player === 'X') {
        if (machineAttemps > 0) {
          board[row] = [...board[row], 'X'];
          machineAttemps -= 1;
        } else {
          board[row] = [...board[row], 'O'];
        }
      } else {
        if (personAttemps > 0) {
          board[row] = [...board[row], 'O'];
          personAttemps -= 1;
        } else {
          board[row] = [...board[row], 'X'];
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
        {board.map((row) => (
          <div className="row">
            {row.map((col) => (
              <div className="col">{col}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
