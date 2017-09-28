export const randomFill = (grid, width, height) => {
  const oneOrZero = [0, 1];
  for(let i = 0; i < width; i++) {
    for(let j = 0; j < height;j++) {
      let randomIdx = Math.floor(Math.random() * oneOrZero.length);
      grid[i][j] = oneOrZero[randomIdx];
    }
  }
};

export const gosperGunGlider = (grid, width, height) => {
  for(let i = 0; i < width; i++) {
    for(let j = 0; j < height;j++) {
      grid[i][j] = 0;
    }
  }
  
  grid[2][6] = 1;
  grid[3][6] = 1;
  grid[2][7] = 1;
  grid[3][7] = 1;

  grid[36][4] = 1;
  grid[37][4] = 1;
  grid[36][5] = 1;
  grid[37][5] = 1;

  grid[26][2] = 1;
  grid[24][3] = 1;
  grid[26][3] = 1;
  grid[14][4] = 1;
  grid[15][4] = 1;
  grid[22][4] = 1;
  grid[23][4] = 1;
  grid[13][5] = 1;
  grid[17][5] = 1;
  grid[22][5] = 1;
  grid[23][5] = 1;
  grid[12][6] = 1;
  grid[18][6] = 1;
  grid[22][6] = 1;
  grid[23][6] = 1;
  grid[12][7] = 1;
  grid[16][7] = 1;
  grid[18][7] = 1;
  grid[19][7] = 1;
  grid[24][7] = 1;
  grid[26][7] = 1;
  grid[12][8] = 1;
  grid[18][8] = 1;
  grid[26][8] = 1;
  grid[13][9] = 1;
  grid[17][9] = 1;
  grid[14][10] = 1;
  grid[15][10] = 1;
};
