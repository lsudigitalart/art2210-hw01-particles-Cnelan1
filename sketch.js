
var particles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
 
}

function draw() {
  background(30);

  for (var i = 0; i < 25; i++){
    p = new Particle()
    particles.push(p)
  }

  for (var i = 0; i < particles.length; i++)
  {
    if (particles[i].alpha > 0){
      particles[i].update()
      particles[i].show()
  
    } else {
      particles.splice(i, 1)
    }
    
  }
  
}
