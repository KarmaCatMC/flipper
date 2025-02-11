// defining classes
class Textdisplay {
    constructor(value, x, y, textcolor) {
        this.x = x
        this.y = y
        this.value = value
        this.textcolor = textcolor
    }

    show() {
        push()
        textAlign(CENTER, CENTER);
        textSize(25);
        fill(this.textcolor);
        noStroke()
        text(this.value, this.x, this.y)
        pop()
    }

    updateValue(value) {
        this.value = value
    }
}

class Flipper {
    constructor(xd, yd, x, y, size, direction, side) {
        this.xd = xd;
        this.yd = yd;
        this.x = x;
        this.y = y;
        this.s = size;
        this.d = direction;
        this.side = side;
        this.moved = 0;
    }

    show() {
        push();
        stroke("rgb(0,0,255)");
        strokeWeight(35);
        let x2 =
            this.xd +
            (this.x - this.xd) * cos(this.d) -
            (this.y - this.yd) * sin(this.d);
        let y2 =
            this.yd +
            (this.x - this.xd) * sin(this.d) +
            (this.y - this.yd) * cos(this.d);
        line(this.xd, this.yd, x2, y2);
        pop();
    }

    move() {
        switch (this.side) {
            case "left":
                if (this.d > -0.2) {
                    this.d -= 0.2;
                }
                break;
            case "right":
                if (this.d < 0.2) {
                    this.d += 0.2;
                }
                break;
        }
    }

    descend() {
        switch (this.side) {
            case "left":
                if (this.d < 0) {
                    this.d += 0.025;
                }
                break;
            case "right":
                if (this.d > 0) {
                    this.d -= 0.025;
                }
                break;
        }
    }

    handleFlipper() {
        switch (this.side) {
            case "left":
                if (this.d < 0) {
                    speedY += -2.5;
                    vel2.add(2, 0, 0)
                }
                break;
            case "right":
                if (this.d > 0) {
                    speedY += -2.5;
                    vel2.add(-2, 0, 0)
                }
                break;
        }
    }
}

// defining variables
let angleToMouse;
let pos;
let colLeft;
let colRight;
let colBottom;
let colTop;
let colBotLeft;
let colBotRight;
let colTopRight;
let colTopLeft;
let colliding;
let distX;
let colPoint;
let speedY = 2;
let score;
let highscore = 0;
let ms;
let alive;
let lastMs = 0;
let posTempX;
let posTempY;
let checkCol;

// creating the flippers and obstacles
let textScore = new Textdisplay(score, 300, 75, 'gray')
let textHighscore = new Textdisplay(highscore, 575, 15, 'gold')
let flipperLeft = new Flipper(100, 625, 250, 650, 150, 0, "left");
let flipperRight = new Flipper(500, 625, 350, 650, -150, 0, "right");
let wallLeft1 = new Wall(75, 0, 75, 600, "black");
let wallLeft2 = new Wall(525, 0, 525, 600, "black");
let wallRight1 = new Wall(75, 600, 100, 625, "black");
let wallRight2 = new Wall(525, 600, 500, 625, "black");
let wallTop = new Wall(75, 5, 525, 5, "black");
let wallTop1 = new Wall(75, 25, 525, 25, "black");
let circleTopTopLeft = new Circle(225, 125, "black", 35);
let circleTopTopRight = new Circle(375, 125, "black", 35);
let circleTopBotLeft = new Circle(200, 200, "black", 35);
let circleTopBotRight = new Circle(400, 200, "black", 35);
let circleBotTopRight = new Circle(375, 425, "black", 35);
let circleBotTopLeft = new Circle(225, 425, "black", 35);
let circleBotBotLeft = new Circle(200, 500, "black", 35);
let circleBotBotRight = new Circle(400, 500, "black", 35);

function setup() {
    createCanvas(600, 800, P2D, flipperCanvas);

    pos = createVector(500, 100, 0);
    vel2 = createVector(0, 0, 0)
    posTemp = createVector(0,0,0)
    point(pos);
}

function drawLevel() {
    wallLeft1.show();
    wallLeft2.show();
    wallRight1.show();
    wallRight2.show();
    wallTop.show();
    wallTop1.show();
    circleTopTopLeft.show();
    circleTopTopRight.show();
    circleTopBotLeft.show();
    circleTopBotRight.show();
    circleBotTopLeft.show();
    circleBotTopRight.show();
    circleBotBotLeft.show();
    circleBotBotRight.show();
}

function checkCollision() {
    posTemp.add(vel1)
    posTempX = posTemp.x / 2
    posTempY = posTemp.y / 2
    checkCol = get(posTempX,posTempY)
    if (checkCol[0] === 0 && checkCol[1] === 0) {
        vel1.x = vel1.x / 2
        vel1.y = vel1.y / 2
    }
    posTempX = posTemp.x / 4
    posTempY = posTemp.y / 4
    checkCol = get(posTempX,posTempY)
    if (checkCol[0] === 0 && checkCol[1] === 0) {
        vel1.x = vel1.x / 4
        vel1.y = vel1.y / 4
    }
}

function drawBall() {
    vel1.add(vel2)
    checkCollision()
    pos.add(vel1);
    strokeWeight(30);
    stroke("silver");
    point(pos);
}

function calculateVector() {
    // calculating the angle and distance from the ball to the mouse
    let distY = height - pos.y;
    switch (colliding) {
        case false:
            distX = pos.x - pos.x;
            break;
        case true:
            distX = width / 2 - pos.x;
            break;
    }
    angleToMouse = atan2(distY, distX);

    // calculating the vector based on the angle and distance calculated above
    vel1 = p5.Vector.fromAngle(angleToMouse, speedY);
}

function resetGravity() {
    if (speedY < 2 && colliding === false) {
        speedY += height * 0.0001;
        if (pos.y < 50) {
            speedY = 1;
        }
    }
}

function checkAlive() {
    if (pos.y < 700) {
        alive = 1
    } else if (pos.y >= 700) {
        alive = 0
    }
}

function trackScore() {
    if (alive === 1) {
        score = ms / 1000 - lastMs / 1000
        score = round(score, 1)
    } else if (alive === 0) {
        if (score > highscore) {
            highscore = score
            textHighscore.updateValue(highscore)
        }
        score = 'press "space" to respawn'
    }
}

function respawn() {
    pos.x = random(100, 500)
    pos.y = 75
    speedY = 2
    lastMs = ms
}

function keyPressed() {
    if (key === "a") {
        flipperLeft.move();
    } else if (key === "d") {
        flipperRight.move();
    } else if (keyCode === 32 && alive === 0) {
        respawn()
    }
}

function draw() {
    ms = millis()
    colliding = false
    background(255)

    // drawing the level and flippers
    drawLevel()
    flipperLeft.descend()
    flipperRight.descend()
    flipperLeft.show()
    flipperRight.show()

    resetGravity()
    detectCollision()
    calculateVector()
    detectCollision()
    drawBall()
    checkAlive()
    trackScore()
    textScore.updateValue(score)
    textScore.show()
    textHighscore.show()
}