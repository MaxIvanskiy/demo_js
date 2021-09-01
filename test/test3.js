import { task3 } from '../src/task3.js';

export const test3 = (assert) => {
    describe('Task 3 (triangles)', () => {
        it('function work correctly', () => {
            const triangles = [ 
                { vertices : 'ABC', a : 40, b : 40, c : 40 }, 
                { vertices : 'XYZ', x : 20, y : 20, z : 20 },
                { vertices : 'UPG', u : 50, p : 50, g : 50 } 
            ];
            let positive = ['UPG', 'ABC', 'XYZ']
            const result = task3(triangles);
            assert.deepEqual(result, positive);
        });
        it('function call have argument', () => {
            const result = task3();
            assert.isFalse(result);
        });
        it('function call argument is Array', () => {
            let triangles = 'argument must be an Array';
            const result = task3(triangles);
            assert.isFalse(result);
        });
        it('function call argument is Array of objects', () => {
            let triangles = [ 5, 'string' ];
            const result = task3(triangles);
            assert.isFalse(result);
        });
        it('triangles sides bigger than 0 max 65536', () => {
            const triangles = [ 
                { vertices : 'ABC', a : 40, b : 40, c : 40 }, 
                { vertices : 'XYZ', x : 0, y : 20, z : 20 },
                { vertices : 'UPG', u : 50, p : 50, g : 50 } 
            ];
            const result = task3(triangles);
            assert.isFalse(result);
        });
    });
}