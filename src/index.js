
  
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

module.exports = function solveSudoku(matrix) {
  const length = matrix.length;

  let count = 1; 
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (matrix[i][j] === 0) {
        const row = getRow(matrix, i);
        const column = getCol(matrix, j);
        const square = getSquare(matrix, i, j);
        for (let number = 1; number < 10; number++) {
          if (check(square, row, column, number)) {
            matrix[i][j] = number;
          }
        }
      }
    }
}
  

  //console.log(getRow(matrix, 0));
  //console.log(getCol(matrix, 0));
  //console.log(getSquare(matrix, 0, 0));
  /*

  console.log('matrix ' + matrix[0]);
  console.log('matrix ' + matrix[1]);
  console.log('matrix ' + matrix[2]);
  console.log('matrix ' + matrix[3]);
  console.log('matrix ' + matrix[4]);
  console.log('matrix ' + matrix[5]);
  console.log('matrix ' + matrix[6]);
  console.log('matrix ' + matrix[7]);
  console.log('matrix ' + matrix[8]);
*/

  return matrix;
}
/*
const initial = [
  [6, 5, 0, 7, 3, 0, 0, 8, 0],
  [0, 0, 0, 4, 8, 0, 5, 3, 0],
  [8, 4, 0, 9, 2, 5, 0, 0, 0],
  [0, 9, 0, 8, 0, 0, 0, 0, 0],
  [5, 3, 0, 2, 0, 9, 6, 0, 0],
  [0, 0, 6, 0, 0, 0, 8, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 6],
  [0, 0, 7, 0, 0, 0, 0, 5, 0],
  [1, 6, 5, 3, 9, 0, 4, 7, 0]
];
const copy = initial.map(r => [...r]);
solveSudoku(copy);
*/
