import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = 500;
  canvas.width = 500;

  const game = new Game(canvas, ctx);
  game.loop();
});
