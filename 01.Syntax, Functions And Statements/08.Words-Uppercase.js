function solve(input) {
    const regex = /\w+/gim;
    return input.toUpperCase().match(regex).join(', ');
}
console.log(solve('Hi, how are you?'));