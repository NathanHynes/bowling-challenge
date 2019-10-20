describe('Bowling', function () {
  var bowling;


  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('roll', function () {

    it('records how many pins you knocked over', function () {
      bowling.roll(1);
      bowling.roll(2);
      expect(bowling.frames[1]).toEqual([1,2]);
    });

    it("returns Invalid Roll! when roll isn't allowed", function () {
      bowling.roll(2);
      expect(bowling.roll(9)).toEqual('Invalid Roll!');
    });

    it('increases roll count at the end of every roll', function () {
      expect(bowling.rollCount).toEqual(0);
      bowling.roll(2);
      expect(bowling.rollCount).toEqual(1);
    });

    it('knocks pins down', function () {
      bowling.roll(4);
      expect(bowling.pins).toEqual(6);
    });

    it('only records a maximum of 2 rolls per frame', function () {
      bowling.roll(1);
      bowling.roll(2);
      expect(bowling.frames[1]).toEqual([1,2]);
      bowling.roll(3);
      bowling.roll(4);
      expect(bowling.frames[2]).toEqual([3,4]);
    });

    it('moves on to next frame if player rolls a strike', function () {
      spyOn(bowling, 'nextFrame');
      bowling.roll(10);
      bowling.roll(2);
      expect(bowling.nextFrame).toHaveBeenCalled();
    });
  });

  describe('isNextFrame', function () {
    it('confirms when there is a next frame', function () {
      expect(bowling.isNextFrame()).toEqual(false);
      bowling.roll(1);
      bowling.roll(2);
      expect(bowling.isNextFrame()).toEqual(true);
    });
  });

  describe('isValidRoll', function () {
    it('reports true if roll is valid', function () {
      bowling.roll(1);
      expect(bowling.isValidRoll(1)).toEqual(true);
      expect(bowling.isValidRoll(2)).toEqual(true);
      expect(bowling.isValidRoll(5)).toEqual(true);
      expect(bowling.isValidRoll(9)).toEqual(true);
    });

    it('reports false if roll is invalid', function () {
      expect(bowling.isValidRoll(11)).toEqual(false);
      bowling.roll(2);
      expect(bowling.isValidRoll(9)).toEqual(false);
      expect(bowling.isValidRoll(10)).toEqual(false);
    });
  });

  describe('nextFrame', function () {
    it('resets pins to 10', function () {
      bowling.roll(2);
      bowling.roll(2);
      bowling.nextFrame();
      expect(bowling.pins).toEqual(10);
    });

    it('increases frameIndex', function () {
      expect(bowling.frameIndex).toEqual(1);
      bowling.roll(2);
      bowling.roll(2);
      bowling.nextFrame();
      expect(bowling.frameIndex).toEqual(2);
    });
  });

  describe('recentFrameScore', function () {
    it('shows the score of the most recent frame', function () {
      bowling.roll(2);
      bowling.roll(3);
      expect(bowling.recentFrameScore()).toEqual(5);
    });
  });

  describe('isAStrike', function () {
    it('returns true if roll is a strike', function () {
      expect(bowling.isAStrike(10)).toEqual(true);
    });

    it('returns false if roll is not a strike', function () {
      expect(bowling.isAStrike(5)).toEqual(false);
    });
  });
});
