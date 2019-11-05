const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


// Master Function - calculates & changes object
function employeeSalary(){
  // run calculate bonus function
  // return employee object with new properties
}// end function


// Bonus calculation function
function calculateBonus(person){
// if a rating of a 2 or below - does not receive a bonus
if ( employees.annualSalary <= 2 ){
  return 'no bonus';
} // end rating of <= 2 statement
// a rating of a 3 - receive a base bonus of 4% of their base annual income
if ( employees.annualSalary === 3 ){
{ employees.annualSalary * .04 } + employees.annualSalary;
} // end 3 rating add 4% to salary
// a rating of a 4 should receive a base bonus of 6% of their base annual income
if (  )
// a rating of a 5 should receive a base bonus of 10% of their base annual income
  
// if index of employee number is === 5 , and receive an additional 5%
//  && if their annual income is greater than $65,000, they should have their bonus adjusted down 1%

// No bonus can be above 13% or below 0% total
}// end bonus calculation function

