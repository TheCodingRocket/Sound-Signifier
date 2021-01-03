let apache;

let wave;

let a = 0;
let r = 6;

let speed = 1;


function preload() {
  apache = loadSound('apache.mp3')
}


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  wave = apache.getPeaks(200);
  apache.loop();
}

function draw() {
  background(220);

  let d = dist(mouseX, mouseY, 200, 300)

  speed = constrain(speed, 0, 1);

  noStroke();
  fill(255, 255, 0);
  rect(100, 0, 200, 200);
  for (let i = 0; i < wave.length; i++) {
    stroke(0, 0, 255);
    line(i + 100, 100 + (wave[i] * 100), i + 100, 100 - (wave[i] * 100));
  }
  let dur = map(apache.currentTime(), 0, apache.duration(), 100, 300);
 
  if (mouseIsPressed && d < 75) {
      r = 0;
      speed -= 0.05
      if (speed < 0) {
        speed = 0;
      }
  } else {
    r = 6;
    speed += 0.05
  }

  stroke(255, 0, 0);
  line(dur, 0, dur, 200);

  push();
  translate(200, 300);
  rotate(a);
  fill(255);
  stroke(0);
  ellipse(0, 0, 150);
  line(0, 0, 0, -75);

  pop();
  a += r;


  apache.rate(speed);
}

