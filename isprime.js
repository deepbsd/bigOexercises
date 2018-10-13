function isPrime(n) {
    var start = Date.now();
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        var end = Date.now();
        return false + ' in '+ (end-start)/1000 + ' seconds';
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        var end = Date.now();
        if (n % i == 0) return false + ' in '+ (end-start)/1000 + ' seconds';
    }
    return true + ' in '+ (end-start)/1000 + ' seconds';
}

module.exports = isPrime;