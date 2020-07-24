console.log("Solution 1 Day 6");
let array = ["white","black", "blue", "pink","yellowgreen", "yellow","red"];
var i = 0;
function changeColor(){
    let color = array[i++];
    document.body.style.backgroundColor = `${color}`;
}

setInterval(changeColor, 5000)

 