const imageFolder = '/Images/candidates/';
const candidates = [
    { id: 'candiate2', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate2.jpg' },
    { id: 'candiate3', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate3.jpg' },
    { id: 'candiate4', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate4.jpg' },
]



candidates.map((candidate, index) => {
    console.log(candidate);
    const candidateTemplate = `
        <li id='${candidate.id}' class='candidate-wrapper'>
            <div class='candidate-image' style="background-image:url(${candidate.image});"></div>
            <div class='candidate-name text'>${candidate.name}</div>
            <div class='candidate-position text'>${candidate.position}</div>
            <div class='candidate-options'>
                <div class='button button-vote text'>CHOOSE</div>
            </div>
        </li>
    `
    $('.candidateList').append(candidateTemplate);

});


// $('.candidateList').ap