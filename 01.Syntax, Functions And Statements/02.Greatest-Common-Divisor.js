function solve(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
        var temp = a; 
        a = b; 
        b = temp;
    }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

console.log(solve(15, 5));
console.log(solve(2154, 458));