$(document).ready(() => {
    loadingHide();
    // var x = document.candidate_selected;
    // console.log(`cockie:${x}`);

    candidate_selected_populate();

});
//FUNCTIONS AREA
function candidate_selected_populate() {
    // console.log(i);
    // candidate_selected = 1;
    candidate_selected = getRecord('candidate_selected');

    index = candidate_selected;
    candidate = candidate_array[candidate_selected];
    const candidateSelectedTemplate = `
        <li id='${candidate.id}' class='candidate-wrapper confirm-wrapper'>
            <div class='candidate-image confirm-image' style="background-image:url(${candidate.image})"></div>
            <div class='candidate-name confirm-name text'>${candidate.name}</div>
            <div class='candidate-position confirm-position text'>${candidate.position}</div>
            <div class='candidate-options confirm-options '>
                <a id='confirm-confirmed' data-link='thankYou.html' data-index='${index}' class='button button-vote text'>CONFIRM</a>
                <a id='confirm-cancel' data-link='vote.html' data-index='${index}' class='button button-vote text'>CANCEL</a>
            </div>
        </li>
    `;
    $('.candidateList').append(candidateSelectedTemplate);
    console.log(candidate_selected);

}

// JQUERY AREA

// CANCEL VOTE
$('.candidateList').on('click', '#confirm-cancel', (e) => {
    var id = '#' + e.target.id;
    var link = $(id).data('link');
    window.location.href = link;
});


// CONFIRM VOTE
$('.candidateList').on('click', '#confirm-confirmed', (e) => {
    var id = '#' + e.target.id;
    var link = $(id).data('link');
    // var index = $(id).data('index');
    // candidate_selected = index;
    // console.log('Selected -> currentSelected Candidate:' + candidate_selected + ' ' + candidate_array[candidate_selected].name);
    window.location.href = link;
});