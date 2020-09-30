
var displayUnitCircle = function(){
    let canvas = document.getElementById("unitCircleViz_01");
    canvas.width = 256;
    canvas.height = 256;
    let context = canvas.getContext('2d');

    context.fillStyle = "#3CF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    // y axis
    context.moveTo(128,0);
    context.lineTo(128,256);
    // x axis
    context.moveTo(0,128);
    context.lineTo(256,128);
    // unit circle
    context.arc(128,128,64,0, 2*Math.PI);
    context.stroke();

}


window.addEventListener('DOMContentLoaded', (event) => {
    displayUnitCircle();    
});