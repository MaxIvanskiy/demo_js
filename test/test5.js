import { task5 } from '../src/task5.js';

export const test5 = (assert) => {
    describe('Task 5', () => {
        it('Function work correctly', () => {
            let context = { min : 5, max : 15};
            let result = task5(context);
            assert.typeOf(result, 'Object');
        }); 
        it('Function return Object', () => {
            let context = { min : 5, max : 15};
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