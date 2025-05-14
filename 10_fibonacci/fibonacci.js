const fibonacci = function(num) {

    n = parseInt(num);

    if (n === 1 || n === 2) {
        return 1;
    } else if ( n < 0 ) {
        return "OOPS";
    } else if (n === 0) {
        return 0;
    }

    let n1 = 1;
    let n2 = 1;
    let fib = 0;

    for (let i=3; i<=n; i++) {
        fib = n1 + n2
        n1 = n2;
        n2 = fib;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
