const sumAll = function(startNum, endNum) {
    output = 0

    if ((startNum < 0 || endNum < 0) || !Number.isInteger(startNum) || !Number.isInteger(endNum)) {
        return "ERROR"
    }

    if (startNum < endNum) {
        for (let i = startNum; i <= endNum; i++) {
            output += i
        }
    } else {
        for (let i = endNum; i <= startNum; i++) {
            output += i
        }
    }

    return output

};

// Do not edit below this line
module.exports = sumAll;
