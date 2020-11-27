const removeFromArray = function (myArray, ...args) {
    myArray = myArray.filter( function( el ) {
        return !args.includes( el );
      } );
    return myArray;
}


module.exports = removeFromArray
