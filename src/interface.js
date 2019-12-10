$(document).ready(function() {
  var bowling = new Bowling();


  // function displayTest(value) {
  //   var text = value;
  //   $('#comments').text(text);
  // }

  $(".pin-button").click(function() {
    var id = parseInt($(this).attr('id'));
    bowling.roll(id);
    updateFrames(bowling.frameIndex);
    showFrameScore(bowling.frameIndex);
  });

function updateFrames(frameIndex) {
  $('#frame' + frameIndex).text(bowling.frames[frameIndex]);
}

function showFrameScore(frameIndex) {
  var frame = frameIndex - 1;
  var frameScore = bowling.recentFrameScore(frameIndex);
  if (frameIndex >= 2) {
    var previousFrame = frameIndex - 2;
    var previousFrameScore = bowling.recentFrameScore(frameIndex - 1);
    $('#marker' + previousFrame).text(previousFrameScore);
  }
  $('#marker' + frame).text(frameScore);
}

});
