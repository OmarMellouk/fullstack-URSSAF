/**
 * Erreur retournée en cas de valeur incorrecte
 */
export class ValueError extends Error {
    constructor(message?: string) {
        super(message); // ‘Error’ breaks prototype chain here
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }
}

/**
 * Classe basique servant d'exemple à la validation de méthodes
 */
export class BasicClass {
    public static VALUE_A = 'A';
    public static VALUE_B = 'B';

    public currentValue: string;

    /**
     * Setter basique servant d'exemple.
     * Pour montrer comment valider une exception, une erreur est remontée
     * si une valeur non prévue est définie
     * @param aValue Valeur à définir
     */
    public setValue(aValue: any): void {
        if (typeof aValue !== 'string') {
            throw new Error('Value should be a string');
        }
        if (aValue !== BasicClass.VALUE_A && aValue !== BasicClass.VALUE_B) {
            throw new ValueError('Value should be :	' + BasicClass.VALUE_A +
                                    '" or "' + BasicClass.VALUE_B);
        }
        this.currentValue = aValue;
    }
}

