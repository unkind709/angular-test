import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('should return the supported currencies', () => {
        const result = getCurrencies();

        expect(result).toContain('USD');
    })
})