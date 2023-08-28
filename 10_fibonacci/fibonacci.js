const fibonacci = function(num) {
    //say num is 4
    if (num < 0) return "OOPS"

    sequence = [1, 1]
    for (let i = 0; i < num; i++) {
        val = sequence.at(-1) + sequence.at(-2)
        sequence.push(val)
    }
    return sequence[num - 1]

};

// Do not edit below this line
module.exports = fibonacci;
