const repeatString = function (string, times) {

    if (times < 0) {
        return "ERROR"
    }
    if (times === 0 || string === "") {
        return "";
    }
    if (times === 1) {
        return string;
    }
    if (times > 1) {
        let newString = "";
        for (let i = 0; i < times; i++) {
            newString = newString.concat(string);
        }
        return newString;
    }
}


module.exports = repeatString
