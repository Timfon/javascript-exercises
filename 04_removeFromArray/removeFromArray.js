const removeFromArray = function(array, ...manyVals) {

    for (let i = 0; i < manyVals.length; i++) {

        if (array.includes(manyVals[i])) {
            index = array.indexOf(manyVals[i])
            array.splice(index, 1)
        }
        
        
    }

    return array


};

// Do not edit below this line
module.exports = removeFromArray;
