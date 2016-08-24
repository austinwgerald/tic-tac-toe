
/**
 * Created by Austin Gerald on 3/15/2016.
 Current Latest Build v2.0 - 8/23/16
 */

var xturn = true;
var grid =[
    [0,0,0],
    [0,0,0],
    [0,0,0]];           //empty=0, x=1, and o=2 in the matrix.
var eog = false;            //end of game flag

function init(){
    clear();
    xturn = true;
    document.getElementById('announce').innerHTML = "X goes first!";
    document.getElementById("grid").className = "";
    grid =[[0,0,0],[0,0,0],[0,0,0]];
    eog = false;
    loadDoc();
    document.getElementById("endOfGameSplash").style.visibility = "hidden";
    document.getElementById("winStrike").style.visibility = "hidden";
}