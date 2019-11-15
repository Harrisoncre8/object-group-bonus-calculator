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


function createNewEmployees(employee) {
  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
    let bounusPercentage = calculateBonus(employee);
    let totalBonus = bounusPercentage * employee.annualSalary;
    let totalCompensation = Number(employee.annualSalary) + totalBonus;

    let newEmployee = {
      name: employee.name,
      bounusPercentage: bounusPercentage,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus
    }// end object
    return newEmployee;
  }// end for loop
} // end createEmployees

console.log( employees );
console.log( createNewEmployees( employees[0] ) );

function calculateBonus(employee) {
  let bounusPercentage = 0;
if (employee.reviewRating = 3){
     bounusPercentage = .04;
} else if (employee.reviewRating = 4){
   bounusPercentage = .06;
} else if (employee.reviewRating = 5){
   bounusPercentage = .10;
}
if (employee.employeeNumber.length === 4){
  bounusPercentage += .05;
}
if (employee.annualSalary > 65000){
  bounusPercentage -= .01;
}
if (bounusPercentage > .13) {
  bounusPercentage = .13;
} else if (bounusPercentage < 0){
  bounusPercentage = 0;
}
return bounusPercentage;
}// end calculateBonus


