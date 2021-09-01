import { chess } from '../src/task1.js';

export const test1 = (assert) => {
    describe('Task 1 (chess)', () => {
        it('function work correctly', () => {
            let str = 'x \n x \n';
            assert.equal(chess(1, 2, "x"), str);
        });
        it('type is string', () => {
            assert.isString(chess(1, 2, "x"));
        });
        it('symbol is correct', () => {
            let symbol = 'x';
            let result = chess(5, 5, symbol).slice(0, 1);
            assert.equal(result, symbol);
        });    
        it('width is bigger than 0', () => {
            let invalidData = {
                status : 'failed',
                reason : 'width and height must be bigger than 0'
            };
            let result = chess(0, 5, 'x');

            assert.deepEqual(result, invalidData);
        });
        it('height is bigger than 0', () => {
            let invalidData = {
                status : 'failed',
                reason : 'width and height must be bigger than 0'
            };
            let result = chess(25, 0, 'x');
           
            assert.deepEqual(result, invalidData);
        });
        it('function call arguments is not empty', () => {
            let invalidData = {
                status : 'failed',
                reason : 'please, put width, length and symbol to the function call'
            };
            let result = chess();

            assert.deepEqual(result, invalidData);
        });
        it('symbol is a string', () => {
            let invalidData = {
                status : 'failed',
                reason : 'symbol must be a string'
            }
            let result = chess(2,2,1);

            assert.deepEqual(result, invalidData);
        });
    });
}