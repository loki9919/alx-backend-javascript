export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }
    // Method to handle casting to a Number
    valueOf() {
        return this._size;
    }
    // Method to handle casting to a String
    toString() {
        return this._location;
    }
}
