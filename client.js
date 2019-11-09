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

// Loop over the `employees` array and do the following:
// * use each employee object as the input to the function described below.
// * `console.log` the results of each iteration
for ( let i=0; i<employees.length; i++ ){
} 
}// end for loop
  
// function that takes in employees object and returns new object
function newObjectEmployee (employeesObject){
}// end newObjectEmployee function


//  function calculates & changes object
// function employeeSalary(){
//   // run calculate bonus function
//   calculateBonus();
//   // return employee object with new properties
//   let newObjectEmployee = {
//     name: newObjectName,
//     employeeNumber: newObjectEmployeeNumber,
//     inputAnnualSalary: newSalary,
//     reviewRating: newObjectRating
//   }// end new object
//   return newObjectEmployee;
// }// end employeeSalary function

// // Bonus calculation function
function calculateBonus(person){
for ( i = 0; i < employees.length; i++ ){
// if a rating of a 2 or below - does not receive a bonus
if ( employees.reviewRating <= 2 ){
  return 'no bonus';
} // end rating of <= 2 statement
// a rating of a 3 - receive a base bonus of 4% of their base annual income
else if ( employees.reviewRating === 3 ){
  return (employees.annualSalary * .04)  + parseInt(employees.annualSalary);
} // end 3 rating add 4% to salary
// a rating of a 4 should receive a base bonus of 6% of their base annual income
else if ( employees.reviewRating === 4 ){
  return ( employees.annualSalary * .06 ) + parseInt(employees.annualSalary);
}// end 4 rating
// a rating of a 5 should receive a base bonus of 10% of their base annual income
else if (employees.reviewRating === 5 ){
  return ( employees.annualSalary * .10 ) + parseInt(employees.annualSalary);
} // end 5 rating 
// if index of employee number is === 5 , receive an additional 5%
// else if (employees.employeeNumber[i] === 5){
//   return ( employees.annualSalary * .05 ) + parseInt(employees.annualSalary)
//}// end additional 5%
}// end for loop
}// end bonus calculation function


// // No bonus can be above 13% or below 0% total
// // &&if their annual income is greater than $65,000, they should have their bonus adjusted down 1%
// console.log(calculateBonus(employees));
