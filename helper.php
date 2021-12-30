<?php


$env = require_once("env.php");
$apihome = $env["apiUrl"];

function isAuthed()
{
    /*
    * checks if user is already logged in 
    */
    global $apihome;

    $url = $apihome."authenticate";

    $res = (array)@file_get_contents($url);

    return $res["message"] == "success";
}

?>