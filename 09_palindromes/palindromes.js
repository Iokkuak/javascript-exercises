const alphaNumeric = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";

const palindromes = function (string) {
    string = string.
        toLowerCase().
        split('').
        filter(char => alphaNumeric.includes(char)).
        join('');

    const reversedString = string.
        split('').
        reverse().
        join('');

    return string == reversedString;
}

// Do not edit below this line
module.exports = palindromes;
