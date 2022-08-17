// // function myFunction() {
// //     for (let i = 0; i < 100; i++)
// //         console.log(i);
// // }

// // myFunction();

// //functions can be created and called at any point later in the code. A function block that is created does
// //not run until it is called. Any programming construct can go inside of a function. Functions should not exceed
// // 3 parameters inside the parenthesis. If you are getting to 3 parameters the code should be reconsidered.

// function createFullName(firstName, lastName) {
//     console.log(firstName + ' ' + lastName);
// }

// createFullName('Tom', 'Sawyer');

// createFullName('Betty', 'Boop');

// createFullName('Philip', 'Harberts');

// let array1 = [1, 5, 6, 9, 10, 14];

// // print the 3rd element in array1

// console.log(array1[2])

// // print the last element in array1

// console.log(array1[5])

// // add 16 and 3 to array1

// array1.push(16, 3);


// // sort the array, then print the 3rd element again
// // did it change?

// array1.sort();
// console.log(array1[2])


// // create a variable called myTodoList that holds an empty array

// let myTodoList = [];

// // add three todo items to the array using a built-in array method

// myTodoList.push('Mow Lawn', 'Spray Weeds', 'Clean Gutters');

// // remove the second item in the array

// myTodoList.splice(1, 1);

// // create another array, yourTodoList, and add two todo items

// let yourTodoList = ['Make Dinner', 'Wash Dishes'];

// // create another array, ourTodoList

// let ourTodoList = [];

// // combine myTodoList and yourTodoList into ourTodoList

// ourTodoList = myTodoList.concat(yourTodoList);


// // sort the following array from Z-A



// // create a function called reverse that takes in parameter
// // this function will return the opposite of whatever is passed in
// // if its a boolean, return the opposite
// // if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// // if its an array, return the reversed array with each element reversed

// function reverse(parameter) {
//     if(typeof (parameter) === "boolean"){
//         return !parameter;
//     } else if (typeof(parameter) === "string" || typeof(parameter) === "number") {
//         let splitParameter = parameter.split('');

//         let reverseParameter = splitParameter.reverse();

//         let rejoinParameter = reverseParameter.join();

//         return rejoinParameter;

//     }else {
//         console.log('Passed argument must be a boolean, string, or number');
//     }
// }




// // create a function called addingMachine that will add all passed numbers and return the total
// // Note: you don't know how many numbers will be passed


// function addingMachine(num){
//     const sum = prompt(num);
   
//     for (let i =0; i<arguments.length; i++){
//         let number = arguments[i];
//         sum+=number;

//     }
//     return sum;
// }

// const numberSum = 







// You just signed a contract as an estimator for a restoration company.
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

// function profitBonus (grossInvoiced, profitMargin)

//Create a function named checkout that accepts 2 variables named cardBalance and price. 
//If the price is more than the card balance, return false. Otherwise, return the new card balance.


function checkout(cardBalance, price){
    if(price > cardBalance){
        return false;
    }else{
        return cardBalance - price;
    }
}

console.log(checkout(500, 100, 40));

//Write a function called speakFriend that takes one parameter. 
//Return the string "Access Denied". But, if the passed in value is "Mellon", return "Enter"

function speakFriend(password){
    if(password === "Mellon"){
        return 'Enter';
    }else{
        return 'Access Denied';
    }
}

console.log(speakFriend("Melon"))


//Write a function called loopUntilX that takes one parameter. 
//Within the function, write a loop that loops as many times as the passed in value, starting at 0.
// Within the loop, print the number of iterations to the console. Once the loop is done, return true.

// function loopUntilX(){
    
//     for(i = 0, i <= arguments.length, i++)
//         console.log(i);
    
    
// }return true

// console.log(loopUntilX(10));


function loopUntilX(){
    for (let i = 0; i <= arguments; i++)
}

return true


