const { it, expect, describe } = require("@jest/globals");
const cash = require('./index')


describe('ATM nominals', function () {
    it('if 0 then emty object', () => {
        expect(cash.getCash(0, cash.cashStore)).toMatchObject({ });
    });
    it('7000 should be 1000:2 and 5000:1', () => {
        expect(cash.getCash(7000, cash.cashStore)).toMatchObject({ 1000: 2, 5000: 1 });
    });
    it('11800 should be 100:3, 500: 1, 1000: 1, 5000:2', () => {
        expect(cash.getCash(11800, cash.cashStore)).toMatchObject({ 100: 3, 500: 1, 1000: 1, 5000: 2 });
    });
    it('Error there are no less then 100 nominals', () => {
        expect(cash.getCash(150, cash.cashStore)).toThrowError('Enter a valid number.');
    });
    it('Error not enough money for sum', () => {
        expect(cash.getCash(100000, cash.cashStore)).toThrowError('Not enough money.');
    });
});



