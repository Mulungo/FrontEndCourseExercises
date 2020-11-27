const sumAll = function(numA, numB) {
    
    if(typeof numA === "string" || typeof numB === "string" || numA < 0 || numB < 0 || Array.isArray(numA) || Array.isArray(numB)) {
        return "ERROR";
    } else if (numA < numB) {
        let sum = 0;
        for(let i = numA; i <= numB; i++) {
            sum = sum + i;
        }
        return sum;
    } else if (numA > numB) {
        let sum = 0;
        for(let i = numB; i <= numA; i++) {
            sum += i;
        }
        return sum;
    }
}

module.exports = sumAll
