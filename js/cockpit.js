//TEST FOR VISITED PLANETS

// sessionStorage.clear();

getVisited();
function getVisited() {
  if(sessionStorage.getItem("kapi_v") == "visited") {
    document.getElementById("kapi_v").innerHTML = "status: visited";
  }
  if(sessionStorage.getItem("vari_v") == "visited") {
    document.getElementById("vari_v").innerHTML = "status: visited";
  }
  if(sessionStorage.getItem("subs_v") == "visited") {
    document.getElementById("subs_v").innerHTML = "status: visited";
  }

  if(sessionStorage.getItem("kapi_v") == "visited" &&
    sessionStorage.getItem("vari_v") == "visited" &&
    sessionStorage.getItem("subs_v") == "visited") {
      console.log("UR journey has endeed!");
      document.getElementById("return").style.transition = ".8s ease-in";
      document.getElementById("return").style.transform = "translateY(-50vh)";
    }
}

document.getElementById("no").addEventListener('click', function(e) {
  document.getElementById("return").style.transform = "translateY(50vh)";
});

document.getElementById("yes").addEventListener('click', function(e) {
  sessionStorage.clear();
  travelTo("end");
});


function markVisited(planet) {
  switch(planet) {
    case "kapi": 
      sessionStorage.setItem("kapi_v", "visited");
      break;
    case "vari":
      sessionStorage.setItem("vari_v", "visited");
      break;
    case "subs":
      sessionStorage.setItem("subs_v", "visited");
      break;
  }
}


fadeIn();
function fadeIn() {
  document.getElementById("radar").focus();
    document.getElementById("black").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("black").style.zIndex = "-1";
    }, 1000);
}

var kapi = document.getElementById("kapitalus");
var vari = document.getElementById("varicrementer");
var subs = document.getElementById("subsistur");

var sel = "def";

kapi.addEventListener('mouseenter', e => { setDisplay("kapi")});
kapi.addEventListener('mouseleave', e => { setDisplay(sel);});
kapi.addEventListener('click', e => { setPlanet("kapi"); });


vari.addEventListener('mouseenter', e => { setDisplay("vari")});
vari.addEventListener('mouseleave', e => { setDisplay(sel);});
vari.addEventListener('click', e => { setPlanet("vari"); });


subs.addEventListener('mouseenter', e => { setDisplay("subs")});
subs.addEventListener('mouseleave', e => { setDisplay(sel);});
subs.addEventListener('click', e => { setPlanet("subs"); });

document.getElementById("radar_scan").addEventListener('click', e => {
    setPlanet("def");
    setDisplay(sel);
});


function setDisplay(planet) {
    document.getElementById("def_trail").style.opacity = "0";
    document.getElementById("vari_trail").style.opacity = "0";
    document.getElementById("kapi_trail").style.opacity = "0";
    document.getElementById("subs_trail").style.opacity = "0";

    document.getElementById(planet + "_trail").style.opacity = "1";

    document.getElementById("d_def").style.opacity = "0";
    document.getElementById("d_kapi").style.opacity = "0";
    document.getElementById("d_vari").style.opacity = "0";
    document.getElementById("d_subs").style.opacity = "0";

    document.getElementById("d_" + planet).style.opacity = "1";
}


function setPlanet(planet) {

    
    sel = planet;
    if(sel == "def") {
        document.getElementById("cockpit_controls").style.display = "block";
        document.getElementById("cockpit_controls_sel").style.display = "none";
    } else {
        document.getElementById("cockpit_controls").style.display = "none";
        document.getElementById("cockpit_controls_sel").style.display = "block";

    }
}





//WARP
//CREDITS(modified):
//https://codepen.io/acarva1/pen/GgbgLe

var myCanvas = document.getElementById('warp');
var ctx = myCanvas.getContext('2d');

myCanvas.width = innerWidth;
myCanvas.height = innerHeight;

window.onresize = function(){
  myCanvas.width = innerWidth;
	myCanvas.height = innerHeight;
};

var Star = function(){
  this.myX = Math.random() * innerWidth;
  this.myY = Math.random() * innerHeight;
  this.myColor = 0;
};

var xMod = 0;
var yMod = 0;
var warpSpeed = 0;

//WARP AND FADE-OUT
document.addEventListener('keydown', function(e) {
    if(e.code == "Space" && sel !== "def") {
        travelTo(sel);
    }
});

function travelTo(where) {
  warpSpeed = 1;
        document.getElementById("black").style.transition = "2s ease-in";
        document.getElementById("black").style.zIndex = "10";
        document.getElementById("black").style.opacity = "1";

        markVisited(where);
    
        setTimeout(() => {
            document.location.href = where + ".html";
        }, 2000);
}

Star.prototype.updatePos = function(){
  var speedMult = 0.02;
  if (warpSpeed) { speedMult = 0.028; }
	this.myX += xMod + (this.myX - (innerWidth/2)) * (speedMult);
	this.myY += yMod + (this.myY - (innerHeight/2)) * (speedMult);
  this.updateColor();
  
  if (this.myX > innerWidth || this.myX < 0) {
    this.myX = Math.random() * innerWidth;
    this.myColor = 0;
  }
  if (this.myY > innerHeight || this.myY < 0) {
    this.myY = Math.random() * innerHeight;
    this.myColor = 0;
  }
  
};

Star.prototype.updateColor = function(){
  if (this.myColor < 255) {
    this.myColor += 5;
  }
  else {
    this.myColor = 255;
  }
};

var starField = [];
var starCounter = 0;

while (starCounter < 200) {
  var newStar = new Star;
  starField.push(newStar);
  starCounter++;
}

function init() {
  myCanvas.focus();
  window.requestAnimationFrame(draw);
}

function draw(event) {
  if (warpSpeed == 0) {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
		ctx.fillRect(0,0,innerWidth,innerHeight);
  }
  for (var i = 0; i < starField.length; i++) {
    ctx.fillStyle = "rgb(" + starField[i].myColor + "," + starField[i].myColor + "," + starField[i].myColor + ")";
    ctx.fillRect(starField[i].myX,starField[i].myY,starField[i].myColor / 128,starField[i].myColor / 128);
    starField[i].updatePos();
  }
  window.requestAnimationFrame(draw);
}

init();