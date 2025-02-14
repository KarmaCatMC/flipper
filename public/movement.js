let gravity;
gravity = p5.Vector.fromAngle(3.14159, 2)
let newDirection
let newVel

function calculatePosition(pos, vel) {
    //console.log('new pos')
    //console.log(vel)
    return pos.add(vel)
}

function calculateVelocity(colDirection, vel) {
    switch (colDirection) {
        case 'left':
            if (vel.heading() > 3.14 && vel.heading() < 4.71) {
                newDirection = vel.heading() + 1.57
            } else if (vel.heading() > 1.57 && vel.heading() < 3.14) {
                newDirection = vel.heading() - 4.71
            }break;
        case 'right':
            if (vel.heading() > 4.71 && vel.heading() < 6.28) {
                newDirection = vel.heading() - 1.57
            } else if (vel.heading() > 0 && vel.heading() < 1.57) {
                newDirection = vel.heading() + 1.57
            }break;
        case 'bottom':
            if (vel.heading() > 0 && vel.heading() < 1.57) {
                newDirection = vel.heading() + 4.71
            } else if (vel.heading() > 1.57 && vel.heading() < 3.14) {
                newDirection = vel.heading() + 1.57
            }
            break;
        case 'top':
            if (vel.heading() > 4.71 && vel.heading() < 6.28) {
                newDirection = vel.heading() - 4.71
            } else if (vel.heading() > 3.14 && vel.heading() < 4.71) {
                newDirection = vel.heading() - 1.57
            }
            break;
        case 'leftTop':
            if (vel.heading() > 215 && vel.heading() < 310) {
                newDirection = vel.heading() - 4.71
            } else if (vel.heading() > 215 && vel.heading() < 310) {
                newDirection = vel.heading() - 1.57
            }break;
        case 'rightTop':
            if (vel.heading() > 225 && vel.heading() < 315) {
                newDirection = vel.heading() - 1.57
            } else if (vel.heading() > 315 && vel.heading() < 6.28) {
                newDirection = vel.heading() - 4.71
            } else if (vel.heading() > 0 && vel.heading() < 45) {
                newDirection = vel.heading() + 1.57
            }break;
        case 'leftBottom':
            if (vel.heading() > 135 && vel.heading() < 225) {
                newDirection = vel.heading() + 1.57
                console.log(newDirection)
            } else if (vel.heading() > 45 && vel.heading() < 135) {
                newDirection = vel.heading() - 4.71
                console.log(newDirection)
            }break;
        case 'rightBottom':
            if (vel.heading() > 45 && vel.heading() < 315) {
                newDirection = vel.heading() + 1.57
            } else if (vel.heading() > 315 && vel.heading() < 6.28) {
                newDirection = vel.heading() -1.57
            } else if (vel.heading() > 0 && vel.heading() < 45) {
                newDirection = vel.heading() - 4.71
            }break;
    }
    //console.log(newDirection);
    newVel = p5.Vector.fromAngle(newDirection, vel.mag() * 0.9)
    newVel.limit(10)
    vel.set(newVel)
    return vel
}