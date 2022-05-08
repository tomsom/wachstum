var kapi = document.getElementById("kapitalus");
var vari = document.getElementById("varicrementer");
var subs = document.getElementById("subsistur");

var sel = "def";

kapi.addEventListener('mouseenter', e => {setTrail("kapi")});
kapi.addEventListener('mouseleave', e => { setTrail(sel);});
kapi.addEventListener('click', e => { sel = "kapi"; });


vari.addEventListener('mouseenter', e => { setTrail("vari")});
vari.addEventListener('mouseleave', e => { setTrail(sel);});
vari.addEventListener('click', e => { sel = "vari"; });


subs.addEventListener('mouseenter', e => {setTrail("subs")});
subs.addEventListener('mouseleave', e => { setTrail(sel);});
subs.addEventListener('click', e => { sel = "subs"; });

document.getElementById("empty_click").addEventListener('click', e => {
    sel = "def";
    setTrail(sel);
});


function setTrail(trail) {
    document.getElementById("def_trail").style.opacity = "0";
    document.getElementById("vari_trail").style.opacity = "0";
    document.getElementById("kapi_trail").style.opacity = "0";
    document.getElementById("subs_trail").style.opacity = "0";

    document.getElementById(trail + "_trail").style.opacity = "1";

    document.getElementById("d_def").style.opacity = "0";
    document.getElementById("d_kapi").style.opacity = "0";
    document.getElementById("d_vari").style.opacity = "0";
    document.getElementById("d_subs").style.opacity = "0";

    document.getElementById("d_" + trail).style.opacity = "1";
}


function setDisplay(display) {
    document.getElementById("d_def").style.opacity = "0";
    document.getElementById("d_kapi").style.opacity = "0";
    document.getElementById("d_vari").style.opacity = "0";
    document.getElementById("d_subs").style.opacity = "0";

    document.getElementById("d_" + display).style.opacity = "1";
}