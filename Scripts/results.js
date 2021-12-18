$(document).ready(() => {
        // const ctx = document.getElementById('myChart');
        // const ctx = document.getElementById('myChart').getContext('2d');
        // const ctx = $('#myChart');
        // const ctx = 'myChart';
        drawChat();
        results_candidate_populate();
    })
    // JQUERY AREA
function results_candidate_populate() {
    candidate_array.map((candidate, index) => {
        // loadingHide();
        console.log(candidate);
        const candidateTemplate = `
        <li id='${candidate.id}' class='candidate-wrapper '>
            <div class='candidate-results-info'>
                <div class='candidate-image' style="background-image:url(${candidate.image});"></div>
                <div class='candidate-name text'>${candidate.name}</div>
                <div class='candidate-position text'>${candidate.position}</div>
            </div>
            <div class='candidate-results-graph'>

            </div>
        </li>
    `
        $('.candidateList').append(candidateTemplate);
    });
}

function generateResults() {
    var results = {}
    results.labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', '1', '2', '3'];
    results.data = [12, 19, 3, 5, 2, 3, 1, 2, 3, 4, 5, 6, 7];
    results.total = 0;
    candidate_array.map((candidate, index) => {
        results.labels[index] = candidate_array[index].name;
        var max = 500;
        var min = 100;
        results.data[index] = Math.random() * (max - min) + min;
    });
    return results;
}

function chart(type, data) {
    var results = data;
    const ctx = $('#myChart');
    const myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: results.labels,
            datasets: [{
                label: '# of Votes',
                data: results.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,

            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Custom Chart Title'
                },
                legend: {
                    labels: {
                        color: 'white',
                    },
                    title: {
                        color: 'white'
                    }
                }

            }
        }
    });
}

function drawChat() {
    var results = generateResults();
    chart('bar', results);
}
// JQUERY AREA
// $('.candidateList').on('click', '.button-vote', (e) => {
//     // const candidate
//     var id = '#' + e.target.id;
//     var link = $(id).data('link');
//     var index = $(id).data('index');
//     // candidate_selected = getRecord('candidate_selected');
//     // console.log(`cockie_way:${candidate_selected}`);
//     setRecord('candidate_selected', index, 1);
//     candidate_selected = getRecord('candidate_selected');
//     console.log('Selected -> currentSelected Candidate:' + candidate_selected + ' ' + candidate_array[candidate_selected].name);
//     window.location.href = link;

// });