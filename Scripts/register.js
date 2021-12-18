$(document).ready(() => {

})

// JQUERY AREA
// $(".form-section-wrapper").submit(function(e) {
//     e.preventDefault();
// });

function onFormRegisterSubmit() {
    console.log('FORM LOGIN SUBMITTING');
    var email = $('#input-email-value').val();
    var domain = email.split('@')[1];
    var form_notice = `
        <div class='form-notice-wrapper'>
            <p class=' text form-notice'>A link has been sent to your email</p>
             <a  href='http://${domain}'target="_blank" class='form-link text form-notice'>${email}<a/> 
             <p class='text form-notice'> to reset your Password </p>
        </div>
    `;
    $('#input-email').remove();
    $('#button-register').remove();
    $('.form-section-1').append(form_notice);
}