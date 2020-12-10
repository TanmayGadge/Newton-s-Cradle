class Rope {
    constructor(b1, b2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: b1,
            bodyB: b2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        
        World.add(world, this.rope);
        
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var ancor1x = pointA.x;
        var ancor1y = pointA.y;
        var ancor2x = pointB.x+this.offsetX;
        var ancor2y = pointB.y + this.offsetY;

        push();
        stroke(0);
        strokeWeight(3);
        line(ancor1x, ancor1y, ancor2x, ancor2y);
        pop();

    }
};