const reverseString = function(word) {
    let wordArr = word.split("");
    let wordReverse = "";
    for(let i=wordArr.length-1; i>=0; i--){
        wordReverse += wordArr[i];
    }

    return wordReverse;
};

// Do not edit below this line
module.exports = reverseString;
