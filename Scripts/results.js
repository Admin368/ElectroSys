var results = [];
$(document).ready(async() => {
        // const ctx = document.getElementById('myChart');
        // const ctx = document.getElementById('myChart').getContext('2d');
        // const ctx = $('#myChart');
        // const ctx = 'myChart';
        results = await generateResults();
        drawChart('bar', results);
        results_populate(results);
    })
    // JQUERY AREA
async function results_populate(results) {
    //POPULATE TOTAL RESULTS
    // var results = await generateResults();
    const totalResults_Template = `
        <li id='totalResults' class='result-row candidate-wrapper '>
            <div class='result-div-equal'>
                <div class='result-wrapper candidate-candidates-info'>
                    <div class='result-title text'>TOTAL REGISTERED</div>
                    <div class='result-value text'>${results.totalRegistered}</div>
                </div>
            </div>
            <div class='result-div-equal'>
                <div class='result-wrapper candidate-candidates-info'>
                    <div class='result-title text'>TOTAL VOTED</div>
                    <div class='result-value text'>${results.totalVoted}</div>
                </div>
            </div>
            
        </li>
    `;
    $('.resultList').append(totalResults_Template);


    //POPULATE INDIVIDUAL RESULTS
    candidate_array.map((candidate, index) => {
        console.log(candidate);
        let result_div_id = `result_${index}`
        const candidate_Template = `
        <li id='${candidate.id}' class='candidate-wrapper'>
                <div class='candidate-image' style="background-image:url(${candidate.image});"></div>
                <div class='candidate-name text'>${candidate.name}</div>
                <div class='candidate-position text'>${candidate.position} <strong>#${index+1}</strong></div>
                <div class='candidate-position text'>${candidate.votes}/${results.totalVoted} Votes</div>
            </li>
    `
        $('.resultList').append(candidate_Template);
    });
}

async function generateResults() {
    var results = {}
    results.labels = [];
    results.data = [];
    results.totalRegistered = 0;
    results.totalVoted = 0;
    candidate_array.map((candidate, index) => {
        var max = 500;
        var min = 100;
        //GIVE RESULTS OF EACH USER HERE
        candidate_array[index].votes = parseInt(Math.random() * (max - min) + min);
        results.totalVoted += parseInt(candidate_array[index].votes);
    });
    candidate_array.sort((a, b) => b.votes - a.votes); //SORTS ARRAY
    candidate_array.map((candidate, index) => {
        candidate_array[index].percentage = ((candidate.votes / results.totalVoted) * 100).toFixed(2);
        let perc = candidate_array[index].percentage;
        results.labels.push(`${candidate.name}(${perc}%)`);
        results.data.push(candidate.votes);
    });
    results.totalRegistered = results.totalVoted + 55;
    return results;
}

function drawChart(type, data) {
    var results = data;
    const ctx = $('#myChart');
    const myChart = new Chart(ctx, {
        // responsive: true,
        scaleFontColor: "#FFFFFF",
        type: type,
        data: {
            labels: results.labels,
            color: 'white',
            datasets: [{
                label: `# of Votes`,
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
            indexAxis: 'x',
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "white"
                    }
                },
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: "white"
                    }
                },

            },
            plugins: {
                title: {
                    display: true,
                    text: 'RESULTS OF VOTES',
                    color: 'white',
                },
                labels: {
                    text: 'sdsd',
                    color: 'white',

                },
                legend: {
                    labels: {
                        color: 'white',
                    },
                }

            }
        }
    });
    // Chart.defaults.global.defaultFontColor = "#fff";
}

// async function drawChat() {
//     var results = await generateResults();
//     chart('bar', results);
// }
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