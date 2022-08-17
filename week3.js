
// Week 3 Coding Assignment Step 1: Programmatically subtract the 1st element
//from the last element in the "ages" array.


//Step 1.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Step 1a.
function subtractFirstLast(a){
	let x = a[a.length-1] 
	let y = a[0];
	console.log(x-y)
}
subtractFirstLast(ages);

//Step 1b.
ages.push(16);
subtractFirstLast(ages);

//Step 1c.

let sum = 0

for(let number of ages) {
	sum += number;
}
let average = sum/ages.length
console.log(average);

//I used .length-1 to locate the last element in the array and used the 
//index 0 to access the first element in the array. I used index 0 because the 
//the first element will always be the 0 index. I used .length-1 to access the
//last element because this uses the total length of the array and subtracts 
//one index to find the last element of the array. I assigned the returned data
//to a variable and subtracted the variables. To find the average I created a 
//variable (sum) to hold the sum of the numbers in ages. I used a for loop to 
// loop the numbers and assign them to the sum variable. I then created a variable
// called average to hold the statement to find the average of the array. Which is the
//sum of the numbers divided by the length of the array and printed the output to the console.

//Step 2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//Step 2a
let total = 0

	for(let i = 0; i < names.length; i++){
		total += names[i].length
}

let avrg = total/names.length
console.log(avrg)
//Step 2b
let joinedName = names.join(' ');
console.log(joinedName);

//Step 3
