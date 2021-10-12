//1
const sumOfThreeAndFive = () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

//console.log(sumOfThreeAndFive())



const greaterNum = (x, y) => {
    if (x > y) {
        return x
    }
    else if (x < y) {
        return y
    }
    else if (x === y) {
        return "both integers are equal"
    }
    else
        return null;
}

//console.log(greaterNum("10", 10))



const oddAndEvenInFifteen = () => {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`)
        }
        else {
            console.log(`${i} is odd`)
        }
    }
}

//oddAndEvenInFifteen()


// const sortThreeNums = (x, y, z) => {
//     if (x > y && x > z) {
//         console.log(x)
//     }
//     if (y > x && y > z){
//         console.log(y)
//     }
//     if (z > y && z > x) {
//         console.log(x)
//     }
// }
