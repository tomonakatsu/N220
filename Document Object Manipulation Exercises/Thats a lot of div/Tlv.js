//let Tlv = document.getElementById("alot");
let w = 20;
let h = 20;

for(i = 0; i < 100; i++){
    let Tlv = document.querySelector("#alot");

    let Red = Math.random() * 255;
    let Green = Math.random() * 255;
    let Blue = Math.random() * 255;
    let el = document.createElement("div");

    el.style.width = w + "px";
    el.style.height = h + "px";
    el.style.float = "left";
    el.style.backgroundColor = "rgb(" + Red + "," + Green + "," + Blue + ")";
    
    Tlv.appendChild(el);
}
