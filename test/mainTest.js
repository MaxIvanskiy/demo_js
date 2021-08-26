import { test1 } from './test1.js';

export const mainTest = () => {
    mocha.setup('bdd');
    let assert = chai.assert;
    mocha.run();

    test1(assert);
}