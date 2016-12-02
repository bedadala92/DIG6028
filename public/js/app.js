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

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByTagName('img');
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
