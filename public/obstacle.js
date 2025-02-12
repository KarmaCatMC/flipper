class Obstacle {
    constructor(x, y, obstcColor) {
        this.x = x;
        this.y = y;
        this.c = obstcColor;
    }
}

class Wall extends Obstacle {
    constructor(x, y, endX, endY, obstcColor) {
        super(x, y, obstcColor);
        this.endX = endX;
        this.endY = endY;
    }

    show() {
        stroke(this.c);
        strokeWeight(20);
        line(this.x, this.y, this.endX, this.endY);
    }
}

class Circle extends Obstacle {
    constructor(x, y, obstcColor, size) {
        super(x, y, obstcColor);
        this.size = size;
    }

    show() {
        stroke(this.c);
        strokeWeight(this.size);
        point(this.x, this.y);
    }
}