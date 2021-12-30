<?php

    require_once("helper.php");

    if(isAuthed())
    {
        header("location: vote.php");
    }
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <!-- <link href="styles/hover.css" rel="stylesheet"> -->
    <link rel="icon" type="image/x-icon" href="svg/vote.svg">
    <link rel="stylesheet" href="styles/general.css">
    <link rel="stylesheet" href="styles/index.css">
    <link rel="stylesheet" href="styles/login.css">
    <link rel="stylesheet" href="styles/forms.css">

    <title>Home</title>
</head>

<body>
    <div id='index-wrapper' class='site-wrapper'>
        <div class='content-wrapper'>
            <div id='section-1' class='section'>
                <div id='header-wrapper'>
                    <div class='logo-wrapper'>
                        <div id='logo-link' data-link="index.php" class='logo link'></div>
                    </div>
                    <div id='title-wrapper'>
                        <div class='text text-title'>UESTC ISU VOTING</div>
                    </div>
                    <div id='title-subText-wrapper'>
                        <div id='title-subText' class='text'>Vote for your ISU leader</div>
                    </div>
                </div>
            </div>
            <form id='form-login' class='form-section-wrapper'>
                <div id='' class='form-section-1 section input-wrapper'>

                    <div id='input-id' data-input-id='id' class='input-item'>
                        <p id='input-id-title' data-input-id='id' class='input-title text'>ID</p>
                        <input id='input-id-value' data-input-id='id' data-input-error='false' class='input-value text' />
                    </div>
                    <div id='input-password' data-input-id='password' class='input-item'>
                        <p id='input-password-title' data-input-id='password' class='input-title text'>PASSWORD</p>
                        <input id='input-password-value' type='password' data-input-id='password' data-input-error='false' class='input-value text'>
                    </div>

                </div>
                <div id='' class='form-section-2 section'>
                    <input type='submit' value="LOGIN" id='butn-login' data-link='vote.php' class='button button-light text submit' />
                    <!-- <a id='butn-login' data-link='vote.php' class='button button-light text submit'>LOGIN</a> -->
                    <p data-input-id='email' class='text'>
                        Dont have an account?
                        <a id='form-redirect' data-link='register.php' class='link form-link text'>Register</a>
                    </p>

                </div>
            </form>
        </div>
    </div>
</body>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> -->
<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> -->
<!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
<script src="scripts/jquery.js"></script>
<script src="scripts/general.js"></script>
<script src="scripts/login.js"></script>
<script src="scripts/form.js"></script>

</html>