function setup() {

    createCanvas(400,400);
    background(2,44,86,255);

    for(var x = 0; x < width+1; x++) {
      line(x, 0, x, width);
      stroke(x);

    }    

    var circleSize = 3;

     for(var i = circleSize/2; i < width; i = i + circleSize*1.25){
       for(var n = circleSize/2; n < height; n = n + circleSize*1.25) {
        fill (118,181,197)
        noStroke(0);
         ellipse(i, n, circleSize);

       }

      }

    var circleSize = 6;

     for(var i = circleSize/2; i < width; i = i + circleSize*1.25){
       for(var n = circleSize/2; n < height; n = n + circleSize*1.25) {
        fill (238,244,240,255)
        noStroke(0);
        rotate (PI/13);
         ellipse(i, n, circleSize);

    
  

    }


    }
   
  

  }
function draw () {


}