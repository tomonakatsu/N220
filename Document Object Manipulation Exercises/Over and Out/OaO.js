let OaO = document.getElementById("OaO");

let w = 100;
let h = 100;

OaO.style.backgroundColor = "blue";
OaO.style.width = w + "px";
OaO.style.height = h + "px";

function mouseover() {
    OaO.style.backgroundColor = "black";
}

function mouseout(){
    OaO.style.backgroundColor = "blue";
}