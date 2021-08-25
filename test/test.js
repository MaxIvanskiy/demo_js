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

        let invalidDataString = JSON.stringify(invalidData);
        let resultString = JSON.stringify(result);

        assert.equal(resultString, invalidDataString);
    });
    it('height is bigger than 0', function(){
        let invalidData = {
            status : 'failed',
            reason : 'width and height must be bigger than 0'
        };
        let result = chees(25, 0, 'x');

        let invalidDataString = JSON.stringify(invalidData);
        let resultString = JSON.stringify(result);
        
        assert.equal(resultString, invalidDataString);
    });
    it('function call params is not empty', function(){
        let invalidData = {
            status : 'failed',
            reason : 'please, put width, length and symbol to the function call'
        };
        let result = chees();

        let invalidDataString = JSON.stringify(invalidData);
        let resultString = JSON.stringify(result);

        assert.equal(resultString, invalidDataString);
    });
});