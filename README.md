# Conway's Game of Life

[Play here!](https://gameoflife-2017.firebaseapp.com)

_Credit to [Lance Concannon] for the how-to_

[Lance Concannon]: http://disruptive-communications.com/conwaylifejavascript/

![screenshot](/assets/images/gol_screen.png)

### How to Play

Select a pattern to begin the game:
- Gosper Gun Glider
- Random
- Acorn

Press `p` to toggle pause.

### Background

The [Game of Life] is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.

In this game, it consists of a grid where it is populated by a live or dead cell on the HTML5 canvas. The game logic is written in JavaScript.

[Game of Life]: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

### Rules

For every cycle of the game, the cells can be turned on or off based on the following rules:

- If a live cell has less than two live neighbors, it dies
- If a live cell has more than three live neighbors, it dies
- If a live cell has two or three live neighbors, it continues living
- If a dead cell has exactly three live neighbors, it comes to life

There is an initial pattern that can be set which is considered the *seed* of the system. The cycle is repeated and further generations are created. This makes for interesting and unpredictable patterns.


#### Further Reading
[Stanford: A Discussion On The Game of Life](web.stanford.edu/~cdebs/GameOfLife/)
