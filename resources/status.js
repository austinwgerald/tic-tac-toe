
function status(){
    //printGrid();
    var winner = 'owin';

    //Strike-through winner canvas
    var winStrike = document.getElementById("winStrike");
    var ctx = winStrike.getContext("2d");
    ctx.lineWidth = 23;
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";
    ctx.beginPath();

    //Row 0 horizontal win
    if(grid[0][0] == grid[0][1] && grid[0][0]== grid[0][2] && grid[0][0] != 0){
        if(grid[0][0] == 1){
            document.getElementById('announce').innerHTML = "X wins!";
            winner = 'xwin';
        }else{
            document.getElementById('announce').innerHTML = "O wins!";
        }
        ctx.moveTo(20,80);
        ctx.lineTo(580,80);
        ctx.stroke();
        endOfGame(winner);
    }
    //Row 1 horizontal win
    else if(grid[1][0] == grid[1][1] && grid[1][0]== grid[1][2] && grid[1][0] != 0){
        if(grid[1][0] == 1){
            document.getElementById('announce').innerHTML = "X wins!";
            winner = 'xwin';
        }else{
            document.getElementById('announce').innerHTML = "O wins!";
        }
        ctx.moveTo(20,280);
        ctx.lineTo(580,280);
        ctx.stroke();
        endOfGame(winner);
    }
    //Row 2 horizontal win
    else if(grid[2][0] == grid[2][1] && grid[2][0]== grid[2][2] && grid[2][0] != 0){
        if(grid[2][0] == 1){
            document.getElementById('announce').innerHTML = "X wins!";
            winner = 'xwin';
        }else{
            document.getElementById('announce').innerHTML = "O wins!";
        }
        ctx.moveTo(20,510);
        ctx.lineTo(580,510);
        ctx.stroke();
        endOfGame(winner);
    }
    //Row 1 verical win
    else if(grid[0][0] == grid[1][0] && grid[0][0]== grid[2][0] && grid[0][0] != 0){
        if(grid[0][0] == 1){
            document.getElementById('announce').innerHTML = "X wins!";
            winner = 'xwin';
        }else{
            document.getElementById('announce').innerHTML = "O wins!";
        }
        ctx.moveTo(85,20);
        ctx.lineTo(85,580);
        ctx.stroke();
        endOfGame(winner);
    }
    //Row 2 verical win
    else if(grid[0][1] == grid[1][1] && grid[0][1]== grid[2][1] && grid[0][1] != 0){
        if(grid[0][1] == 1){
            document.getElementById('announce').innerHTML = "X wins!";
            winner = 'xwin';
        }else{
            document.getElementById('announce').innerHTML = "O wins!";
        }
        ctx.moveTo(320,20);
        ctx.lineTo(320,580);
        ctx.stroke();
        endOfGame(winner);
    }
    //Row 3 verical win
    else if(grid[0][2] == grid[1][2] && grid[0][2]== grid[2][2] && grid[0][2] != 0){
        if(grid[0][2] == 1){
            document.getElementById('announce').innerHTML = "X wins!";
            winner = 'xwin';
        }else{
            document.getElementById('announce').innerHTML = "O wins!";
        }
        ctx.moveTo(510,20);
        ctx.lineTo(510,580);
        ctx.stroke();
        endOfGame(winner);
    }
    //Left to right down cross stroke win
    else if(grid[0][0] == grid[1][1] && grid[0][0]== grid[2][2] && grid[0][0] != 0){
        if(grid[0][0] == 1){
            document.getElementById('announce').innerHTML = "X wins!";
            winner = 'xwin';
        }else{
            document.getElementById('announce').innerHTML = "O wins!";
        }
        ctx.moveTo(20,20);
        ctx.lineTo(575,575);
        ctx.stroke();
        endOfGame(winner);
    }
    //Right to left cross win
    else if(grid[0][2] == grid[1][1] && grid[0][2]== grid[2][0] && grid[0][2] != 0){
        if(grid[0][2] == 1){
            document.getElementById('announce').innerHTML = "X wins!";
            winner = 'xwin';
        }else{
            document.getElementById('announce').innerHTML = "O wins!";
        }
        ctx.moveTo(580,20);
        ctx.lineTo(20,580);
        ctx.stroke();
        endOfGame(winner);
    }

    //Draw
    var draw = true;
    for(r=0; r<3;r++){
        for(c=0;c<3;c++){
            if(grid[r][c] == 0){
                draw = false;
            }
        }
    }
    if(draw == true){
        document.getElementById('announce').innerHTML = "It's a Draw!";
        endOfGame('draw');
    }
    ctx.closePath();
}

function endOfGame(winner){
    eog = true;
    document.getElementById("grid").className = "blur";
    document.getElementById("endOfGameSplash").style.visibility = "visible";
    document.getElementById("winStrike").style.visibility = "visible";

    //Save winner function call
    saveWin(winner);
    //Reload win table
    loadDoc();
}