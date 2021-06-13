function solve(number) {
    let sum = 0;
    let lastdigit = number%10;
    let areNumbersSame= true;
    while(number>0)
    {
        let digit = number%10;
        if(lastdigit != digit)
        {
            areNumbersSame=false;
        }
        sum+=digit;
        number= Math.floor(number/10);
    }
    console.log(areNumbersSame);
    console.log(sum);
}

solve(2222222);
solve(1234);