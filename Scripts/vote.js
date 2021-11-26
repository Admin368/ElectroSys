const imageFolder = 'images/candidates/';
const candidates = [
    { id: 'candiate1', name: 'CAPTAIN ALEX', position: 'President', image: imageFolder + 'candidate1.jpg' },
    { id: 'candiate2', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate2.jpg' },
    { id: 'candiate3', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate3.jpg' },
    { id: 'candiate4', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate4.jpg' },
    { id: 'candiate4', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate4.jpg' },
    { id: 'candiate4', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate4.jpg' },
    { id: 'candiate4', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate4.jpg' },
    { id: 'candiate4', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate4.jpg' },
    { id: 'candiate4', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate4.jpg' },
    { id: 'candiate4', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate4.jpg' },
    { id: 'candiate4', name: 'ALIX WONDER', position: 'President', image: imageFolder + 'candidate4.jpg' },
]



candidates.map((candidate, index) => {
    loadingHide();
    console.log(candidate);
    const candidateTemplate = `
        <li id='${candidate.id}' class='candidate-wrapper'>
            <div class='candidate-image' style="background-image:url(${candidate.image});"></div>
            <div class='candidate-name text'>${candidate.name}</div>
            <div class='candidate-position text'>${candidate.position}</div>
            <div class='candidate-options'>
                <a id='${candidate.id}_choose' data-link='confirm.html' class='button button-vote text link'>CHOOSE</a>
            </div>
        </li>
    `
    $('.candidateList').append(candidateTemplate);
});

$('.candidateList').on('click','.button-vote', (e) => {
    // const candidate
    var id = '#' + e.target.id;
    var link = $(id).data('link');
    console.log('voted');
    console.log(link);
});

// $('.candidateList').ap