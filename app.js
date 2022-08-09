console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if(count < 0){
        console.log(`${count} is negitive`);
    }
    for( i = 0; i <= count; i++){
        if(i % 2 != 0)
        console.log(i);
    }
}
printOdds(10)
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
 let aboveSixteen = `Congrats ${userName}, you can drive!`;
 let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;
    if(age < 16){
        console.log(belowSixteen);
    }
    else{
        console.log(aboveSixteen);
    }
}
checkAge("jack", 16)
checkAge("tom", 15)
console.log("EXERCISE 3:\n==========\n");

function Cartesian(x, y){
    
    if(x >0 && y >0){
        return `${x}, ${y}: are in Quadrant 1`;
    }
    else if(x < 0 && y > 0){
        return `${x}, ${y}: are in Quadrant 2`;
    }
    else if(x < 0 && y < 0){
        return `${x}, ${y}: are in Quadrant 3`;
    }
    else if(x > 0 && y < 0){
        return `${x}, ${y}: are in Quadrant 4`;
    }
    else if(x = 0 && y != 0){
        return `${x}, ${y}: are on x axis`;
    }
    else if(x != 0 && y == 0){
        return `${x}, ${y}: are on y axis`;
    }
    else{
        return `${x}, ${y}: are on base 0`;
    }
}
function checkQuadrant(x, y){

    switch (true){
        case x >0 && y > 0:
            return `${x}, ${y}: are in Quadrant 1`;

        case x < 0 && y > 0:
            return `${x}, ${y}: are in Quadrant 2`;

        case x < 0 && y < 0:
            return `${x}, ${y}: are in Quadrant 3`;

        case x > 0 && y < 0:
            return `${x}, ${y}: are in Quadrant 4`;
        
        case x == 0 && y > 0:
            return `${x}, ${y}: are on x axis`;
        
        case x > 0 && y == 0:
            return `${x}, ${y}: are on y axis`;
        
        default:
            return `${x}, ${y}: are on base 0`;
    }
}   
console.log(checkQuadrant(2, 2));
console.log(checkQuadrant-(2, 2));
console.log(checkQuadrant(2, -2));
console.log(checkQuadrant(-2,-2));
console.log(checkQuadrant(2, 0));
console.log(checkQuadrant(0, 2));
console.log(checkQuadrant(0, 0));

console.log("EXERCISE 4:\n==========\n");

function Triangle(s1, s2, s3){
    if (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1 ){
        return "This is not a triangle";
    }
    else if(s1 == s2 && s2==s3){
        return "Equilatreal";
    }
    else if(s1 == s2|| s2 == s3 || s1==s3 ){
        return "Isosceles";
    }
    else{
        return "Scalene";
    }
}
console.log(Triangle(2,2,2));
console.log(Triangle(1,2,2));
console.log(Triangle(2,3,4));
console.log(Triangle(1,1,2));

console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, day, usage){
    
}