<?php

if(!isset($isProtected)){ // can't access this file directly

    die("resource not found");

}

// checks if user is already logged in and sends user to the logged in url

$env = require_once("env.php");
$apihome = $env["apiUrl"];

$url = $apihome."authenticate";

$res = (array)file_get_contents($url);

if($res["message"] == "success")
{
    header("location: vote.php");

    die();
}else{

    if($isProtected)
    {
        header("location: login.php");

        die();
    }
}

?>