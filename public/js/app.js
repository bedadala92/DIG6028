//Calculate scroll for Carey parallax
(function () {
    window.addEventListener('scroll', function (event) {
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        console.log('topDistance = ', topDistance);
        layers = document.querySelectorAll('[data-type=\'parallax\']');
        for (i = 0, len = layers.length; i < len; i++) {
            // if (window.CP.shouldStopExecution(1)) {
            //     break;
            // }
            layer = layers[i];
            depth = layer.getAttribute('data-depth');
            movement = -(topDistance * depth);
            translate3d = 'translate3d(0, ' + movement + 'px, 0)';
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;
        }
        // window.CP.exitedLoop(1);
    });
}.call(this));

// var kenBurns = function(){
//     // we set the 'fx' class on the first image
//     // when the page loads
//     document.getElementById('slideshow').getElementsByTagName('img')[0].className = "fx";
//     // this calls the kenBurns function every
//     // 4 seconds. You can increase or decrease
//     // this value to get different effects
//     window.setInterval(kenBurns, 4000);
//     // the third variable is to keep track of
//     // where we are in the loop
//     // if it is set to *1* (instead of 0)
//     // it is because the first image is styled
//     // when the page loads
//     var images          = document.getElementById('slideshow').getElementsByTagName('img'),
//         numberOfImages  = images.length,
//         i               = 1;
//     function kenBurns() {
//         if(i==numberOfImages){ i = 0;}
//         images[i].className = "fx";
//         // we can't remove the class from the previous
//         // element or we'd get a bouncing effect so we
//         // clean up the one before last
//         // (there must be a smarter way to do this though)
//         if(i===0){ images[numberOfImages-2].className = "";}
//         if(i===1){ images[numberOfImages-1].className = "";}
//         if(i>1){ images[i-2].className = "";}
//         i++;
//     }
// };

// var myIndex = 0;
// carousel();
//
// function carousel() {
//     var i;
//     var x = document.getElementsByTagName('img');
//     for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {
//       myIndex = 1;
//     }
//     x[myIndex-1].style.display = "block";
//     setTimeout(carousel, 2000); // Change image every 2 seconds
// }

//floating language titles
$(document).ready(function(){
  var fullWidth = window.innerWidth;
  var fullHeight = window.innerHeight;
  $(".randomTitle").each(function(index,value){
    $(value).css({"font-size":"75px","position":"relative","left": Math.round(Math.random() * fullWidth/2) + "px", "top":Math.round(Math.random() * fullHeight/2) + "px"});
  });
});

//title animation
var ctx = document.querySelector("canvas").getContext("2d"),
dashlen = 220,
dashOffset = dashLen,
speed = 5,
text = "Palm Leaves",
x=30, i=0;
ctx.font = "35px Libre Baskerville, serif";
ctx.lineWidth = 5;
ctx.lineJoin = "round";
ctx.globalAlpha = 2/3;
ctx.strokeStyle = ctx.fillStyle = "#000";

(function loop() {
      // clear canvas for each frame
      ctx.clearRect(x, 0, 60, 150);

      // calculate and set current line-dash for this char
      ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);

      // reduce length of off-dash
      dashOffset -= speed;

      // draw char to canvas with current dash-length
      ctx.strokeText(txt[i], x, 90);

      // char done? no, the loop
      if (dashOffset > 0) requestAnimationFrame(loop);
      else {

        // ok, outline done, lets fill its interior before next
        ctx.fillText(txt[i], x, 90);

        // reset line-dash length
        dashOffset = dashLen;

        // get x position to next char by measuring what we have drawn
        // notice we offset it a little by random to increase realism
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();

        // lets use an absolute transform to randomize y-position a little
        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());

        // and just cause we can, rotate it a little too to make it even
        // more realistic
        ctx.rotate(Math.random() * 0.005);

        // if we still have chars left, loop animation again for this char
        if (i < txt.length) requestAnimationFrame(loop);
      }
    })();  // just to self-invoke the loop

    //slideshow
    var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
