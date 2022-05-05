const rocket = document.getElementById("rockets");

rocket.addEventListener("mouseenter", function( event ){
    document.getElementById("meta").style.transform = "translateX(25vw)";
    document.getElementById("meta").style.opacity = "0.2";
    document.getElementById("anim").style.opacity = "0.2";
    document.getElementById("anim").style.transform = "scale(.8)";
})

rocket.addEventListener("mouseleave", function( event ){
    document.getElementById("meta").style.transform = "translateX(0)";
    document.getElementById("meta").style.opacity = "1";
    document.getElementById("anim").style.opacity = "1";
    document.getElementById("anim").style.transform = "scale(1)";
})

rocket.addEventListener("click", function(event) {
    document.getElementById("meta").style.opacity = "0";
    document.getElementById("anim").style.opacity = "0";
    document.getElementById("anim").style.visibility = "hidden";
    document.getElementById("meta").style.visibility = "hidden";
    rocket.style.transform = "translateX(-50vw)";

    setTimeout(() => {  document.location.href = "html/start.html"; }, 400);

    
})