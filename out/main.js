"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateOperationsManipulator2 = require("./src/date.operations.manipulator2");
let usa = new dateOperationsManipulator2.DateManipulator();
let brazil = new dateOperationsManipulator2.DateManipulator();
//It sets the parameters to generate a new USA date format
usa.parameters.usa = true;
//It sets the parameters to generate a new Brazilian date format
brazil.parameters.brazil = true;
let currentUSAdate = usa.getNewDate();
let currentBrDate = brazil.getNewDate();
console.log(`Current USA Date: ${currentUSAdate}`);
console.log(`Current Brazilian Date: ${currentBrDate}`);
//It adds one more year - USA
console.log("\nIt adds 3 years - USA");
console.log(`Current date: ${currentUSAdate}`);
//It sets the parameters
usa.parameters.fullDate = currentUSAdate;
usa.parameters.sumYear = 3;
console.log(`3 more years: ${usa.addYearsToDate()}`);
//It adds one more year - Brazil
console.log("\nIt adds 3 years - Brazil");
console.log(`Current date: ${currentBrDate}`);
brazil = new dateOperationsManipulator2.DateManipulator();
//It sets the parameters
brazil.parameters.fullDate = currentBrDate;
brazil.parameters.sumYear = 3;
usa.parameters.usa = false;
console.log(`3 more years: ${brazil.addYearsToDate()}`);
//It adds 5 days - USA
console.log("\nIt adds 5 days - USA");
usa = new dateOperationsManipulator2.DateManipulator();
usa.parameters.sumDay = 5;
usa.parameters.usa = true;
usa.parameters.fullDate = currentUSAdate;
console.log(`Current date: ${currentUSAdate}`);
console.log(`5 more days: ${usa.addDaysToDate()}`);
//It adds 5 days - Brazil
console.log("\nIt adds 5 days - Brazil");
brazil.parameters.sumDay = 5;
console.log(`Current date: ${currentBrDate}`);
console.log(`5 more days: ${brazil.addDaysToDate()}`);
//It adds 5 months when date is 05/09/2022 - USA
console.log("\nIt adds 5 months - USA");
usa.parameters.sumMonth = 5;
console.log(`Current date: ${currentUSAdate}`);
console.log(`5 more months: ${usa.addMonthsToDate()}`);
//It adds 5 months when date is 09/05/2022 - Brazil
console.log("\nIt adds 5 months - Brazil");
brazil.parameters.sumMonth = 5;
console.log(`Current date: ${currentBrDate}`);
console.log(`5 more months: ${brazil.addMonthsToDate()}`);
//# sourceMappingURL=main.js.map