export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }
    // Getter and setter for code
    get code() {
        return this._code;
    }

    set code(newcode) {
        this._code = newcode;
    }

    // Getter and setter for name
    get name() {
        return this._name;
    }

    set name(newname) {
        this._name = newname;
    }
    // Method to display full currency information

    displayFullCurrency() {
        return `${this._name} (${this._code})`
    }
}
