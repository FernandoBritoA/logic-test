const printFinalDirection = (t, ...grids) => {
  const gridPairs = grids.length / 2;
  if (gridPairs !== t) {
    console.log('Invaid input');
    return;
  }
  const groupGrids = Array.from(Array(t), () => []);

  let aux = 0;
  for (let i = 0; i < t; i++) {
    groupGrids[i].push(grids[aux]);
    groupGrids[i].push(grids[++aux]);
    aux++;
  }

  for (let i = 0; i < t; i++) {
    const y = groupGrids[i][0];
    const x = groupGrids[i][1];

    if (y > x) {
      if (x % 2 === 0) {
        console.log('U');
      } else {
        console.log('D');
      }
    } else {
      if (y % 2 === 0) {
        console.log('L');
      } else {
        console.log('R');
      }
    }
  }
};
printFinalDirection(4, 1, 1, 2, 2, 3, 1, 3, 3);
