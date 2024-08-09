export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }
    // Getter and setter for square footage
    get sqft() {
        return this._sqft;
    }
    set sqft(newsqft) {
        this._sqft = newsqft;
    }
    // abstract method
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage')
    }
}
