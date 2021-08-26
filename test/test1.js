import { chees } from '../src/task1.js';

export const test1 = (assert) => {
    describe('Task 1', function(){
        it('function work correctly', function(){
            let str = 'x \n x \n';
            assert.equal(chees(1, 2, "x"), str);
        });
        it('type is string', function(){
            assert.typeOf(chees(1, 2, "x"), 'string');
        });
        it('symbol is correct', function(){
            let symbol = 'x';
            let result = chees(5, 5, symbol).slice(0, 1);
            assert.equal(result, symbol);
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
        it('function call arguments is not empty', function(){
            let invalidData = {
                status : 'failed',
                reason : 'please, put width, length and symbol to the function call'
            };
            let result = chees();

            let invalidDataString = JSON.stringify(invalidData);
            let resultString = JSON.stringify(result);

            assert.equal(resultString, invalidDataString);
        });
        it('symbol is a string', function(){
            let invalidData = {
                status : 'failed',
                reason : 'symbol must be a string'
            }
            let result = chees(2,2,1);

            let invalidDataString = JSON.stringify(invalidData);
            let resultString = JSON.stringify(result);

            assert.equal(resultString, invalidDataString);
        });
    });
}