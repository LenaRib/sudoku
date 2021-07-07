
  
  const getRow = (matrix, rowIndex) => {
    const row = [];
    matrix[rowIndex]
      .forEach((i) => row.push(i));
    return row;
  };

  const getCol = (matrix, colIndex) => {
    const col = [];
    matrix
      .forEach(item => col.push(item[colIndex]));
    return col;
  };

  const getSquare = (matrix, rowIndex, cowIndex) => {
    const square = [];
    const squareSide = 3;
    const startRow = Math.floor(rowIndex / squareSide) * squareSide;
    const startCow = Math.floor(cowIndex / squareSide) * squareSide;

    for (let i = 0; i < squareSide; i++) {
      for (let j = 0; j < squareSide; j++) {
        square.push(matrix[startRow + i][startCow + j]);
      }
    }
    return square;
  };

  const check = (square, row, col, number) => {
    for (let i = 0; i < 9; i++) {
      if (square[i] ===  number || row[i] === number || col[i] === number) return false;
    }
    return true;
  };

  const solve = (matrix) => {
    const length = matrix.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (matrix[i][j] === 0) {
          const row = getRow(matrix, i);
          const column = getCol(matrix, j);
          const square = getSquare(matrix, i, j);
          
          for (let number = 1; number < 10; number++) {
            if (check(square, row, column, number)) {
              matrix[i][j] = number;

              if(solve(matrix)) return true;
              else matrix[i][j] = 0;
            }
          }

          return false;
        }
      }
    }
    
    return true;
  }

module.exports = function solveSudoku(matrix) {
  solve(matrix);
  return matrix;
}
