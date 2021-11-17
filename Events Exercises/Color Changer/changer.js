let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
console.log(first);

let size = 200;
let margin = 5;
let color = "#808080";

first.style.height = size + "px";
first.style.width = size + "px";
first.style.backgroundColor = color;
first.style.float = "left";
first.style.margin = margin + "px";

second.style.height = size + "px";
second.style.width = size + "px";
second.style.backgroundColor = color;
second.style.float = "left";
second.style.margin = margin + "px";

third.style.height = size + "px";
third.style.width = size + "px";
third.style.backgroundColor = color;
third.style.float = "left";
third.style.margin = margin + "px";

function doThing(event){
    let ind_color = event.target.getAttribute("data-response");
    event.target.style.backgroundColor = ind_color;
}