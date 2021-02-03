const backLayer = document.querySelector('.backLayer');
const human = document.querySelector('.human');
human.style.left = 0 + 'px';
human.style.right = 40 + 'px';
human.style.bottom = 0 + 'px';

const wallLabelsList = ["A", "B", "C", "D", "E"];
const posValues = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400];
let humanVertPosLabel = "A";
let humanHoriPosLabel = "A";
let wallPosLabel = "A";
let createWallTime = 400;
let leftMoveTime = 20;
let leftMovePos = 10;
let over = false;

let wallPositionBottom = 0;

function randLabel() {
  wallPosLabel = wallLabelsList[Math.floor(Math.random() * wallLabelsList.length)];
}

function press(event) {
  if (event.keyCode === 38 || event.keyCode === 87) {
    moveHuman("up");
  }
  else if (event.keyCode === 40 || event.keyCode === 83) {
    moveHuman("down");
  }
  if (event.keyCode === 37 || event.keyCode === 65) {
    moveHuman("left");
  }
  else if (event.keyCode === 39 || event.keyCode === 68) {
    moveHuman("right");
  }
}

function moveHuman(pressed) {
  if (pressed == "up") {
    if (humanVertPosLabel == "A") {
      human.style.bottom = posValues[1] + 'px';
      humanVertPosLabel = "B";
    }
    else if (humanVertPosLabel == "B") {
      human.style.bottom = posValues[2] + 'px';
      humanVertPosLabel = "C";
    }
    else if (humanVertPosLabel == "C") {
      human.style.bottom = posValues[3] + 'px';
      humanVertPosLabel = "D";
    }
    else if (humanVertPosLabel == "D") {
      human.style.bottom = posValues[4] + 'px';
      humanVertPosLabel = "E";
    }
  }
  else if (pressed == "down") {
    if (humanVertPosLabel == "E") {
      human.style.bottom = posValues[3] + 'px';
      humanVertPosLabel = "D";
    }
    else if (humanVertPosLabel == "D") {
      human.style.bottom = posValues[2] + 'px';
      humanVertPosLabel = "C";
    }
    else if (humanVertPosLabel == "C") {
      human.style.bottom = posValues[1] + 'px';
      humanVertPosLabel = "B";
    }
    else if (humanVertPosLabel == "B") {
      human.style.bottom = posValues[0] + 'px';
      humanVertPosLabel = "A";
    }
  }
  else if (pressed == "right") {
    if (humanHoriPosLabel == "A") {
      human.style.left = posValues[1] + 'px';
      human.style.right = (posValues[1] + 40) + 'px';
      humanHoriPosLabel = "B";
    }
    else if (humanHoriPosLabel == "B") {
      human.style.left = posValues[2] + 'px';
      human.style.right = (posValues[2] + 40) + 'px';
      humanHoriPosLabel = "C";
    }
    else if (humanHoriPosLabel == "C") {
      human.style.left = posValues[3] + 'px';
      human.style.right = (posValues[3] + 40) + 'px';
      humanHoriPosLabel = "D";
    }
    else if (humanHoriPosLabel == "D") {
      human.style.left = posValues[4] + 'px';
      human.style.right = (posValues[4] + 40) + 'px';
      humanHoriPosLabel = "E";
    }
    else if (humanHoriPosLabel == "E") {
      human.style.left = posValues[5] + 'px';
      human.style.right = (posValues[5] + 40) + 'px';
      humanHoriPosLabel = "F";
    }
    else if (humanHoriPosLabel == "F") {
      human.style.left = posValues[6] + 'px';
      human.style.right = (posValues[6] + 40) + 'px';
      humanHoriPosLabel = "G";
    }
    else if (humanHoriPosLabel == "G") {
      human.style.left = posValues[7] + 'px';
      human.style.right = (posValues[7] + 40) + 'px';
      humanHoriPosLabel = "H";
    }
    else if (humanHoriPosLabel == "H") {
      human.style.left = posValues[8] + 'px';
      human.style.right = (posValues[8] + 40) + 'px';
      humanHoriPosLabel = "I";
    }
    else if (humanHoriPosLabel == "I") {
      human.style.left = posValues[9] + 'px';
      human.style.right = (posValues[9] + 40) + 'px';
      humanHoriPosLabel = "J";
    }
    else if (humanHoriPosLabel == "J") {
      human.style.left = posValues[10] + 'px';
      human.style.right = (posValues[10] + 40) + 'px';
      humanHoriPosLabel = "K";
    }
  }
  else if (pressed == "left") {
    if (humanHoriPosLabel == "K") {
      human.style.left = posValues[9] + 'px';
      human.style.right = (posValues[9] + 40) + 'px';
      humanHoriPosLabel = "J";
    }
    else if (humanHoriPosLabel == "J") {
      human.style.left = posValues[8] + 'px';
      human.style.right = (posValues[8] + 40) + 'px';
      humanHoriPosLabel = "I";
    }
    else if (humanHoriPosLabel == "I") {
      human.style.left = posValues[7] + 'px';
      human.style.right = (posValues[7] + 40) + 'px';
      humanHoriPosLabel = "H";
    }
    else if (humanHoriPosLabel == "H") {
      human.style.left = posValues[6] + 'px';
      human.style.right = (posValues[6] + 40) + 'px';
      humanHoriPosLabel = "G";
    }
    else if (humanHoriPosLabel == "G") {
      human.style.left = posValues[5] + 'px';
      human.style.right = (posValues[5] + 40) + 'px';
      humanHoriPosLabel = "F";
    }
    else if (humanHoriPosLabel == "F") {
      human.style.left = posValues[4] + 'px';
      human.style.right = (posValues[4] + 40) + 'px';
      humanHoriPosLabel = "E";
    }
    else if (humanHoriPosLabel == "E") {
      human.style.left = posValues[3] + 'px';
      human.style.right = (posValues[3] + 40) + 'px';
      humanHoriPosLabel = "D";
    }
    else if (humanHoriPosLabel == "D") {
      human.style.left = posValues[2] + 'px';
      human.style.right = (posValues[2] + 40) + 'px';
      humanHoriPosLabel = "C";
    }
    else if (humanHoriPosLabel == "C") {
      human.style.left = posValues[1] + 'px';
      human.style.right = (posValues[1] + 40) + 'px';
      humanHoriPosLabel = "B";
    }
    else if (humanHoriPosLabel == "B") {
      human.style.left = posValues[0] + 'px';
      human.style.right = (posValues[0] + 40) + 'px';
      humanHoriPosLabel = "A";
    }
  }
}

