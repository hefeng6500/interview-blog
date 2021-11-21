const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = [];
  const col = {};
  const box = {};

  for (let i = 0; i < board.length; i++) {
    row[i] = row[i] || [];

    for (let j = 0; j < board[i].length; j++) {
      col[j] = col[j] || [];

      if (board[i][j] !== ".") {
        col[j].push(board[i][j]);
        row[i].push(board[i][j]);
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        box[boxIndex] = box[boxIndex] || [];
        box[boxIndex].push(board[i][j]);
      }
    }
  }

  console.log(row);
  console.log(col);
  console.log(box);

  const hasRepeat = (data) => {
    return Object.values(data).find(
      (item) => [...new Set(item)].length !== item.length
    );
  };

  const r = hasRepeat(row);
  const c = hasRepeat(col);
  const b = hasRepeat(box);

  console.log("row valid", r);
  console.log("col valid", c);
  console.log("box valid", b);

  if (hasRepeat(row) || hasRepeat(col) || hasRepeat(box)) {
    return false;
  }

  return true;
};

const result = isValidSudoku(board);

console.log(result);
