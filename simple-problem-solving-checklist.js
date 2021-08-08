
// Feet To Inch

/* function feetToInch(feet){
    const inch = feet / 0.0833333;
    return inch;
}

const feet = 20;
const result = feetToInch(feet);
console.log(result); */

// Centimeter To Meter 

/* function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}
const centimeter = 500;
const result = centimeterToMeter(centimeter);
console.log(result); */

// Book Pages Calculate 

// 1- firstBookPaperNeed = 100;
// 2 - secondBookPaperNeed = 200;
// 3 - ThirdBookPaperNeed = 300;
/* function paperRequirements(firstBook, secondBook, thirdBook){
    const firstBookPaperNeed = 100;
    const secondBookPaperNeed = 200;
    const thirdBookPaperNeed = 300;
    //Paper Calculation
    const firstPaperReq = firstBook * firstBookPaperNeed;
    const secondPaperReq = secondBook * secondBookPaperNeed;
    const thirdPaperReq = thirdBook * thirdBookPaperNeed;
    //Total Paper Requirement
    const totalPageNeeded = firstPaperReq + secondPaperReq + thirdPaperReq;
    return totalPageNeeded;

}

const result = paperRequirements(22, 33, 44);
console.log(result); */

/* const friendsName = ['Ibrahimhhhh', 'Howlader', 'Jasimm', 'Sujon', 'Rubel'];

function bestFriend(friendsName){
    let bigName = '';
    for(let i = 0; i < friendsName.length; i++){
        const element = friendsName[i];
        if(element.length < bigName.length){
            bigName = element;
        }
    }
    return bigName;
}
const result = bestFriend(friendsName);
console.log(result); */

const friendsName = ['Ibrahimhhhh', 'Howlader', 'Jasimm', 'Sujon', 'Rubel'];

function bestFriend(friendsName){
    let smallName = '';
    for(let i = 0; i < friendsName.length; i++){
        const element = friendsName[i];
        if(element.length < smallName.length){
            smallName = element;
        }
    }
    return smallName;
}
const result = bestFriend(friendsName);
console.log(result);

