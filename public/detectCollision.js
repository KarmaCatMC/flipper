// import {vel1} from "./sketch.js"
let colDirection

function detectCollision() {
    colLeft = get(pos.x - 15, pos.y);
    if (colLeft[0] === 0 && colLeft[1] === 0) {
        pos.x += 2;
        colDirection = 'left'
        vel = calculateVelocity(colDirection, vel)
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
        pos.x -= 2;
        colDirection = 'right'
        vel = calculateVelocity(colDirection, vel)
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
        pos.y += 2;
        colDirection = 'top'
        vel = calculateVelocity(colDirection, vel)
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
        pos.y -= 2;
        colDirection = 'bottom'
        vel = calculateVelocity(colDirection, vel)
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
        pos.x += 2;
        pos.y += 2;
        colDirection = 'leftTop'
        vel = calculateVelocity(colDirection, vel)
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
        pos.x -= 2;
        pos.y += 2;
        colDirection = 'rightTop'
        vel = calculateVelocity(colDirection, vel)
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
        pos.y -= 2;
        pos.x -= 2;
        colDirection = 'rightBottom'
        vel = calculateVelocity(colDirection, vel)
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
        pos.y -= 2;
        pos.x += 2;
        colDirection = 'leftBottom'
        vel = calculateVelocity(colDirection, vel)
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
    return vel
}