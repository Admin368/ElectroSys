
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
    <link rel="stylesheet" href="styles/vote.css">
    <link rel="stylesheet" href="styles/results.css">

    <title>Vote</title>
</head>

<body>
    <div id='select-wrapper' class='site-wrapper'>
        <div class='content-wrapper'>
            <div class='topBar'>
                <div class='topBar-logo-wrapper link'>
                    <div id='logo-link' data-link="index.php" class='topBar-logo'></div>
                    <div class='topBar-logo-title text'>ISU VOTER</div>
                </div>
                <div class='topBar-sandwich-wrapper'>
                    <div class='topBar-sandwich-text text'>Menu</div>
                    <div class='topBar-sandwich-icon'></div>
                </div>
            </div>
            <ul class='menu-wrapper'>
                <li id='menu' class='menu-item-wrapper text'>
                    <a id='menu-logout' data-link='goto-vote.php' class='menu-item link'>Cast Vote</a>
                </li>
                <li id='menu' class='menu-item-wrapper text'>
                    <a id='menu-logout' data-link='index.php' class='menu-item link'>Logout</a>
                </li>
            </ul>
            <div class='content'>
                <ul class='candidateList resultList'>
                    <!-- <ul class='resultList'> -->
                    <canvas id="myChart" width="100%" height="100%"></canvas>
                </ul>
            </div>

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
<script src="scripts/chart.mini.js"></script>
<script src="scripts/results.js"></script>

</html>