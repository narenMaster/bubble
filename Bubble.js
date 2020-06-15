class Bubble {
  
  constructor() { 
    var allInstances = [];
    
    var radius = random(198,300);
    this.x = random(100, width);
    this.y = random(90, height);
    this.width = radius;
    this.height = radius;
    this.color = "black";
    this.velocityX = random(-5, +10);
    this.velocityY= random(-5, +1);
    
    this.display = function() {
      stroke(255);
      fill(this.color);
      ellipse(this.x, this.y, this.width, this.height);
    }
    
    this.move = function() {
      this.x = this.x + this.velocityX;
      this.y = this.y + this.velocityY;
    }
      
  }
}