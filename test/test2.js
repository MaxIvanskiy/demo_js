import { checkEnv } from '../src/task2.js';

export const test2 = (assert) => {
    describe('Task 2', () => {
        it('can\'t put envelopes', () => {
            const firstEnv = { a : 15, b : 20 };
            const secondEnv = { c : 25, b : 14};

            let result = checkEnv(firstEnv, secondEnv);
            assert.equal(result, 0); 
        });
        it('can put second envelope to first', () => {
            const firstEnv = { a : 25, b : 20 };
            const secondEnv = { c : 19.98, b : 24};

            let result = checkEnv(firstEnv, secondEnv);
            assert.equal(result, 1); 
        });
        it('can put first envelope to second', () => {
            const firstEnv = { a : 25, b : 20 };
            const secondEnv = { c : 23, b : 30};

            let result = checkEnv(firstEnv, secondEnv);
            assert.equal(result, 2); 
        });
        it('function have arguments', () => {
            const invalidData = {
                status : 'failed',
                reason : 'function need 2 arguments'
            };
            let result = checkEnv();
            assert.deepEqual(result, invalidData); 
        });
        it('function call arguments is objects', () => {
            const firstEnv = 'x';
            const secondEnv = 5;
            const invalidData = {
                status : 'failed',
                reason : 'arguments must be an objects'
            };
            let result = checkEnv(firstEnv, secondEnv);
            assert.deepEqual(result, invalidData); 
        });
        it('envelope side length 0 - 1000', () => {
            const firstEnv = { a : 1001, b : 999 };
            const secondEnv = { c : 50, b : 5};
            const invalidData = {
                status : 'failed',
                reason : 'side length min 0 - max 1000'
            };
            let result = checkEnv(firstEnv, secondEnv);
            assert.deepEqual(result, invalidData);
        });
    });
}