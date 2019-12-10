$(document).ready(function() {
  var bowling = new Bowling();


  function displayTest(value) {
    var text = value;
    $('#comments').text(text);
  }

  $(".pin-button").click(function() {
    var id = $(this).attr('id')
    console.log('hello', id)
    displayTest(id);
  });
});
