let canvas = document.getElementById("hat-canvas");
let context = canvas.getContext("2d");
let scale = 1;


function initializeHat() {

    context.moveTo(0*scale,100*scale);
    context.strokeStyle = '#493716';
    context.fillStyle = '#493716';
    
    context.lineTo(0*scale,90*scale);
    context.stroke();
    context.lineTo(100*scale,90*scale);
    context.stroke();
    context.lineTo(100*scale,100*scale);
    context.stroke();
    context.lineTo(0*scale,100*scale);
    context.stroke();
    context.fill();
    
    
    context.moveTo(10*scale,80*scale);
    
    context.lineTo(90*scale,80*scale);
    context.stroke();
    context.lineTo(70*scale,35*scale);
    context.stroke();
    context.lineTo(80*scale,0*scale);
    context.stroke();
    context.lineTo(45*scale,32*scale);
    context.stroke();
    context.lineTo(10*scale,80*scale);
    context.stroke();
    context.fill();
    
}

initializeHat();