function createWall() {
  if (over === true) return;

  randLabel();

  const wall = document.createElement('div');
  let wallPositionLeft = 1400;

  if (wallPosLabel == "A") {
    wallPositionBottom = posValues[0];
  }
  else if (wallPosLabel == "B") {
    wallPositionBottom = posValues[1];
  }
  else if (wallPosLabel == "C") {
    wallPositionBottom = posValues[2];
  }
  else if (wallPosLabel == "D") {
    wallPositionBottom = posValues[3];
  }
  else if (wallPosLabel == "E") {
    wallPositionBottom = posValues[4];
  }

  wall.classList.add('wall');
  backLayer.appendChild(wall);
  wall.style.left = wallPositionLeft + 'px';
  wall.style.right = (wallPositionLeft + 40) + 'px';
  wall.style.bottom = wallPositionBottom + 'px';

  let leftMove = setInterval(() => {
    if (wallPositionLeft < -40) {
      clearInterval(leftMove);
      backLayer.removeChild(wall);
    }
    else if (wall.style.right == human.style.left && wall.style.bottom == human.style.bottom) {
      clearInterval(leftMove);
      over = true;
      document.body.innerHTML = '<img src="end.png" class="image">';
    }
    else if (wall.style.left == human.style.right && wall.style.bottom == human.style.bottom) {
      clearInterval(leftMove);
      over = true;
      document.body.innerHTML = '<img src="end.png" class="image">';
    }
    else {
      wallPositionLeft = wallPositionLeft - leftMovePos;
      wall.style.left = wallPositionLeft + 'px';
    }
  }, leftMoveTime);

  setTimeout(createWall, createWallTime);
}

createWall();

document.addEventListener('keydown', press);