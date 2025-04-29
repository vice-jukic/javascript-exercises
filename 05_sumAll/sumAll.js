const sumAll = function(num1, num2) {

    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return "ERROR";
    }

    let sum = 0;
    let numMin = Math.min(num1, num2);
    let numMax = Math.max(num1, num2);

    let isInt = (numMin, numMax) => numMin % 1 === 0 && numMax % 1 === 0;

    if (isInt(numMin, numMax) === false) {
        return "ERROR";
      }

    if (numMin < 0 || numMax < 0){
        return "ERROR";
    }

    for (let i=numMin; i<=numMax; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
