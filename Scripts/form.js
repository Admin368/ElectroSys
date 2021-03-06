$(".form-section-wrapper").submit(function(e) {
    e.preventDefault();
    var form_id = e.target.id;
    // console.log('submitted');
    // var childred = $("#form-section-1").children();
    // var childred = $("#form-section-1 > div").attr("id");
    var childred = $(".form-section-1 > div");
    // console.log(childred.length);
    var fieldsCount = childred.length;
    var fieldsDone = 0;
    for (let x = 0; x < fieldsCount; x++) {
        let id_ = childred[x].id;
        let id = $(`#${id_}`).data('input-id');
        let input_error_id = `input-${id}-error`;
        let input_value_id = `input-${id}-value`;
        let value = $(`#${input_value_id}`).val();
        let error_div = `
            <div id='${input_error_id}' class='input-error'></div> 
        `;
        if (value == "") { // IF INPUT EMPTY
            input_error(id);
        } else { // IF INPUT OK!
            input_ok(id);
            console.log(form_id);
            fieldsDone++;
            if (fieldsDone == fieldsCount) {
                if (form_id == 'form-register') { onFormRegisterSubmit() }
                if (form_id == 'form-login') { onFormLoginSubmit() }
            }
        }
    }
});
$('.input-item').hover((e) => {
    // const candidate
    var id = '#' + e.target.id;
    var input_id = $(id).data('input-id');
    var input_value_id = '#input-' + input_id + '-value';
    $(input_value_id).css("animation", "expand 1s");
    $(input_value_id).css("transition", "1s");
    $(input_value_id).css("height", "20px");
    // console.log(input_value_id);
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

$('.input-value').on('input', function(e) {
    let id = $(`#${e.target.id}`).data('input-id');
    let input_value_id = `input-${id}-value`;
    let value = $(`#${input_value_id}`).val();
    if (value == "") { // IF INPUT EMPTY
        input_error(id);
    } else { // IF INPUT OK!
        input_ok(id);
        //SUBMIT

    }
});

function input_error(id) {
    let input_item_id = `input-${id}`;
    let input_value_id = `input-${id}-value`;
    let input_error = $("#" + input_value_id).data('input-error');
    if (input_error == false) {
        console.log(`input_empty:${input_value_id}`);
        let input_title_id = `input-${id}-title`;
        let input_error_id = `input-${id}-error`;
        let error_div = `
            <div id='${input_error_id}' class='input-error'></div> 
        `;
        $(`#${input_item_id}`).append(error_div);
        $(`#${input_item_id}`).css('border-bottom-color', '#F05454');
        $(`#${input_title_id}`).css('color', '#F05454');
        $(`#${input_value_id}`).data('input-error', true);
    }
}

function input_ok(id) {
    let input_item_id = `input-${id}`;
    let input_value_id = `input-${id}-value`;
    let input_error = $("#" + input_value_id).data('input-error');
    if (input_error == true) {
        // console.log(input_value_id);
        console.log(`input_ok:${input_value_id}`);
        let input_title_id = `input-${id}-title`;
        let input_error_id = `input-${id}-error`;
        $(`#${input_item_id}`).find(".input-error").remove();
        $(`#${input_item_id}`).css('border-bottom-color', 'white');
        $(`#${input_title_id}`).css('color', 'white');
        $(`#${input_value_id}`).data('input-error', false);
    }

}