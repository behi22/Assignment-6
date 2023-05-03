let canvas = document.getElementById("shape");
let ctx = canvas.getContext("2d");
let toRad = function(angle){
    let rad = angle*Math.PI/180;
    return rad
}

let isValidNumber = function(inputNum, validMin, validMax){
    let type = typeof(inputNum);
    if(type == NaN){
        return false
    } else {
    if(inputNum >= validMin && inputNum <= validMax){
        return true
    } else {
        return false
        }
    }
}

let drawObject = function(x, y){
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x,y,60,0,2*Math.PI);
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x,y,60,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x,y-20,20,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x-18,y+12,20,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+18,y+12,20,0,2*Math.PI);
    ctx.fill();
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x,y,9,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x,y-24,15,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+22,y+14,15,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x-22,y+14,15,0,2*Math.PI);
    ctx.fill();
}

let num1 = 0, num2 = 0;

for(;;){ 
    num1 =+ prompt("How many symbols would you like?(1 to 10)");
    let bool = isValidNumber(num1,1,10);
    if(bool == true){
        break;
    } else {
        alert("Error:Input Not Valid. Try Again.");
    }
}

for(;;){ 
    num2 =+ prompt("What is your distance?(0 to 200)");
    let bool = isValidNumber(num2,0,200);
    if(bool == true){
        break;
    } else {
        alert("Error:Input Not Valid. Try Again.");
    }
}

let deg = 360/num1;
let radian = toRad(deg);
ctx.translate(300, 300);
for(let i=0;i<num1;i++){
    drawObject(num2, 0);
    ctx.rotate(radian);
}