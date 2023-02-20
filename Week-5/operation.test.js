const mathOperations  = require('./Ex-5.4-operation');

describe('Tests', () => {
    test('Add Operation', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test('Subtraction Operation', () => {
        expect(mathOperations.diff(10, 2)).toBe(8);
    });

    test('Multiplication Operation', () => {
        expect(mathOperations.product(3, 2)).toBe(6);
    });
})