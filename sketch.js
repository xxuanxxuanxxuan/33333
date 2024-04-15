let bg = ["#FAEBCD"];
let c = ["#E06A4E", "#DEB853", "#789F8A"];

var x, y; // 圖案的位置
var dx = 1; // x 軸的速度
var dy = 1; // y 軸的速度

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(bg);
}

function draw() {
  // 清除背景
  background(bg);

  // 繪製圖案
  drawPattern(x, y);

  // 更新圖案的位置
  x += dx;
  y += dy;

  // 檢查是否碰到邊框，如果是，則反彈
  if (x <= 0 || x >= width) {
    dx *= -1;
  }
  if (y <= 0 || y >= height) {
    dy *= -1;
  }
}

function drawPattern(x, y) {
  let cols = int(8);
  let rows = cols;
  let cellW = width / cols;
  let cellH = height / rows;

  //   n度で回転
  let n = 72;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(random(c));
      for (let r = 0; r < 360; r = r + n) {
        let posX = i * cellW;
        let posY = j * cellH;
        let d = cellW / random(8, 12);

        push();
        translate(posX + cellW / 2, posY + cellH / 2);
        rotate(r);

        noStroke();
        circle(-d * 1.5, -d * 1.5, d * 3);

        stroke("#5A3D2B");
        strokeWeight(d / 1.5);
        drawingContext.setLineDash([2, 5]);

        beginShape();
        vertex(0, 0);
        vertex(-d, -d);
        line(0, 0, -d, -d * 2);
        line(0, 0, -d * 2, -d);
        endShape();

        pop();
      }
    }
  }
}

function mouseClicked() {
  // 每次點擊畫面時，重置圖案的位置和速度
  x = mouseX;
  y = mouseY;
  dx = 1;
  dy = 1;
}