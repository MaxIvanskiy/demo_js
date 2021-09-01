import { task7 } from '../src/task7.js';

export const test7 = (assert) => {
    describe('Task 7', () => {
        it('function return array', () => {
            let context = { length : 10 };
            let result = task7(context);
            assert.isArray(result);

            context = { min : 10,max : 10000 };
            result = task7(context);
            assert.isArray(result);
        }); 
        it('function call have argument', () => {
            let result = task7();
            assert.isFalse(result);
        });
        it('function call argument is Object', () => {
            let context = 123;
            let result = task7(context);
            assert.isFalse(result);

            context = [1, 2, 3];
            result = task7(context);
            assert.isFalse(result);

            context = '123';
            result = task7(context);
            assert.isFalse(result);

            context = { length : 10 };
            result = task7(context);
            assert.isOk(result);
        });
        it('function argument length min 1 max 47', () => {
            let context = { length : 0 };
            let result = task7(context);
            assert.isFalse(result);

            context = { length : 48};
            result = task7(context);            
            assert.isFalse(result);
        });
        it('function argument min < max', () => {
            context = { min : 301, max : 300 };
            let result = task7(context);
            assert.isFalse(result);

        });
        it('function argument min > 0, max < 2000000000', () => {
            let context = { min : 0, max : 10000 };
            let result = task7(context);
            assert.isFalse(result);

            context = { min : 10, max : 2000000001 };
            result = task7(context);
            assert.isFalse(result);
        });
        it('function argument have min and max or length properties', () => {
            let context = { notMin : 0, notMax : 10000 };
            let result = task7(context);
            assert.isFalse(result);

            context = { notLength : 10 };
            result = task7(context);
            assert.isFalse(result);
        });
    });
}