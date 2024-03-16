export function parseStrings(strings) {
    if (strings.length === 0) return '';

    let result = strings[0];

    for (let i = 1; i < strings.length; i++) {
        if (i === strings.length - 1) {
            result += ' and ';
        } else {
            result += ', ';
        }
        result += strings[i];
    }

    return result;
}