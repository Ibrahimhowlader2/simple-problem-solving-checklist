// 1 . Write 3 Variable (Number, String, Boolean)

/* let name = 'Ibrahim';
let age =  26;
let married = false;

console.log(typeof name);
console.log(typeof age);
console.log(typeof married); */

// 2 . Write 2 Variable (Let, Const) And Change The value

/* let a = 30;
const b = 50;
a = 20;
a = 10;
const total =  a + b;
console.log(total); */

// 3 . Simple math operations () +, -, * , /, %

// +
/* const num1 = 50;
const numb2 = 60;
const total = num1 + numb2;
console.log(total); */
// -
/* const num3 = 70;
const numb4 = 60;
const result = num3 - numb4;
console.log(result); */
 // *
 /* const num5 = 70;
 const numb6 = 60;
 const result2 = num5 * numb6;
 console.log(result2); */
  // () /
  /* const num7 = 70;
  const numb8 = 60;
  const result3 = num7 / numb8;
  console.log(result3); */
  //  %
  /* const num9 = 100;
  const numb10 = 5;
  const result4 = num9 % numb10;
  console.log(result4); */

// 4 . Comparison
/* const number1 = 30;
const number2 = 20; */
// <, >, ==, !=, <=, >=
/* if(number1 >= number2){
    console.log(true);
}else{
    console.log(false);
} */

// 5 . two condition, case-1: fulfill both condition, case -2: fulfill at least one condition.

/* const getJob = true;
const salary = 300000;
if(getJob == true && salary < 40000){
    console.log('Tumar Biyer jonno patri dekhbo');
}
else if(getJob == true || salary > 40000 ){
    console.log('Deskha shuru kore dichi');
}
else{
    console.log('Biyer jonno kisudin Wait korte hobe');
} */

//  6 . If - Else

/* const savingMoney = 50000;
if(savingMoney > 300000){
    console.log('You can go Malaysia');
}else{
    console.log("You can't go Malaysia");
} */

//  7 . While Loop to display 7 to 19 numbers. Only display odd numbers including 7 to 19

/* let i = 7;
while(i <= 19){
    console.log(i);
    i = i + 2;
} */

//  8 . Declare an array. number of elements. update or change 4th position element. add or remove elements. Check whether a specific value exists in the array.

/* const numbs = [33, 39, 44, 54, 22, 98];

numbs.push(66,77);
console.log(numbs);
numbs.pop();
console.log(numbs);
numbs[4] = 25;
console.log(numbs);

const elements = numbs.length;
console.log(elements);
 */

//  9 . Use any for loop to display every elements of an array

/* const myFriendName = ['Ibrahim Howlader', 'Jasim Pal', 'Sujon Dhali', 'Rubel Mia', 'Ibrahim Kholid Howlader'];
const myFriendName2 = ['Ibrahim Howlader', 'Jasim Pal', 'Sujon Dhali', 'Rubel Mia', 'Ibrahim Kholid Howlader'];

for(let i = 0; i < myFriendName.length; i++){
    const elements = myFriendName[i];
    console.log(elements);
}
for(const friend of myFriendName2){
    console.log(friend);
} */

//  10 . You have an array of numbers. display only the number bigger than 80.

let numb = [33, 44, 77, 43, 53, 22,85];






//  11 . Write a function that take three numbers and return the multiplication of the three numbers

/* function multiThreeNum(num1, num2, num3){
    const threeNum = num1 * num2 * num3;
    return threeNum;
}
const result = multiThreeNum(12, 22, 33);
console.log(result); */

//  12 . Declare an object and change any property of the value

/* const myFriendName = {
    firstName: 'Ibrahim',
    lastName: 'Howlader',
    age: 26,
    birthOfDate: '17-07-1997',
    gender: 'male',
    lover: 'janina'
};
myFriendName.lover = 'Allah'
console.log(myFriendName); */