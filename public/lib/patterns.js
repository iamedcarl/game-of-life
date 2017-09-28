const zeroFill = (grid, width, height) => {
  for(let i = 0; i < width; i++) {
    for(let j = 0; j < height;j++) {
      grid[i][j] = 0;
    }
  }
  return grid;
};

export const randomFill = (grid, width, height) => {
  const oneOrZero = [0, 1];
  for(let i = 0; i < width; i++) {
    for(let j = 0; j < height;j++) {
      let randomIdx = Math.floor(Math.random() * oneOrZero.length);
      grid[i][j] = oneOrZero[randomIdx];
    }
  }
};

export const acorn = (grid, width, height, x = 500, y = 220) => {
  grid = zeroFill(grid, width, height);

  grid[2 + x][1 + y] = 1;
  grid[4 + x][2 + y] = 1;
  grid[1 + x][3 + y] = 1;
  grid[2 + x][3 + y] = 1;
  grid[5 + x][3 + y] = 1;
  grid[6 + x][3 + y] = 1;
  grid[7 + x][3 + y] = 1;
};

export const gosperGunGlider = (grid, width, height, x = 0, y = 0) => {
  grid = zeroFill(grid, width, height);

  grid[2 + x][6 + y] = 1;
  grid[3 + x][6 + y] = 1;
  grid[2 + x][7 + y] = 1;
  grid[3 + x][7 + y] = 1;

  grid[36 + x][4 + y] = 1;
  grid[37 + x][4 + y] = 1;
  grid[36 + x][5 + y] = 1;
  grid[37 + x][5 + y] = 1;

  grid[26 + x][2 + y] = 1;
  grid[24 + x][3 + y] = 1;
  grid[26 + x][3 + y] = 1;
  grid[14 + x][4 + y] = 1;
  grid[15 + x][4 + y] = 1;
  grid[22 + x][4 + y] = 1;
  grid[23 + x][4 + y] = 1;
  grid[13 + x][5 + y] = 1;
  grid[17 + x][5 + y] = 1;
  grid[22 + x][5 + y] = 1;
  grid[23 + x][5 + y] = 1;
  grid[12 + x][6 + y] = 1;
  grid[18 + x][6 + y] = 1;
  grid[22 + x][6 + y] = 1;
  grid[23 + x][6 + y] = 1;
  grid[12 + x][7 + y] = 1;
  grid[16 + x][7 + y] = 1;
  grid[18 + x][7 + y] = 1;
  grid[19 + x][7 + y] = 1;
  grid[24 + x][7 + y] = 1;
  grid[26 + x][7 + y] = 1;
  grid[12 + x][8 + y] = 1;
  grid[18 + x][8 + y] = 1;
  grid[26 + x][8 + y] = 1;
  grid[13 + x][9 + y] = 1;
  grid[17 + x][9 + y] = 1;
  grid[14 + x][10 + y] = 1;
  grid[15 + x][10 + y] = 1;
};
