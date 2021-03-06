class Bob {
    constructor(x, y, radiusX) {
        

        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 2.0,

        }
        this.body = Bodies.circle(x, y, radiusX, options);
        this.x = x;
        this.y = y;
        this.radiusX = radiusX;
        this.radiusY = radiusX;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255, 0, 255);
        ellipse(0, 0, this.radiusX, this.radiusY);
        pop();
    }
};