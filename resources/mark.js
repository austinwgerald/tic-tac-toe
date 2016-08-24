
function mark(id){
    if(eog == false){
        var rindex = id.substring(1,2);
        var cindex = id.substr(3,4);

        if(grid[rindex][cindex] == 0){
            var canvas = document.getElementById(id);
            var ctx = canvas.getContext("2d");

            if(xturn == true) {
                drawX(ctx);
                document.getElementById('announce').innerHTML = "O's turn!";
                grid[rindex][cindex] = 1;
            }
            else{
                drawO(ctx);
                document.getElementById('announce').innerHTML = "X's turn!";
                grid[rindex][cindex] = 2;
            }
            xturn = !xturn;
            status();
        } else{
            if(xturn == true){
                document.getElementById('announce').innerHTML = "Invalid square. Try again X!";
            }else{
                document.getElementById('announce').innerHTML = "Invalid square. Try again O!";
            }
        }
    }
}