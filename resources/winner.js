//Save winner via jquery AJAX call saveWins.php

function saveWin(winner) {
    var dat = {'winner':winner};
    $.ajax({
        type:'POST',
        url:'saveWin.php',
        cache: false,
        data:dat,
        complete: function (response) {
            $('#output').html('Game saved!');
            //console.log(response.responseText);
        },
        error: function () {
            $('#output').html('Bummer: There was an error saving!');
        }
    });
    return false;
}

//AJAX call to load the GAMES.xml
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            winTable(xhttp);
        }
    };
    xhttp.open("GET", "games.xml", true);
    xhttp.send();
}

//Load the scores xml file contents to the page
function winTable(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>X wins</th><th>O wins</th><th>Draws</th></tr>";
    var x = xmlDoc.getElementsByTagName("GAMES");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("xwin")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("owin")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("draw")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("winsTable").innerHTML = table;
}