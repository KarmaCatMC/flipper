let gravity;
gravity = p5.Vector.fromAngle(180, 2)
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
            if (vel.heading() > 180 && vel.heading() < 270) {
                newDirection = vel.heading() + 90
            } else if (vel.heading() > 90 && vel.heading() < 180) {
                newDirection = vel.heading() - 270
            }break;
        case 'right':
            if (vel.heading() > 270 && vel.heading() < 360) {
                newDirection = vel.heading() - 90
                console.log('-90')
            } else if (vel.heading() > 0 && vel.heading() < 90) {
                newDirection = vel.heading() + 90
                console.log('+90')
            }break;
        case 'bottom':
            if (vel.heading() > 0 && vel.heading() < 90) {
                newDirection = vel.heading() + 270
            } else if (vel.heading() > 90 && vel.heading() < 180) {
                newDirection = vel.heading() + 90
            }
            break;
        case 'top':
            if (vel.heading() > 270 && vel.heading() < 360) {
                newDirection = vel.heading() - 270
            } else if (vel.heading() > 180 && vel.heading() < 270) {
                newDirection = vel.heading() - 90
            }
            break;
        case 'leftTop':
            console.log(angleMode())
            console.log(vel.heading())
            if (vel.heading() > 215 && vel.heading() < 310) {
                newDirection = vel.heading() - 270
            } else if (vel.heading() > 215 && vel.heading() < 310) {
                newDirection = vel.heading() - 90
            }break;
        case 'rightTop':
            console.log(angleMode())
            console.log(vel.heading())
            if (vel.heading() > 225 && vel.heading() < 315) {
                newDirection = vel.heading() - 90
            } else if (vel.heading() > 315 && vel.heading() < 360) {
                newDirection = vel.heading() - 270
            } else if (vel.heading() > 0 && vel.heading() < 45) {
                newDirection = vel.heading() + 90
            }break;
        case 'leftBottom':
            console.log(angleMode())
            console.log(vel.heading())
            if (vel.heading() > 135 && vel.heading() < 225) {
                newDirection = vel.heading() + 90
                console.log(newDirection)
            } else if (vel.heading() > 45 && vel.heading() < 135) {
                newDirection = vel.heading() - 270
                console.log(newDirection)
            }break;
        case 'rightBottom':
            console.log(angleMode())
            console.log(vel.heading())
            if (vel.heading() > 45 && vel.heading() < 315) {
                newDirection = vel.heading() + 90
            } else if (vel.heading() > 315 && vel.heading() < 360) {
                newDirection = vel.heading() -90
            } else if (vel.heading() > 0 && vel.heading() < 45) {
                newDirection = vel.heading() - 270
            }break;
    }
    //console.log(newDirection);
    newVel = p5.Vector.fromAngle(newDirection, vel.mag() * 0.9)
    newVel.limit(10)
    vel.set(newVel)
    return vel
}