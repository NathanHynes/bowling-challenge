function Bowling() {
  this.frames = {
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[],
    10:[]
  };
  this.frameIndex = 1;
  this.pins = 10;
}

Bowling.prototype.roll = function(pins) {
  if(this.isGameOver()){
    return 'Game Over';
  }

  this.nextFrame();

  if (!this.isValidRoll(pins)) {
    return 'Invalid Roll!';
  }

  if (
    this.isTenthFrame() &&
    (this.isAStrike(pins) || this.isASpare(pins))
  ) {
    this._pushToFrame(pins);
    this._lastFrameReset();
    return;
  }

  this._pushToFrame(pins);
};

Bowling.prototype.nextFrame = function() {
  if ( this.frames[this.frameIndex].length === 2 && this.frameIndex <= 9 || this.frames[this.frameIndex][0] === 10 && this.frameIndex <= 9){
    this.pins = 10;
    this.frameIndex++;
  }
};

Bowling.prototype.isValidRoll = function(pins) {
  return this.pins - pins >= 0;
};

Bowling.prototype.isAStrike = function (pins) {
  return pins == 10 && this.pins - pins == 0;
};

Bowling.prototype.isASpare = function(pins) {
return this.frames[this.frameIndex][0] + pins == 10 && this.frames[this.frameIndex].length <=2;
};

Bowling.prototype.recentFrameScore = function(frameIndex) {

  var currentRolls = this._createRollArray(frameIndex);

  var frameTotal = this._safeRoll(this.frames[frameIndex][0]) + this._safeRoll(this.frames[frameIndex][1]);

  var spareBonus = this._safeRoll(currentRolls[2]);

  var strikeBonus = this._safeRoll(currentRolls[1]);

  if(this.frames[frameIndex][0] == 10){
    return frameTotal + spareBonus + strikeBonus;
  }else if(frameTotal == 10 ){
    return frameTotal + spareBonus;
  }else {
    return frameTotal;
  }
};

Bowling.prototype.totalScore = function() {
  var score, rollIndex;
  var result = [];

  for (var frame in this.frames) {
    this.frames[frame].forEach(function(roll) {
      result.push(roll);
    });
  }

  rollIndex = 0;
  score = 0;
  for (var _ = 0; _ < 10; _++){
    if(result[rollIndex] == 10){
      score += 10 + this.strikeBonus(rollIndex, result);
      rollIndex++;
    }else if (result[rollIndex] + result[rollIndex+1] == 10){
      score += 10 + this.spareBonus(rollIndex, result);
      rollIndex += 2;
    }else{
      score += this.sumOfRollsInFrame(rollIndex, result);
      rollIndex += 2;
    }
  }
  return score;
};

Bowling.prototype.strikeBonus = function(rollIndex, result) {
  return this._safeRoll(result[rollIndex+1]) + this._safeRoll(result[rollIndex+2]);
};

Bowling.prototype.spareBonus = function(rollIndex, result){
  return this._safeRoll(result[rollIndex+2]);
};

Bowling.prototype.sumOfRollsInFrame = function(rollIndex, result){
  return this._safeRoll(result[rollIndex]) + this._safeRoll(result[rollIndex + 1]);
};

Bowling.prototype.isTenthFrame = function() {
 return this.frameIndex === 10;
};

Bowling.prototype._safeRoll = function(roll) {
  return roll ? roll : 0;
};

Bowling.prototype.isGameOver = function() {
  var lastFrame = this.frames[10];
  return lastFrame[0] + lastFrame[1] < 10 && lastFrame.length === 2 || lastFrame.length === 3;
};

Bowling.prototype._lastFrameReset = function() {
  this.pins = 10;
};

Bowling.prototype._pushToFrame = function(pins) {
  this.frames[this.frameIndex].push(pins);
  this.pins -= pins;
};

Bowling.prototype._createRollArray = function(frameIndex) {
  var rolls = [];

  if (frameIndex < 9) {
    num = 3;
  } else if (frameIndex == 9) {
    num = 2;
  }else {
    num = 1;
  }

  for (var frame = frameIndex; frame < (frameIndex + num); frame++) {
    this.frames[frame].forEach(function(roll) {
      rolls.push(roll);
    });
  }
  return rolls;
};
