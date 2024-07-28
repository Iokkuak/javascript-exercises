const fibonacci = function(n) {
    if(typeof n !== 'number') {
        n = parseInt(n);
    }

    if(n < 0) return "OOPS";
    if(n == 0) return 0;

    let curr = 1;
    let prev = 0;

    for(let i = 0; i < n-1; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
