/*------------------------------------*\
    On Pageload
\*------------------------------------*/

$( document ).ready(function() {
  $('#gameName').focus();
});

/*------------------------------------*\
    UI Interaction
\*------------------------------------*/

// Input label animation
var id;
$('input').keyup(function() {
  id = $(this).attr('id');
  if ($(this).val()) {
    $('label[for="' + id + '"]').addClass('active');
    $('label[for="' + id + '"]').removeClass('inactive');
  } else {
    $('label[for="' + id + '"]').addClass('inactive');
    $('label[for="' + id + '"]').removeClass('active');
  }
});

/*
// Advanced pane expansion
$('.customize').click(function() {
  $(this).toggleClass('active');

  // Activate/Disactivate hidden fields
  if ($(this).hasClass('active')){
    $('select').removeAttr('disabled');
  } else {
    $('select').attr('disabled', 'disabled');
  }

  $('.expand').toggleClass('hidden').toggleClass('revealed');
  $('.expand label').toggleClass('inactive').toggleClass('active');
});
*/

