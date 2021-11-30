let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let order = [first, second, third];

let size = 200;
let margin = 5;
let color = "#808080";

for(let i = 0; i < order.length; i++){
    order[i].style.height = size + "px";
    order[i].style.width = size + "px";
    order[i].style.backgroundColor = color;
    order[i].style.float = "left";
    order[i].style.margin = margin + "px";
}

function doThing(event){
    let ind_color = event.target.getAttribute("data-response");
    event.target.style.backgroundColor = ind_color;
}