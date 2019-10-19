describe('Bowling', function () {
  var bowling


    beforeEach(function() {
      bowling = new Bowling();
    });

    describe('.bowlingTest', function () {
      it('returns true', function () {
        expect(bowling.bowlingTest()).toEqual(true);
      });
    });
});
