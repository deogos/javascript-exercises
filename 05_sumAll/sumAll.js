const sumAll = function(numStart,numFinish) {
    let sum = 0;

    if (numStart < 0 || numFinish < 0 ) {
        return "ERROR"
    }

    for(let i = numStart; i <= numFinish; i++)
    {
    sum += i;
    }
    return sum
    
};


// Do not edit below this line
module.exports = sumAll;
