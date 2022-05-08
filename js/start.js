//FADE-IN ANIM
window.onload = function() {
    document.getElementById("fade_in").style.opacity = "1";
    document.getElementById("text").style.opacity = "1";
    document.getElementById("down").style.opacity = "1";

}

document.addEventListener('keydown', function(e) {
    if(e.code == "Space") {
        console.log("this is my space!");
        startAnim();

    }
});


function startAnim() {
    document.getElementById("lever_anim1").style.display = "none";
    document.getElementById("lever_anim2").style.display = "none";
    document.getElementById("lever_up").style.display = "none";

    document.getElementById("lever_down").style.display = "block";
    document.getElementById("spark1").style.display = "block";
    

    // document.getElementById("rockets").style.display = "none";

    setTimeout(() => {
        document.getElementById("spark1").style.display = "none";
        document.getElementById("spark2").style.display = "block";

        setTimeout(() => {
            document.getElementById("spark2").style.display = "none";
            document.getElementById("spark3").style.display = "block";

            setTimeout(() => {
                document.getElementById("spark3").style.display = "none";
                document.getElementById("rocket").classList.add("shake");

                var rock_lau = document.getElementById("rocket_launching");
                rock_lau.style.visibility = "visible";
                rock_lau.classList.add("launch"); 

                document.getElementById("smoke").style.opacity = ".6";
                document.getElementById("black").style.opacity = "1";

                document.getElementById("rocket_wired").style.display = "none";

                setTimeout(() => {
                    document.location.href = "cockpit.html";
                }, 800);

            }, 180);

        }, 150);

        

    }, 150);
    
}




// document.addEventListener("keydown", function(event) {
//     if(event = 32){console.log("this is my space!")}
//   })

const body = document.getElementById("text_content");

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset);
  y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
  console.log("y: "+y);

  //SWITCH TEXT ON SCROLL
  switch(true) {
    case (y>800):
        document.getElementById("down").setAttribute("href","../html/start.html#a3")
        hideText();
        document.getElementById("t3").style.opacity = "1";
        break;

    case (y>400):   
        document.getElementById("down").setAttribute("href","../html/start.html#a2")
        hideText();
        document.getElementById("t2").style.opacity = "1";
        break;

    case (y>-1): 
        document.getElementById("down").setAttribute("href","../html/start.html#a1")
        hideText();
        document.getElementById("t1").style.opacity = "1";
        break;
  }

  //FADE OUT STARS
  if(y>2000) {
    var bg_opac = 1-((y-1600)/1000);
    console.log("opac: "+bg_opac);
    if(bg_opac>0) {
        document.getElementById("background").style.opacity = bg_opac;
    }
    
  }
  
})

function hideText() {
    for (let i=1; i<4; i++) {
        document.getElementById("t"+i).style.opacity = "0";
    }
}