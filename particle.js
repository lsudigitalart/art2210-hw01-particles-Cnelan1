class Particle {
    constructor(){
        //position, velocity and acceleration
        this.pos = createVector(width / 2, height/2);
        this.vel = createVector(0,0);
        this.acc = p5.Vector.random2D().normalize().mult(0.03);

        this.alpha = 100;
    }
    update(){
        
        var m = map(sin(frameCount * 1000000000000000000
        ), -1, 1, 1.2, 0.7)
        this.acc.mult(m)
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        //color
        this.r = map(this.pos.x, 0, width, 0, 255)
        this.g = map(this.pos.y, 0, height, 0, 255)
        this.b = map(dist(width / 2, height / 2, this.pos.x, 
        this.pos.y), 0, width / 2, 0, 255)

        if (dist(width / 2, height / 2, this.pos.x, this.pos.y) > 400){
            this.alpha -= 2
        }
        

    }
    show(){
        //Square Particles w/ Opacity
        noStroke()
        fill(this.r, this.g, this.b, this.alpha)
        rect(this.pos.x, this.pos.y, 5)
    }
}

