var isMenuOpen = false;

const menuOpen = () => {
    $('.menu-wrapper').css("height", "150px");
    // $('.menu-wrapper').css("border", "1px solid white");
    $('.menu-wrapper').css("opacity", "1");
    isMenuOpen = true;
}

const menuClose = () => {
    $('.menu-wrapper').css("height", "0px");
    $('.menu-wrapper').css("border", "0px solid white");
    $('.menu-wrapper').css("opacity", "0");

    isMenuOpen = false;
}

const menuToggle = () => {
    if (isMenuOpen == false) {
        menuOpen();
    } else {
        menuClose();
    }
}

$('.topBar-sandwich-wrapper').on('click', () => { menuToggle() });


//LINKS

$('.link').on('click', (e) => {
    var link = e.target.id;
    console.log(link);
    menuClose();
    $('.topBar').css('animation', 'fadeUp 2s forwards');
    setTimeout(() => {
        // alert('done');
        window.location.href = link;
    }, 1000)
})