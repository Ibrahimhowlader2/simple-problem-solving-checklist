const business = 660;
const minister = 500;
const army = 600;

// if(business > minister){
//     console.log('Business man er pula is bigger');
// }
// else{
//     console.log('Minister er pula is Bigger');
// }

// Compare 3

/* if(business > minister && business > army){
    console.log('Business Is Bigger');
}
else if(minister > business && minister > army){
    console.log('Minister Is Bigger');
}
else{
    console.log('Army Is Bigger');
} */

/* const largestNum = Math.max(business, minister, army);
console.log('Largest Number is ', largestNum); */

/* function largestNumber(first, second, third){
    if(first > second && first > third){
        return first;
    }
    else if(second > first && second > third){
        return second;
    }
    else{
        return third;
    }
}

const larger = largestNumber(1022, 366, 655);
console.log('Largest Number Is:', larger); */

function smallNumber(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    }
    else{
        return third;
    }
}

const smallNum = smallNumber(1022, 366, 655);
console.log('Largest Number Is:', smallNum);

