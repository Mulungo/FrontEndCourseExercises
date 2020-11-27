const removeFromArray = function (myArray, ...args) {
    myArray = [1, 2, 3]
    args = ["1", 3];
    myArray = myArray.filter( function( el ) {
        return !args.includes( el );
      } );
    return myArray;
}


module.exports = removeFromArray
