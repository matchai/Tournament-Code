var id;

$('input').keyup(function() {
  id = $(this).attr('id');
  if ($(this).val()) {
    $('label[for="' + id + '"]').addClass('labelEnabled');
    $('label[for="' + id + '"]').removeClass('labelDisabled');
  } else {
    $('label[for="' + id + '"]').addClass('labelDisabled');
    $('label[for="' + id + '"]').removeClass('labelEnabled');
  }
});