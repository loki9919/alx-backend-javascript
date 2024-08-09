export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
        if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
            throw Error('Class extending Building must override evacuationWarningMessage');
        }
    }
    // Getter and setter for square footage
    get sqft() {
        return this._sqft;
    }
    set sqft(newsqft) {
        this._sqft = newsqft;
    }
}
