import React from 'react';

const Board = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="board__row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div className="board__col" key={`${rowIndex}-${colIndex}`}>
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
