let r = 0;
let g = 0;
let b = 0;
let color = "rgb(" + r + "," + g + "," + b + ")";

//style for color
let show_color = document.getElementById("Color");

show_color.style.width = "500px";
show_color.style.height = "100px";
show_color.style.backgroundColor = color;

//style for message
let message = document.getElementById("message");

message.style.height = "30px";
message.style.width = "500px";
message.style.border = "2px";
message.style.borderStyle = "solid";
message.style.borderColor = "#FF0000";
message.style.textAlign = "center";
message.innerHTML = "current color: rgb(" + r + "," + g + "," + b + ")";

//click red
function change_red(event){
    let response = event.target.getAttribute("data-response");
    r = r + parseInt(response);
    show_color.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    message.innerHTML = "current color: rgb(" + r + "," + g + "," + b + ")";
}

//click green
function change_green(event){
    let response = event.target.getAttribute("data-response");
    g = g + parseInt(response);
    show_color.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    message.innerHTML = "current color: rgb(" + r + "," + g + "," + b + ")";
}

//click blue
function change_blue(event){
    let response = event.target.getAttribute("data-response");
    b = b + parseInt(response);
    show_color.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    message.innerHTML = "current color: rgb(" + r + "," + g + "," + b + ")";
}