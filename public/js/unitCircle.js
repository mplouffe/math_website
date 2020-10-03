
var displayUnitCircle = function(){
    let canvas = document.getElementById("unitCircleViz_01");
    canvas.width = 256;
    canvas.height = 256;
    let context = canvas.getContext('2d');

    context.fillStyle = "#3CF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#000";

    context.beginPath();
    // y axis
    context.moveTo(128,0);
    context.lineTo(128,256);
    // x axis
    context.moveTo(0,128);
    context.lineTo(256,128);
    // unit circle
    context.moveTo(128+64, 128);
    context.arc(128,128,64,0, 2*Math.PI);

    // hash marks
    for (let i = 0; i < 7; i++)
    {
        if (i % 2 != 0)
        {
            continue;
        }
        // x-lines
        context.moveTo(32 + (32*i), 128-5);
        context.lineTo(32 + (32*i), 128+5);
        // x-labels
        context.fillText(-1.5 + (i*0.5), 32 + (32*i) - 5, 128+20);
        // y-lines
        context.moveTo(128-5, 32 + (32*i));
        context.lineTo(128+5, 32 + (32*i));
        // y-labels
        context.fillText(1.5 - (i*0.5), 128+10, 32 + (32*i) + 5);
    }

    context.stroke();
}

var displayPythagorasOnUnitCircle = function(){
    let canvas = document.getElementById("unitCircleViz_03");
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
    context.moveTo(128+64, 128);
    context.arc(128,128,64,0, 2*Math.PI);

    context.moveTo(128,128);
    context.lineTo(128+(64*Math.cos(Math.PI/4)), 128-(64*Math.sin(Math.PI/4)));
    context.lineTo(128+(64*Math.cos(Math.PI/4)), 128);

    context.moveTo(128, 128);
    context.arc(128, 128, 15, -Math.PI/4, 0);
    context.stroke();

    context.font = "13px Consolas";
    context.fillStyle = "#000";
    context.fillText("x", 128 + (64*Math.cos(Math.PI/4))/2, 128 + 10);
    context.fillText("y", 128 + (64*Math.cos(Math.PI/4)) + 5, 128 - (64*Math.cos(Math.PI/4))/2 + 10);
}

var displayPythagoras = function(){
    let canvas = document.getElementById("unitCircleViz_02");
    canvas.width = 256;
    canvas.height = 256;
    let context = canvas.getContext('2d');

    context.fillStyle = "#3CF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // draw triangle
    context.moveTo(64, 64);
    context.lineTo(64, 192);
    context.lineTo(192, 192);
    context.lineTo(64, 64);

    // draw right angle indicator
    context.moveTo(64, 192 - 16);
    context.lineTo(80, 192 - 16);
    context.lineTo(80, 192);

    // labels
    context.font = "13px Consolas";
    context.fillStyle = "#000";
    context.fillText("a", 64 - 20, 128 + 10);
    context.fillText("b", 128 - 10, 192 + 20);
    context.fillText("c", 128 + 8, 128 - 8); 

    context.stroke();
}

window.addEventListener('DOMContentLoaded', (event) => {
    displayUnitCircle();
    displayPythagoras();
    displayPythagorasOnUnitCircle();    
});