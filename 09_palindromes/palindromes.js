const palindromes = function (phrase) {
    word = phrase.toLowerCase()
    //phrase is a string
    let clean = ""

    for (let i = 0; i < word.length; i++) {
        if (word[i].match(/^[0-9a-z]+$/) && word[i] != " ") {
            clean += word[i]
        }
    }
    return clean == Array.from(clean).reverse().join("")


};

// Do not edit below this line
module.exports = palindromes;
