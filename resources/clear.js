
//Function to clear the grid to empty squares and call clearRect to clear all canvas objects from the page
function clear(){
    for(r=0; r<3;r++){
        for(c=0;c<3;c++){
            id = 'r'+r+'c'+c;

            var canvas = document.getElementById(id);
            var ctx = canvas.getContext("2d");
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
        }
    }
    var cnvs = document.getElementById("winStrike");
    var context = cnvs.getContext("2d");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, cnvs.width, cnvs.height);
    context.restore();
}