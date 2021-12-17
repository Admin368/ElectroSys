$(document).ready(() => {
        // candidate_populate();

    })
    // JQUERY AREA

function onFormLoginSubmit() {
    console.log('FORM LOGIN SUBMITTING');
    setTimeout(() => {
        window.location.href = 'vote.html';
    }, 1000)
}
// JQUERY AREA
// $('.candidateList').on('click', '.button-vote', (e) => {
//     // const candidate
//     var id = '#' + e.target.id;
//     var link = $(id).data('link');
//     var index = $(id).data('index');
//     candidate_selected = index;
//     console.log('Selected -> currentSelected Candidate:' + candidate_selected + ' ' + candidate_array[candidate_selected].name);
//     // console.log(link);
//     window.location.href = link;
// });