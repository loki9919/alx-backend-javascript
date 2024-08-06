export default function appendToEachArrayValue(array, appendString) {
    const arrEND = [];
    for (const idx of array) {
        arrEND.push(`${appendString}${idx}`);
    }

    return arrEND;
}
