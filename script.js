var _ = require('lodash');
console.log(_);

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array,3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomGradient(){
    var rand1 = colorRandomize();
    var rand2 = colorRandomize();
    
    body.style.background = "linear-gradient(to right, "
    + rand1
    + ", "
    + rand2
    + ")";

    css.textContent = body.style.background + ";";
}

function colorRandomize(){
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


button.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);