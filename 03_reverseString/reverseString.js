const reverseString = function(word) {
 let reversed = '';

 for (let index = word.length - 1 ; index >= 0 ; index--) {
    reversed += word[index]
 }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
