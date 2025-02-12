// import {vel1} from "./sketch.js"

function detectCollision() {
    colLeft = get(pos.x - 15, pos.y);
    if (colLeft[0] === 0 && colLeft[1] === 0) {
        pos.x += 1;
        vel2.sub(0.35,0,0)
        colliding = true;
        if (colLeft[2] === 255) {
            colPoint = "left";
            if (pos.x < 300) {
                flipperLeft.handleFlipper();
            } else if (pos.x < 300) {
                flipperRight.handleFlipper();
            }
        }
    }
    colRight = get(pos.x + 15, pos.y);
    if (colRight[0] === 0 && colRight[1] === 0) {
        pos.x -= 1;
        vel2.set(-0.35,0,0)
        colliding = true;
        if (colRight[2] === 255) {
            colPoint = "right";
            if (pos.x < 300) {
                flipperLeft.handleFlipper();
            } else if (pos.x < 300) {
                flipperRight.handleFlipper();
            }
        }
    }
    colTop = get(pos.x, pos.y - 15);
    if (colTop[0] === 0 && colTop[1] === 0) {
        pos.y += 1;
        vel2.set(0,-0.35,0)
        colliding = true;
        if (colTop[2] === 255) {
            colPoint = "top";
            if (pos.x < 300) {
                flipperLeft.handleFlipper();
            } else if (pos.x < 300) {
                flipperRight.handleFlipper();
            }
        }
    }
    colBottom = get(pos.x, pos.y + 15);
    if (colBottom[0] === 0 && colBottom[1] === 0) {
        pos.y -= 1;
        vel2.set(0,0.35,0)
        colliding = true;
        if (colBottom[2] === 255) {
            colPoint = "bottom";
            if (pos.x < 300) {
                flipperLeft.handleFlipper();
            } else if (pos.x > 300) {
                flipperRight.handleFlipper();
            }
        }
    }
    colTopLeft = get(pos.x - 10, pos.y - 10);
    if (colTopLeft[0] === 0 && colTopLeft[1] === 0) {
        pos.x += 1;
        pos.y += 1;
        vel2.set(-0.35,-0.35,0)
        colliding = true;
        if (colTopLeft[2] === 255) {
            colPoint = "topLeft";
            if (pos.x < 300) {
                flipperLeft.handleFlipper();
            } else if (pos.x < 300) {
                flipperRight.handleFlipper();
            }
        }
    }
    colTopRight = get(pos.x + 10, pos.y - 10);
    if (colTopRight[0] === 0 && colTopRight[1] === 0) {
        pos.x -= 1;
        pos.y += 1;
        vel2.set(0.35,-0.35,0)
        colliding = true;
        if (colTopRight[2] === 255) {
            colPoint = "topRight";
            if (pos.x < 300) {
                flipperLeft.handleFlipper();
            } else if (pos.x < 300) {
                flipperRight.handleFlipper();
            }
        }
    }
    colBotRight = get(pos.x + 10, pos.y + 10);
    if (colBotRight[0] === 0 && colBotRight[1] === 0) {
        pos.y -= 1;
        pos.x -= 1;
        vel2.set(0.35,0.35,0)
        colliding = true;
        if (colBotRight[2] === 255) {
            colPoint = "bottomRight";
            if (pos.x < 300) {
                flipperLeft.handleFlipper();
            } else if (pos.x < 300) {
                flipperRight.handleFlipper();
            }
        }
    }
    colBotLeft = get(pos.x - 10, pos.y + 10);
    if (colBotLeft[0] === 0 && colBotLeft[1] === 0) {
        pos.y -= 1;
        pos.x += 1;
        vel2.set(-0.35,0.35,0)
        colliding = true;
        if (colBotLeft[2] === 255) {
            colPoint = "bottomLeft";
            if (pos.x < 300) {
                flipperLeft.handleFlipper();
            } else if (pos.x < 300) {
                flipperRight.handleFlipper();
            }
        }
    }
}