//  Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

/* const today = new Date()
const day = today.getDay()
const daylist = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
const hour = today.getHours()
const minute = today.getMinutes()
const second = today.getSeconds()
const prepand = hour >= 12 ? 'PM' : 'AM';
console.log(`Today is : ${daylist[day]}`)

console.log(`Current time is : ${hour} ${prepand} : ${minute} : ${second}`)  */


//EXAMPLE 3
// Write a JavaScript program to get the current date.
// mm-dd-yyyy, mm/dd/yyyy


/* const today = new Date();
let month = today.getMonth()+1
let date = today.getDate()
let year = today.getFullYear()
if(month<=10){
  month = `0${month}`
}
if(date<=10){
  date = `0${date}`
}

console.log(`${month}/${date}/${year}`) */

// EXAMPLE 4
//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

/* const side1 = 5;
const side2 = 6;
const side3 = 7;
const semiPerimeter = (side1 + side2 + side3)/2
const triangleArea = Math.sqrt(semiPerimeter*(semiPerimeter-side1)*(semiPerimeter-side2)*(semiPerimeter-side3))
console.log(triangleArea) */

// EXAMPLE 5
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 

