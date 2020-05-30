class Snake {
    constructor() {
      this.body = [];
      this.body[0] = createVector(floor(w / 2), floor(h / 2));
      this.xdir = 0;
      this.ydir = 0;
      this.len = 0;
    }
  
    setDir(x, y) {
      this.xdir = x;
      this.ydir = y;
    }
  
    update() {
      let head = this.body[this.body.length - 1].copy();
      this.body.shift();
      head.x += this.xdir;
      head.y += this.ydir;
      this.body.push(head);
    }
  
    grow() {
      let head = this.body[this.body.length - 1].copy();
      this.len++;
      this.body.push(head);
    }
  
    endGame() {
      let x = this.body[this.body.length - 1].x;
      let y = this.body[this.body.length - 1].y;
      if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
        return true;
      }
      for (let i = 0; i < this.body.length - 1; i++) {
        let part = this.body[i];
        if (part.x == x && part.y == y) {
          return true;
        }
      }
      return false;
    }
  
    eat(pos) {
      let x = this.body[this.body.length - 1].x;
      let y = this.body[this.body.length - 1].y;
      if (x == pos.x && y == pos.y) {
        this.grow();
        //text("Score: "+ count, 100, 100);
       //  count = count + Math.round(World.frameRate/60);
      // count = count+1
        // count.display
        score++;
        //textSize(1)
        //text("Score:" + score, 5, 2)
        return true;

        
      }
      return false;
    }
  
    show() {
      for (let i = 0; i < this.body.length; i++) {
        fill(0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1);
      }
    }

    
    
  
  }