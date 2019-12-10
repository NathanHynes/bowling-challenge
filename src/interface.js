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
    showFrameScore(bowling.frameIndex, id);
    showTotalScore();
  });

function updateFrames(frameIndex) {
  $('#frame' + frameIndex).text(bowling.frames[frameIndex]);
}

function showFrameScore(frameIndex, roll) {
  var frame = frameIndex - 1;
  var frameScore = bowling.recentFrameScore(frameIndex);
  if (frameIndex >= 2) {
    var previousFrame = frameIndex - 2;
    var previousFrameScore = bowling.recentFrameScore(frameIndex - 1);
    $('#marker' + previousFrame).text(previousFrameScore);
  }
  if (roll === 10 && frameIndex >= 3) {
    $('#marker' + previousFrame).text(previousFrameScore);
    $('#marker' + (previousFrame - 1)).text(bowling.recentFrameScore(frameIndex - 2));
  }
  $('#marker' + frame).text(frameScore);
}

function showTotalScore() {
  $('#fscore').text(bowling.totalScore())
}

});
