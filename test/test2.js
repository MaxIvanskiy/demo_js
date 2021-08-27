import { checkEnv } from '../src/task2.js';

export const test2 = (assert) => {
    describe('Task 2', () => {
        it('can\'t put envelopes', () => {
            const firstEnvelope = {
                a : 2,
                b : 3
            };
            const secondEnvelope = {
                a : 2,
                b : 3
            };
            let result = checkEnv(firstEnvelope, secondEnvelope);
            assert.equal(result, 0); 
        });
        it('can put second envelope to first', () => {
            const firstEnvelope = {
                a : 2,
                b : 3
            };
            const secondEnvelope = {
                a : 1,
                b : 2
            };
            let result = checkEnv(firstEnvelope, secondEnvelope);
            assert.equal(result, 1); 
        });
        it('can put first envelope to second', () => {
            const firstEnvelope = {
                a : 1,
                b : 2
            };
            const secondEnvelope = {
                a : 5,
                b : 8
            };
            let result = checkEnv(firstEnvelope, secondEnvelope);
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
            const firstEnvelope = 'x';
            const secondEnvelope = 5;
            const invalidData = {
                status : 'failed',
                reason : 'arguments must be an objects'
            };
            let result = checkEnv(firstEnvelope, secondEnvelope);
            assert.deepEqual(result, invalidData); 
        });
    });
}