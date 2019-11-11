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

function addEmployee(){
  // loop through employees array
  for (let i=0; i<employees.length; i++){
    let newEmployees = {
      name: name,
      bonusPercentage: bonusPercentage,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus
    } // end object literal
    calculateBonus();
  }// end for loop
}// end addEmployee function

function calculateBonus(){
  let defaultBonus = 0;
  if (employees.reviewRating <= 2){
    return 'no bonus';
  }
  if (employees.reviewRating === 3){
    let defaultBonus = 0.04;
    return (defaultBonus * employees.annualSalary) + paresInt(employees.annualSalary);
  }
  if ( employees.reviewRating === 4){
    let defaultBonus = 0.06;
    return (defaultBonus * employees.annualSalary) + parseInt(employees.annualSalary);
  }
  if (employees.reviewRating === 5){
    let defaultBonus = 0.10;
    return (defaultBonus * employees.annualSalary) + parseInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating === 5){
    let defaultBonus = 0.15;
    return (defaultBonus * employees.annualSalary) + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating === 4){
    let defaultBonus = 0.10;
    return (defaultBonus * employees.annualSalary) + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating === 3){
    let defaultBonus = 0.09;
    return (defaultBonus * employees.annualSalary) + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating <= 2){
    let defaultBonus = 0.05;
    return (defaultBonus * employees.annualSalary) + paresInt(employees.annualSalary);
  }
}// end calculateBonus function

console.log( employees );