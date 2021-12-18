var isMenuOpen = false;
var isLoadingDone = false;
var loadingIcon = 'loading3.svg';
var defaultLoadingChecker = '.content';
// var defaultLoadingChecker = '.candidateList';
var useDefaultLoadingChecker = true;



// CANDIDATES
const imageFolder = 'images/candidates/';
const candidate_array = [
    { id: 'candiate0', name: 'CAPTAIN ALEX', position: 'President', image: imageFolder + 'candidate1.jpg' },
    { id: 'candiate1', name: 'NEIL HAMER', position: 'President', image: imageFolder + 'candidate2.jpg' },
    { id: 'candiate2', name: 'ANIQA ROBINSON', position: 'President', image: imageFolder + 'candidate3.jpg' },
    { id: 'candiate3', name: 'SUMMER-LOUISE MCGRATH', position: 'President', image: imageFolder + 'candidate4.jpg' },
    { id: 'candiate4', name: 'KAROL LUCAS', position: 'President', image: imageFolder + 'candidate1.jpg' },
    { id: 'candiate5', name: 'VIOLA RUTLEDGE', position: 'President', image: imageFolder + 'candidate2.jpg' },
    { id: 'candiate6', name: 'EMILY ZAVALA', position: 'President', image: imageFolder + 'candidate3.jpg' },
    { id: 'candiate7', name: 'TYREKE JUSTICE', position: 'President', image: imageFolder + 'candidate4.jpg' },
    { id: 'candiate8', name: 'PIPER HERBERT', position: 'President', image: imageFolder + 'candidate1.jpg' },
    { id: 'candiate9', name: 'MALIKAH MURILLO', position: 'President', image: imageFolder + 'candidate2.jpg' },
]
var candidate_selected; // index of selected Candidate



$(document).ready(() => {
    // alert('done');
})

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


// LOADING ICON
const loadingShow = () => {
    $('.content').css('background', 'url(../svg/' + loadingIcon + ')');
}
const loadingHide = () => {
    $('.content').css('background', 'none');
}
const loadingCheck = (div) => {
    if (!($(div).is(':empty'))) {
        if (isLoadingDone == false) {
            console.log('loaded');
            loadingHide();
            isLoadingDone = true;
        }
    }

}

const setLoadingChecker = (div) => {
    useDefaultLoadingChecker = false();
    $(div).on('DOMSubtreeModified', function() {
        loadingCheck(div);
    });

}

// DEAULT LOADING CHECKER
$(defaultLoadingChecker).on('DOMSubtreeModified', function() {
    if (useDefaultLoadingChecker == true) {
        loadingCheck(defaultLoadingChecker);
    }
});

$('.topBar-sandwich-wrapper').on('click', () => { menuToggle() });

var link2;
//LINKS
$('.link').on('click', (e) => {
    var id = '#' + e.target.id;
    // link = $(id).data('link');
    link = $(id).attr('data-link');
    console.log('LINK CLICKED :' + id);
    menuClose();
    $('.site-wrapper').css('animation', 'fadeUp 2s forwards');
    setTimeout(() => {
        window.location.href = link;
    }, 1000)
})


function setRecord(cname, cvalue, exdays) {
    if (exdays == null) { exdays = 1; }
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getRecord(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}