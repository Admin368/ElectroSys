<?php

    require_once("helper.php");

    if(!isAuthed())
    {
        header("location: login.php");
    }
?>