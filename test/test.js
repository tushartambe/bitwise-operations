const assert = require("assert");
const { add } = require("../src/main")

describe('Add', () => {
    it('Should add two numbers', () => {
        let expectedOutput = 10;
        let actual = add(5, 5);
        assert.deepEqual(actual, expectedOutput);
    });

    it('Should add two negative numbers', () => {
        let expectedOutput = -3;
        let actual = add(-2, -1);
        assert.deepEqual(actual, expectedOutput);
    });

    it('Should add two big numbers', () => {
        let expectedOutput = 63487014;
        let actual = add(54752332, 8734682);
        assert.deepEqual(actual, expectedOutput);
    });

    it('Should throw error for non numbers', () => {
        assert.throws(()=> {add(12, "abc")})
    });
});