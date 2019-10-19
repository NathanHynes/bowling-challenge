describe('Frame', function () {
  var frame


    beforeEach(function() {
      frame = new Frame();
    });

    describe('.test', function () {
      it('returns true', function () {
        expect(frame.test()).toEqual(true);
      });
    });
});
