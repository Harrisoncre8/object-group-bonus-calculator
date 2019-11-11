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

let newEmployeesArray = [];

function addEmployee( employees ){
  // loop through employees array
  for (let i=0; i<employees.length; i++){
    let newEmployees = {
      name: name,
      bonusPercentage: bonusPercentage,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus
    } // end object literal
    calculateBonus();
    newEmployeesArray.push();
  }// end for loop
}// end addEmployee function

function calculateBonus(){
  newEmployees.bonusPercentage = 0;
  if (employees.employeeNumber[i] === 3 && employees.reviewRating === 5 && presInt(employees.annualSalary) > 65000){
    newEmployees.bonusPercentage = 0.12;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = newEmployees.totalBonus + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating === 4 && presInt(employees.annualSalary) > 65000){
    newEmployees.bonusPercentage = 0.09;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = newEmployees.totalBonus + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating === 3 && presInt(employees.annualSalary) > 65000){
    newEmployees.bonusPercentage = 0.08;
    return newEmployees.totalCompensation = newEmployees.totalBonus + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating <= 2 && presInt(employees.annualSalary) > 65000){
    newEmployees.bonusPercentage = 0.04;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = newEmployees.totalBonus + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating === 5){
    newEmployees.bonusPercentage = 0.13;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = newEmployees.totalBonus + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating === 4){
    newEmployees.bonusPercentage = 0.10;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = newEmployees.totalBonus + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating === 3){
    newEmployees.bonusPercentage = 0.09;
    return newEmployees.totalCompensation = newEmployees.totalBonus + paresInt(employees.annualSalary);
  }
  if (employees.employeeNumber[i] === 3 && employees.reviewRating <= 2){
    newEmployees.bonusPercentage = 0.05;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = newEmployees.totalBonus + paresInt(employees.annualSalary);
  }
  if (employees.reviewRating <= 2){
    newEmployees.bonusPercentage = 0;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = employees.annualSalary;
  }
  if (employees.reviewRating === 3){
    newEmployees.bonusPercentage = 0.04;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = newEmployees.totalBonus + paresInt(employees.annualSalary);
  }
  if ( employees.reviewRating === 4){
    newEmployees.bonusPercentage = 0.06;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = newEmployees.totalBonus + parseInt(employees.annualSalary);
  }
  if (employees.reviewRating === 5){
    newEmployees.bonusPercentage = 0.10;
    newEmployees.totalBonus = newEmployees.bonusPercentage * employees.annualSalary;
    return newEmployees.totalCompensation = newEmployees.totalBonus + parseInt(employees.annualSalary);
  }
}// end calculateBonus function

console.log( employees );

