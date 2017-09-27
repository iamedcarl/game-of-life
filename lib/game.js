class Game {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvasHeight = canvas.height;
    this.canvasWidth = canvas.width;

    this.grid = this.createGrid(canvas.width);
    this.randomFill();

    this.loop = this.loop.bind(this);
    this.draw = this.draw.bind(this);
  }

  createGrid(rows) {
    let grid = [];
    for(let i = 0; i < rows; i++) {
      grid[i] = [];
    }
    return grid;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    for(let i = 1; i < this.canvasWidth; i++) {
      for(let j = 1; j < this.canvasHeight;j++) {
        if(this.grid[i][j] === 1){
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(i, j, 1, 1);
        }
      }
    }
  }

  loop() {
    this.draw();
    requestAnimationFrame(this.loop);
  }

  randomFill() {
    const oneOrZero = [0, 1];
    for(let i = 0; i < this.canvasWidth; i++) {
      for(let j = 0; j < this.canvasHeight;j++) {
        let randomIdx = Math.floor(Math.random() * oneOrZero.length);
        this.grid[i][j] = oneOrZero[randomIdx];
      }
    }
  }

}

export default Game;
