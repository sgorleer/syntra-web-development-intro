console.log("Hallo");

// if all assets have been loaded, this event fires
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  // keyboard actions
  class InputHandler {}
  // shoot lasers
  class Projectile {}
  // damaged enemy loses gears
  class Particle {}
  // player itself
  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      // the starting position of player
      this.x = 20;
      this.y = 100;
      // no vertical movement
      this.speedY = 0;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  // blueprint for all different enemies
  class Enemy {}
  // handles background layer animation
  class Layer {}
  // class that pulls all the layers together
  class Background {}
  // HUD
  class UI {}
  // class to put everything together
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
    }
    draw(context) {
      this.player.draw(context);
    }
  }
  const game = new Game(canvas.width, canvas.height);
});
