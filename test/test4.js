import { task4 } from '../src/task4.js';

export const test4 = (assert) => {
    describe('Task 4', () => {
        it('palindrom', () => {
            let number = 1234437;
            let result = task4(number);
            assert.equal(result, 3443);
        });
        it('not a palindrom', () => {
            let number = 6548;
            let result = task4(number);
            assert.equal(result, 0);
        });
        it('numbers lower than 10 are not a palindroms', () => {
            let number = 9;
            let result = task4(number);
            assert.equal(result, 0);
        });
        it('function call have arguments', () => {
            let result = task4();
            assert.equal(result, false);
        });
        it('function call argument is a \'number\'', () => {
            let result = task4('not a number');
            assert.equal(result, false);
        });
    });
}