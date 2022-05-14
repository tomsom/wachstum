document.getElementById("rocket").addEventListener('click', function(e) {
    document.location.href = "cockpit.html";
});


//HOVER OVER BRAKET

var prev = document.getElementById("prev");
var next = document.getElementById("next");

var box = document.getElementById("boxDiv");


prev.addEventListener('mouseenter', function(e) {
    box.style.transition = ".4s";
    box.style.transform = "rotateY(-10deg)";
});
prev.addEventListener('mouseleave', function(e) {
    box.style.transform = "rotateY(0deg)";
});
prev.addEventListener('click', function(e) {
    plusSlides(-1);
});

next.addEventListener('mouseenter', function(e) {
    box.style.transition = ".4s";
    box.style.transform = "rotateY(10deg)";
});
next.addEventListener('mouseleave', function(e) {
    box.style.transform = "rotateY(0deg)";
});
next.addEventListener('click', function(e) {
    plusSlides(1);
});

//ARROW KEYS TO SWITCH SLIDE
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       // left arrow
       plusSlides(-1);
    }
    else if (e.keyCode == '39') {
       // right arrow
       plusSlides(1);
    }

}


// SLIDESHOW //

// DIV WHERE BG-IMAGE IS SET
// var picFrame = document.getElementById('pic');
// CURRENT SLIDE/PICTURE
var slideIndex = 1;
var prevSlide = 0;
// HOLDS NAV/INDEX DOTS
var dotHolder = document.getElementById("quickswitch");
// DOT ARRAY
var dots = [];

var slide = [];

var slideAmnt = 3;

function getSlides() {
    for(let i=1; i<slideAmnt+1; i++) {
        slide[i] = document.getElementById("s" + i);
        // slide[i].style.display = "none";
    }
}

prepareSlideshow(1);

// CREATES DOTS AFTER EVERY STAGE CHANGE
function prepareSlideshow(stg) {

    getSlides();
    
    // remove all current dots
    document.querySelectorAll('.dot').forEach(e => e.remove());
    dots = [];

    // create new dots
    for (let i = 0; i < slideAmnt; i++) {
        console.log("loop:"+i)

        dots[i] = document.createElement("SPAN");
        dots[i].classList.add("dot");
        dots[i].onclick = function() {currentSlide(i+1);}
        dotHolder.appendChild(dots[i]);
    }

    slideIndex = 1;
    showSlides(slideIndex);

}

// Next/previous controls
function plusSlides(n) {
    if((slideIndex + n) !== 0 && (slideIndex + n) <= slideAmnt) {
        showSlides(slideIndex += n);;
    }
    
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

var timer;
function showSlides(n) {


    if (n > slideAmnt) {slideIndex = 1}
    if (n < 1) {slideIndex = slideAmnt}


    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if(prevSlide != 0) {}
    cubeAnim(prevSlide, n);

    

    setTimeout(function() {
        for(let i = 1; i < slideAmnt + 1; i++) {
        slide[i].style.visibility = "hidden";
    }
        slide[slideIndex].style.visibility = "visible";
    }, 200);
    


    console.log("si: "+slideIndex);
    dots[slideIndex-1].className += " active";
    prevSlide = n;

} 

function cubeAnim(prev, n) {

    box.style.transition = ".4s";

    if(prev < n) {
       box.style.transform = "rotateY(180deg)";
    } if(prev > n) {
        box.style.transform = "rotateY(-180deg)";
    }
    
    setTimeout(function() {
            box.style.transition = "0s";
            box.style.transform = "rotateY(0deg)";
    }, 200);
}