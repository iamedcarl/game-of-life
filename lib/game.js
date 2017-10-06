import { zeroFill, randomFill, gosperGunGlider, acorn } from './patterns';

class Game {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvasHeight = canvas.height;
    this.canvasWidth = canvas.width;

    this.grid = this.createGrid(this.canvasWidth);
    this.copyGrid = this.createGrid(this.canvasWidth);
    zeroFill(this.grid, this.canvasWidth, this.canvasHeight);
    this.bindKeys();
    this.buttonListeners();

    this.loop = this.loop.bind(this);
    this.start = this.start.bind(this);
  }

  bindKeys() {
    document.addEventListener('keydown', e => {
      if(e.key === 'p') { this.togglePause(); }
      if(e.key === 'r') { this.reset(); }
    });
  }

  buttonListeners() {
    this.gosper = document.getElementById('gosper');
    this.random = document.getElementById('random');
    this.acorn = document.getElementById('acorn');
    this.gosper.addEventListener('click', e => {
      zeroFill(this.grid, this.canvasWidth, this.canvasHeight);
      gosperGunGlider(this.grid, 20, 20);
      gosperGunGlider(this.grid, 60, 20);
      gosperGunGlider(this.grid, 100, 20);
      gosperGunGlider(this.grid, 140, 20);
      gosperGunGlider(this.grid, 180, 20);
      gosperGunGlider(this.grid, 220, 20);
      gosperGunGlider(this.grid, 260, 20);
      gosperGunGlider(this.grid, 300, 20);
    });
    this.random.addEventListener('click', e => {
      zeroFill(this.grid, this.canvasWidth, this.canvasHeight);
      randomFill(this.grid, this.canvasWidth, this.canvasHeight);
    });
    this.acorn.addEventListener('click', e => {
      zeroFill(this.grid, this.canvasWidth, this.canvasHeight);
      acorn(this.grid);
    });
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
          this.ctx.scale(1, 1);
          this.ctx.fillRect(i, j, 1, 1);
          this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
      }
    }
  }

  loop() {
    if(!this.stop) {
      if(!this.pause) {
        this.draw();
        this.update();
      }
      requestAnimationFrame(this.loop);
    }
  }

  reset() {
    this.toggleStop();
    setTimeout(this.start, 1000);
  }

  start() {
    document.getElementsByClassName('main')[0].focus();
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.pause = false;
    this.stop = false;
    this.loop();
  }

  togglePause() {
    this.pause = !this.pause;
  }

  toggleStop() {
    this.stop = !this.stop;
  }

  update() {
    let neighborCount;
    for(let i = 1; i < this.canvasWidth -1; i++) {
      for(let j = 1; j < this.canvasHeight - 1;j++) {
        neighborCount = 0;
        neighborCount += this.grid[i-1][j-1];
        neighborCount += this.grid[i][j-1];
        neighborCount += this.grid[i+1][j-1];
        neighborCount += this.grid[i-1][j];
        neighborCount += this.grid[i+1][j];
        neighborCount += this.grid[i-1][j+1];
        neighborCount += this.grid[i][j+1];
        neighborCount += this.grid[i+1][j+1];

        if(this.grid[i][j] === 0){
          switch(neighborCount) {
            case 3:
              this.copyGrid[i][j] = 1;
              break;
            default:
              this.copyGrid[i][j] = 0;
              break;
          }
        } else if(this.grid[i][j] === 1) {
          switch(neighborCount) {
            case 0:
            case 1:
              this.copyGrid[i][j] = 0;
              break;
            case 2:
            case 3:
              this.copyGrid[i][j] = 1;
              break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
              this.copyGrid[i][j] = 0;
              break;
          }
        }
      }
    }

    for(let i = 0; i < this.canvasWidth; i++) {
      for(let j = 0; j < this.canvasHeight;j++) {
        this.grid[i][j] = this.copyGrid[i][j];
      }
    }

  }

}

export default Game;
