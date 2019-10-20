function Bowling() {
  this.frames = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: []
  };
  this.rollCount = 0;
  this.frameIndex = 1;
  this.pins = 10;
}

Bowling.prototype.roll = function(pins) {

  if (this.isNextFrame()) {
    this.nextFrame();
  }

  if (this.isValidRoll(pins)) {
    this.frames[this.frameIndex].push(pins);
    this.pins -= pins;
    this.rollCount++;
  } else {
    return 'Invalid Roll!';
  }
};

Bowling.prototype.isNextFrame = function() {
  return this.rollCount % 2 === 0 && this.rollCount > 1;
};

Bowling.prototype.nextFrame = function() {
  this.pins = 10;
  this.frameIndex++;
};

Bowling.prototype.isValidRoll = function(pins) {
  return this.pins - pins >= 0;
};

Bowling.prototype.recentFrameScore = function () {
  return this.frames[this.frameIndex][0] + this.frames[this.frameIndex][1];
};
