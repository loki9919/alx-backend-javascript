import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    // getter and setter for the amount
    get amount() {
        return this._amount;
    }
    set amount(newamount) {
        this._amount = newamount;
    }
    // getter and setter for the currency
    get currency() {
        return this._currency;
    }
    set currency(newcurrency) {
        this._currency = newcurrency;
    }
    // Method to display full price information
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
