const repeatString = function(word,times) {
    let string = ''

    if (times < 0) {
        return "ERROR"
    }

    for (let index = 0; index < times; index++) {
        string += word;
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
