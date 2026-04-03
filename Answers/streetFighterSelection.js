function streetFighterSelection(fighters, position, moves) {
  let [row, col] = position;
  const result = [];
  const totalCols = fighters[0].length;

  for (let move of moves) {
    if (move === 'left') {
      col = (col - 1 + totalCols) % totalCols;
    } else if (move === 'right') {
      col = (col + 1) % totalCols;
    } else if (move === 'up') {
      row = Math.max(0, row - 1);
    } else if (move === 'down') {
      row = Math.min(fighters.length - 1, row + 1);
    }

    result.push(fighters[row][col]);
  }

  return result;
}