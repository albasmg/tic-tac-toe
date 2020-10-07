import React from 'react';

const getColumnValue = () => {
  const columnValues = ['O', 'X'];
  const randomNumber = Math.round(Math.random());

  return columnValues[randomNumber];
};

const createBoard = () => {
  const board = [];

  for (let row = 0; row < 2; row++) {
    board[row] = [];
    for (let col = 0; col < 3; col++) {
      board[row] = [...board[row], getColumnValue()];
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
