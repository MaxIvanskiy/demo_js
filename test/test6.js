import { task6 } from '../src/task6.js';

export const test6 = (assert) => {
    describe('Task 6 (row of numbers)', () => {
        it('function work correctly', () => {
            let rowLen = 10;
            let minPow = 25;
            let result = task6(rowLen, minPow);
            assert.equal(result, '5,6,7,8,9,10,11,12,13,14');
        }); 
        it('function return String', () => {
            let rowLen = 10;
            let minPow = 25;
            let result = task6(rowLen, minPow);
            assert.isString(result);
        });
        it('result length is equal to expected length', () => {
            let rowLen = 10;
            let minPow = 25;
            let result = task6(rowLen, minPow);
            let actualLength = result.split(',').length;
            assert.equal(actualLength, rowLen);
        });
        it('function call have arguments', () => {
            let result = task6();
            assert.isFalse(result);
        });
        it('function call arguments are numbers', () => {
            let rowLen = [10];
            let minPow = '25';
            let result = task6(rowLen, minPow);
            assert.isFalse(result);
        });
    });
}