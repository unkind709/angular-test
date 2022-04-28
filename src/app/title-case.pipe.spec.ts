import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
    let pipe: TitleCasePipe;

    beforeEach(() => {
        pipe = new TitleCasePipe();
    });

    it('ใส่ abc เป็น Abc', () => {
        expect(pipe.transform('abc')).toBe('Abc');
    });

    it('ใส่ abc def เป็น Abc Def', () => {
        expect(pipe.transform('abc def')).toBe('Abc Def');
    });
});