$(document).ready(function () {
    $('#exampleModalCenter').modal('show')
});
function modal(event) {
    event.preventDefault();
    $('.modal-backdrop').remove();
    $('.fade').remove();
    $('body').removeClass('modal-open');
}