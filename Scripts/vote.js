candidates.map((candidate, index) => {
    loadingHide();
    console.log(candidate);
    const candidateTemplate = `
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
});

$('.candidateList').on('click','.button-vote', (e) => {
    // const candidate
    var id = '#' + e.target.id;
    var link = $(id).data('link');
    var index = $(id).data('index');
    console.log('Selected -> currentSelected Candidate:'+index);
    console.log(link);
});

// $('.candidateList').ap