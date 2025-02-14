let gravity;
gravity = p5.Vector.fromAngle(180, 2)
let newDirection
let newVel

function degToRad(deg) {
    if (deg <= 180) {
        return deg * (PI / 180)
    } else {
        return -PI + ((deg - 180) * (PI / 180))
    }
}


function calculatePosition(pos, vel) {
    return pos.add(vel)
}

function calculateVelocity(colDirection, vel) {
    switch (colDirection) {
        case 'left':
            if (vel.heading() > degToRad(180) && vel.heading() < degToRad(270)) {
                newDirection = vel.heading() + degToRad(90)
            } else if (vel.heading() > degToRad(90) && vel.heading() < degToRad(180)) {
                newDirection = vel.heading() - degToRad(90)
            }
            break;
        case 'right':
            if (vel.heading() > degToRad(270) && vel.heading() < degToRad(360)) {
                newDirection = vel.heading() - degToRad(90)
            } else if (vel.heading() > 0 && vel.heading() < degToRad(90)) {
                newDirection = vel.heading() + degToRad(90)
            }
            break;
        case 'bottom':
            if (vel.heading() > 0 && vel.heading() < degToRad(90)) {
                newDirection = vel.heading() + degToRad(270)
            } else if (vel.heading() > degToRad(90) && vel.heading() < degToRad(180)) {
                newDirection = vel.heading() + degToRad(90)
            }
            break;
        case 'top':
            if (vel.heading() > degToRad(270) && vel.heading() < degToRad(360)) {
                newDirection = vel.heading() - degToRad(270)
            } else if (vel.heading() > degToRad(180) && vel.heading() < degToRad(270)) {
                newDirection = vel.heading() - degToRad(90)
            } else {
                // TODO: introduce correct top handling
                newDirection = -newDirection // hotfix: current fallback for edgecase
            }
            break;
        case 'leftTop':
            if (vel.heading() > 215 && vel.heading() < 310) {
                newDirection = vel.heading() - degToRad(270)
            } else if (vel.heading() > 215 && vel.heading() < 310) {
                newDirection = vel.heading() - degToRad(90)
            }
            break;
        case 'rightTop':
            if (vel.heading() > degToRad(225) && vel.heading() < degToRad(315)) {
                newDirection = vel.heading() - degToRad(70)
            } else if (vel.heading() > degToRad(315) && vel.heading() < degToRad(360)) {
                newDirection = vel.heading() - degToRad(250)
            } else if (vel.heading() > 0 && vel.heading() < degToRad(45)) {
                newDirection = vel.heading() + degToRad(70)
            }
            break;
        case 'leftBottom':
            if (vel.heading() > degToRad(135) && vel.heading() < degToRad(225)) {
                newDirection = vel.heading() + degToRad(90)
            } else if (vel.heading() > degToRad(45) && vel.heading() < degToRad(135)) {
                newDirection = vel.heading() - degToRad(270)
            }
            break;
        case 'rightBottom':
            if (vel.heading() > degToRad(45) && vel.heading() < degToRad(315)) {
                newDirection = vel.heading() + degToRad(90)
            } else if (vel.heading() > degToRad(315) && vel.heading() < degToRad(360)) {
                newDirection = vel.heading() - degToRad(90)
            } else if (vel.heading() > 0 && vel.heading() < degToRad(45)) {
                newDirection = vel.heading() - degToRad(270)
            }
            break;
    }
    newVel = p5.Vector.fromAngle(newDirection, vel.mag() * 0.9)
    newVel.limit(5) // limit magnitude
    vel.set(newVel)
    return vel
}