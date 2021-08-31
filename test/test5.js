import { task5 } from '../src/task5.js';

export const test5 = (assert) => {
    describe('Task 5', () => {
        it('Function work correctly', () => {
            let context = { min : 321654, max : 654321 };
            let positive = {
                firstMethod: 20453,
                method: 1,
                secondMethod: 7901
            }
            let result = task5(context);
            assert.deepEqual(result, positive);
        }); 
        it('min is smaller than max', () => {
            let context = { min: 654321, max : 123456};
            let result = task5(context);
            assert.isFalse(result);
        });
        it('Function return Object', () => {
            let context = { min : 321654, max : 654321 };
            let result = task5(context);
            assert.typeOf(result, 'Object');
        }); 
        it('function call have arguments', () => {
            let result = task5();
            assert.isFalse(result);
        });
        it('function call argument is Object', () => {
            let context = 5;
            let result = task5(context);
            assert.isFalse(result);
        });
    });
}