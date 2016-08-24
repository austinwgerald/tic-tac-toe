function drawX(ctx){
    ctx.beginPath();
    ctx.lineWidth = 23;
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";
    ctx.moveTo(15,15);
    ctx.lineTo(185,182);
    ctx.stroke();
    ctx.moveTo(15,185);
    ctx.lineTo(185,15);
    ctx.stroke();
}

function drawO(ctx){
    var radius = 100;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(radius,radius,87,0,2*Math.PI);
    ctx.stroke();
}