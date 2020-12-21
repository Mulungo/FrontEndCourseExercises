const palindromes = function(str) {
    let splitted = str.split("");
    let reversed = splitted.reverse("");
    let joined = reversed.join("");
    return joined.toLowerCase().replace(/[^0-9a-z]/gi, '') == str.toLowerCase().replace(/[^0-9a-z]/gi, ''); //using regex
}

module.exports = palindromes
