import React from 'react';
import './css/square.css';
function Square ({value, handleClick, color}) {
    let cellClass;

    if (value === 'x') {
      cellClass = 'cell-x';
    } else if (value === 'o') {
      cellClass = 'cell-o';
    }
    return (
      <button className={`square ${cellClass}`} onClick={handleClick}>
        {value}
      </button>
    );
  }
export default Square;  
  
  
  
  
  