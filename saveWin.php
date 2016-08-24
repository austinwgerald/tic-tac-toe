<?php
/**
 * Created by PhpStorm.
 * User: Austin
 * Date: 3/18/2016
 * Time: 7:02 PM
 */

$winner = $_POST['winner'];
$xml = loadXML();

//Stupid way of differentiating but I don't care at this point
if($winner === 'xwin'){
    $countToInc = $xml->xwin[0] + 1;
    $xml->xwin[0] = $countToInc;
}
if($winner === 'owin'){
    $countToInc = $xml->owin[0] + 1;
    $xml->owin[0] = $countToInc;
}
if($winner === 'draw'){
    $countToInc = $xml->draw[0] + 1;
    $xml->draw[0] = $countToInc;
}
//print_r($xml);
$xml->asXML('games.xml');

function loadXML(){
    if (file_exists('games.xml')) {
        $xml = simplexml_load_file('games.xml');
        return $xml;
    } else {
        exit('Failed to open test.xml.');
    }
}

?>