let numbers = [23, 55, 44, 66, 88];
function arraySum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element
    }
    return sum;
}

let result = arraySum(numbers);
console.log(result);
