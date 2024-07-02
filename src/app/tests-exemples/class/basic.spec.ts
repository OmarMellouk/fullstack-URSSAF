import { BasicClass, ValueError } from './basic';

export class AnotherError extends Error {
    constructor(message?: string) {
        super(message); // ‘Error’ breaks prototype chain here
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }
}

describe('BasicTest test setter', function() {

    it('Validate no initial value', function() {
        const theClass = new BasicClass();

        expect(theClass.currentValue).toBeUndefined();
        expect(theClass.currentValue).not.toBeDefined();
    });

    it('Validate set value', function() {
        const theClass = new BasicClass();
        theClass.setValue(BasicClass.VALUE_A);

        expect(theClass.currentValue).toBe(BasicClass.VALUE_A);
    });

    it('Validate value type check', function() {
        const theClass = new BasicClass();

        // Validation basique
        expect(function () {
            theClass.setValue(1);
        }).toThrowError('Value should be a string');

        // Validation via RegEx
        expect(function () {
            theClass.setValue(1);
        }).toThrowError(new RegExp('^Value .*a string$'));

    });

    it('Validate conformity check', function() {
        const theClass = new BasicClass();

        // Validation via Typage
        expect(function () {
            theClass.setValue('a');
        }).toThrowError(ValueError);

        // Exemple montrant qu'un
        expect(function () {
            theClass.setValue('a');
        }).not.toThrowError(AnotherError);

    });

});
