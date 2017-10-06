import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = 450;
  canvas.width = 900;

  const game = new Game(canvas, ctx);
  game.start();
});
