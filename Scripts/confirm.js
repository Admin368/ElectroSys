$(document).ready(()=>{
    candidate_selected_populate();

})
//FUNCTIONS AREA
function candidate_selected_populate(){
    loadingHide();
    console.log(candidate);
    const candidateSelectedTemplate = `
        <li id='${candidate.id}' class='candidate-wrapper'>
            <div class='candidate-image' style="background-image:url(${candidate.image});"></div>
            <div class='candidate-name text'>${candidate.name}</div>
            <div class='candidate-position text'>${candidate.position}</div>
            <div class='candidate-options'>
                <a id='${candidate.id}_choose' data-link='confirm.html' data-index='${index}' class='button button-vote text'>CHOOSE</a>
            </div>
        </li>
    `
    $('.candidateList').append(candidateTemplate);
}

// JQUERY AREA