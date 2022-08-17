// Week 3 Coding Assignment 

// Step 1<---Programmatically subtract the 1st element
//from the last element in the "ages" array.--->

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Step 1a.
function subtractFirstLast(a) {
	let x = a[a.length - 1]
	let y = a[0];
	console.log(x - y)
}
subtractFirstLast(ages);

//Step 1b.
ages.push(16);
subtractFirstLast(ages);

//Step 1c.

let sum = 0

for (let number of ages) {
	sum += number;
}
let average = sum / ages.length
console.log(average);



//Step 2 <---Create an array called names that contains the following values:
// ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.--->

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//Step 2a <---Use a loop to iterate through the array and calculate the 
//average number of letters per name. Print the result to the console.--->
let total = 0

for (let i = 0; i < names.length; i++) {
	total += names[i].length
}

let avrg = total / names.length
console.log(avrg)

//Step 2b <--- Use a loop to iterate through the array again and concatenate all
//the names together, separated by spaces, and print the result to the console --->

let joinedName = names.join(' ');
console.log(joinedName);

//Step 3 <--- How do you access the last element of any array? --->

// You access the last element of an array by using .length -1. The end of the array 
// will always be one less than the total of elements since Arrays are zero indexing.

//Step 4 <--- How do you access the first element of an array? --->

// You access the first element of an array by using array[0]. The first element will always be 
// at index 0. So you can call the element by using the specific position.

//Step 5 <--- Create a new array called nameLengths. Write a loop to iterate over the 
// previously created names array and add the length of each name to the nameLengths array.---> 

let nameLength = []

for (let i = 0; i < names.length; i++) {
	nameLength.push(names[i].length);

}
console.log(nameLength)

//Step 6<---Write a loop to iterate over the nameLengths array and calculate the sum of all the elements
// in the array. Print the result to the console.--->

let sumOne = 0
for (let i = 0; i < nameLength.length; i++) {
	sumOne += nameLength[i]
} console.log(sumOne);

//Step 7 <---Write a function that takes two parameters, word and n, as arguments and returns
//the word concatenated to itself n number of times.--->


function concatSelf(word, n) {
	let a = word
	let b = n
	return a.repeat(b)
}
console.log(concatSelf('Hello', 4));

//Step 8 <---Write a function that takes two parameters, 
//firstName and lastName, and returns a full name--->

function fullName(firstName, lastName) {
	return firstName + ' ' + lastName;
}

console.log(fullName('Linda', 'Smith'));

//Step 9 <---Write a function that takes an array of numbers and 
// returns true if the sum of all the numbers in the array is greater than 100

let plusHundred = [10, 20, 30, 40]
let anyNum = [460, 20, 30]

function hundredPlus(x) {
	let a = 0
	for (i = 0; i < x.length; i++) {
		a += x[i]
		}
if(a > 100){
	return true
}else{
	return false
}
	
}
console.log(hundredPlus(plusHundred));
console.log(hundredPlus(anyNum));
// I tested my function 2x. to prove both results. Also had to write the 
// if statement outside the for loop in order for it to print to the console correctly

//Step 10 Write a function that takes an array of numbers and returns the average of all 
//the elements in the array.
let array1 = [10, 20, 20, 30, 40]


function avgArray(arry){
	let a = 0
		for(let i = 0; i < arry.length; i++) {
			a += arry[i]
	} return a / arry.length
}
console.log(avgArray(array1));

//Step 11 Write a function that takes two arrays of numbers and returns true if the average of the elements 
// in the first array is greater than the average of the elements in the second array

function doubleArry (arry1, arry2){
	let a = 0
	let b = 0
	let aa = 0
	let bb = 0
		for(let i =0; i < arry1.length; i++){
			a += arry1[i]
			aa = a/arry1.length
		}
		for(let i = 0; i < arry2.length; i++){
			b += arry2[i]
			bb = b/arry2.length
		}
if(aa > bb){
	return true
}else{
	return false
}
}	
console.log(doubleArry(plusHundred, array1));		

//Step 12 Write a function called willBuyDrink that takes a boolean isHotOutside, 
// and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket 
// is greater than 10.50.

let isHotOutside = true;
let moneyInPocket = 5.00;

function willBuyDrink(a, b){
		if(a === true && b > 10.50){
			return true
		}else{
			return false
		}
}

console.log(willBuyDrink(isHotOutside, moneyInPocket));


















