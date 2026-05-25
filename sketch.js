let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  y = int(x);
  x = random(400);
  y = int(y);
}

function draw() {
  background(220);
  x = x + random(-2, 2);
  y = y + random(-2, 2);
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);
}

  if (distancia < 3) {
    text("Encontrei!", 200, 200);
    noLoop();
}