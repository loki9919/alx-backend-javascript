export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string');
        } else {
            this._name = name;
        }
        if (typeof length !== 'number') {
            throw new Error('Length must be a number');
        } else {
            this._length = length;
        }
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new Error('Students must be an array of strings');
        } else {
            this._students = students;
        }
    }

    // Getter and setter for name
    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new Error('Name must be a string');
        }
        this._name = newName;
    }

    // Getter and setter for length
    get length() {
        return this._length;
    }

    set length(value) {
        if (typeof value !== 'number') {
            throw new Error('Length must be a number');
        }
        this._length = value;
    }

    // Getter and setter for students
    get students() {
        return this._students;
    }
    
    set students(value) {
        if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
            throw new Error('Students must be an array of strings');
        }
        this._students = value;
    }
}
