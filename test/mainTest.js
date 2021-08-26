import { test1 } from './test1.js';
import { test2 } from './test2.js';

export const mainTest = () => {
    mocha.setup('bdd');
    let assert = chai.assert;
    mocha.run();

    test1(assert);
    test2(assert);
}