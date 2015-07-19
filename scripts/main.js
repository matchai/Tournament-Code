var id;

$('input').keyup(function() {
  if ($(this).val()) {
    id = $(this).attr('id');
    $('label[for="' + id + '"]').addClass('labelEnabled');
    $('label[for="' + id + '"]').removeClass('labelDisabled');
  } else {
    $('label[for="' + id + '"]').addClass('labelDisabled');
    $('label[for="' + id + '"]').removeClass('labelEnabled');
  }
});