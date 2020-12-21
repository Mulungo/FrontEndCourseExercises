const caesar = function (str, shift) {
    //converts negative shift to a positive one
    if (shift < 0) {
        shift = 26 + (shift % 26);
      }
      return str
        .split("")
        .map(str => {
          string = String.fromCharCode(str.charCodeAt());
          characterCode = str.charCodeAt(); 
          if (characterCode >= 65 && characterCode <= 90) {
            return String.fromCharCode(((characterCode - 65 + shift) % 26) + 65);
          } else if (characterCode >= 97 && characterCode <= 122) {
            return String.fromCharCode(((characterCode - 97 + shift) % 26) + 97)
          } else {
            return string;
          }
        })
        .join("");
}

module.exports = caesar
