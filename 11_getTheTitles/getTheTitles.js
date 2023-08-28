const getTheTitles = function(books) {
    output = []
    for (let i = 0; i < books.length; i++) {
        output.push(Object.values(books[i])[0])
    }

    return output
};

// Do not edit below this line
module.exports = getTheTitles;
