https://docs.npmjs.com/about-package-readme-files

This package was developed to manipulate dates in the USA and Brazilian format.

Instructions:

First of all, create a package.json:
npm init -y

Install the package:
npm i --save-dev date_operations_manipulator2

Run the following command:
npm install @types/node --save-dev

NOTE: You can just copy and paste the following codes to see how each one works.

After this, you can import the package into your project:
const dateManipulator = require('date_operations_manipulator2');

Now you can use the series of available methods in the package. Available operations:

DateManipulator parameters:
usa: boolean       //true for USA date format 
br: boolean       //true for Brazilian date format
fullDate: string  //It receives a date in a string format
sumYear: number   //It receives an integer representing how many years will be added into the date
sumMonth: number  //It receives an integer representing how many months will be added into the date
sumDay: number     //It receives an integer representing how many days will be added into the date

//It creates an object to get the USA date format: 
let usa = new dateManipulator.DateManipulator(true);
let currentUSAdate = usa.getNewDate();

//It creates an object to get the Brazilian date format: 
let br = new dateManipulator.DateManipulator(false, true);
let currentBrDate = br.getNewDate();

//It adds three more years in the USA date format: 
usa = new dateManipulator.DateManipulator(true, false, currentUSAdate, 3);
console.log(`3 more years: ${usa.addYearsToDate()}`);

//It adds one more year at Brazilian date format: 
br = new dateManipulator.DateManipulator(false, true, currentBrDate, 3);
console.log(`3 more years: ${br.addYearsToDate()}`);

//It adds 5 days in the USA date format: 
usa = new dateManipulator.DateManipulator(true, false, currentUSAdate, 0, 0, 5);
console.log(`5 more days: ${usa.addDaysToDate()}`);

//It adds 5 days at Brazilian date format: 
br = new dateManipulator.DateManipulator(false, true, currentBrDate, 0, 0, 5);
console.log(`5 more days: ${br.addDaysToDate()}`);

//It adds 5 months in the USA date format: 
usa = new dateManipulator.DateManipulator(true, false, currentUSAdate, 0, 5, 0);
console.log(`5 more months: ${usa.addMonthsToDate()}`);

//It adds 5 months when at Brazilian date format: 
br = new dateManipulator.DateManipulator(false, true, currentBrDate, 0, 5, 0);
console.log(`5 more months: ${usa.addMonthsToDate()}`);