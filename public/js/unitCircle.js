
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
        context.moveTo(32 + (32*i), 128-5);
        context.lineTo(32 + (32*i), 128+5);

        context.fillText(-1.5 + (i*0.5), 32 + (32*i) - 5, 128+20);

        context.moveTo(128-5, 32 + (32*i));
        context.lineTo(128+5, 32 + (32*i));

        context.fillText(-1.5 + (i*0.5), 128+10, 32 + (32*i) + 5);
    }

    context.stroke();
}

var displayPythagoras = function(){
    let canvas = document.getElementById("unitCircleViz_02");
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


window.addEventListener('DOMContentLoaded', (event) => {
    displayUnitCircle();
    displayPythagoras();    
});