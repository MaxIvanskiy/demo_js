describe('pow task1', function(){
    it('chees(1, 2, "x") return 2 rows', function(){
        let str = 'x \n x \n';
        assert.equal(chees(1, 2, "x"), str);
    });
    it('type is string', function(){
        let str = 'x \n x \n';
        assert.typeOf(chees(1, 2, "x"), 'string');
    });
    it('symbol is correct', function(){
        let result = chees(5, 5, 'x').slice(0, 1);
        assert.equal(result, 'x');
    });    
    it('width is bigger than 0', function(){
        let invalidData = {
            status : 'failed',
            reason : 'width and height must be bigger than 0'
        };
        let result = chees(0, 5, 'x');
        assert.equal(result, invalidData);
    });
    it('height is bigger than 0', function(){
        let invalidData = {
            status : 'failed',
            reason : 'width and height must be bigger than 0'
        };
        let result = chees(25, 0, 'x');
        assert.equal(result, invalidData);
    });
    it('function call params is not empty', function(){
        let invalidData = {
            status : 'failed',
            reason : 'please, put width, length and symbol to the function call'
        };
        let result = chees(25);
        assert.equal(result, invalidData);
    });
});