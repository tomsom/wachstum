//FADE-IN ANIM
window.onload = function() {
    document.getElementById("fade_in").style.opacity = "1";
    document.getElementById("text").style.opacity = "1";
    document.getElementById("down").style.opacity = "1";
}

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