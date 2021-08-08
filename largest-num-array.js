function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

let age = [21, 45, 55, 66, 77];
const oldest = largestElement(age);
// const oldest2  = largestElement([-2, -5, -6]);
console.log(oldest);