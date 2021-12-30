<?php
// checks if user is already logged in and sends user to the logged in url

$env = require_once("env.php");

$url = $env["apiUrl"]."";
$res = (array)file_get_contents($url);

if($res["message"] == "success")
{
    header("location: vote");

    die();
}

?>