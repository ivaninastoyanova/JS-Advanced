function solve(speed, area) {
    if(area == 'motorway'){
        let speedLimit=130;
        let status = '';
        if(speed >speedLimit){
            let speedDifference = speed-speedLimit;
            if(speedDifference<=20){
                status = 'speeding';
            }
            else if(speedDifference<=40){
                status = 'excessive speeding';
            }
            else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    }
    else if(area == 'interstate'){
        let speedLimit=90;
        let status = '';
        if(speed >speedLimit){
            let speedDifference = speed-speedLimit;
            if(speedDifference<=20){
                status = 'speeding';
            }
            else if(speedDifference<=40){
                status = 'excessive speeding';
            }
            else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    }
    else if(area == 'city'){
        let speedLimit=50;
        let status = '';
        if(speed >speedLimit){
            let speedDifference = speed-speedLimit;
            if(speedDifference<=20){
                status = 'speeding';
            }
            else if(speedDifference<=40){
                status = 'excessive speeding';
            }
            else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    }
    else if(area == 'residential'){
        let speedLimit=20;
        let status = '';
        if(speed >speedLimit){
            let speedDifference = speed-speedLimit;
            if(speedDifference<=20){
                status = 'speeding';
            }
            else if(speedDifference<=40){
                status = 'excessive speeding';
            }
            else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');