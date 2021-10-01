let PP = document.getElementById("peakpixels");
let w = 100;
let h = 100;
PP.style.backgroundColor = "#00FF00";
PP.style.width = w + "px";
PP.style.height = h + "px";

function changesize() {
    w = w * 1.1;
    h = h * 1.1;
    PP.style.width = w + "px";
    PP.style.height = h + "px";
}