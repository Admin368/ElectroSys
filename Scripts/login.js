$(document).ready(() => {
        // candidate_populate();
        loadingHide();

    })
    // JQUERY AREA


// JQUERY AREA
$('.candidateList').on('click', '.button-vote', (e) => {
    // const candidate
    var id = '#' + e.target.id;
    var link = $(id).data('link');
    var index = $(id).data('index');
    candidate_selected = index;
    console.log('Selected -> currentSelected Candidate:' + candidate_selected + ' ' + candidate_array[candidate_selected].name);
    // console.log(link);
    window.location.href = link;
});

$('.input-item').hover((e) => {
    // const candidate
    var id = '#' + e.target.id;
    var input_id = $(id).data('input-id');
    var input_value_id = '#input-' + input_id + '-value';
    $(input_value_id).css("animation", "expand 1s");
    $(input_value_id).css("transition", "1s");
    $(input_value_id).css("height", "20px");
    // $(input_value_id).focus();
});

$('.input-item').blur((e) => {
    // const candidate
    var id = '#' + e.target.id;
    var input_id = $(id).data('input-id');
    var input_value_id = '#input-' + input_id + '-value';
    // $(input_value_id).css("animation", "compress");
    $(input_value_id).css("transition", "1s");
    $(input_value_id).css("height", "0px");
    $(input_value_id).focus();
    console.log('blur');
});