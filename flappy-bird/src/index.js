import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
window.canvas = canvas;
// const dimensions = { width: canvas.width, height: canvas.height }
new FlappyBird(canvas).restart();


// const canvas = document.getElementById('bird-game');
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "skyblue";
// ctx.fillRect(0, 0, canvas.width, canvas.height); 