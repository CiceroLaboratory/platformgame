const canvas = document.getElementById("canvas");
const startBtn = document.getElementById("start-btn");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector('.checkpoint-screen > p');
const context = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = .5;
let isCheckpointCollisionDetectionActive = true;

const proportionalSize = (size) => {
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
};

class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400)
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = proportionalSize(40),
      this.height = proportionalSize(40);
  }
  draw() {
    context.fillStyle = "#99c9ff";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  udapte() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if(this.position.y + this.height + this.velocity.y<= canvas.height){
      if(this.position.y< 0){}
    }
  }
}