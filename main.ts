import { DateManipulator } from "./src/date.operations.manipulator2";
import { Parameters } from "./src/parameters";

let usaParameters = new Parameters();
let brazilianParameters = new Parameters();

//It sets the parameters to generate a new USA date format
usaParameters.usa = true;
let usa = new DateManipulator(usaParameters);

//It sets the parameters to generate a new Brazilian date format
let br = new DateManipulator(brazilianParameters);

let currentUSAdate = usa.getNewDate();
let currentBrDate = br.getNewDate();

console.log(`Current USA Date: ${currentUSAdate}`);
console.log(`Current Brazilian Date: ${currentBrDate}`);

//It adds one more year - USA
console.log("\nIt adds 3 years - USA");
console.log(`Current date: ${currentUSAdate}`);
//It sets the parameters
usaParameters.usa = true;
usaParameters.fullDate = currentUSAdate;
usaParameters.sumYear = 3
usa = new DateManipulator(usaParameters);
console.log(`3 more years: ${usa.addYearsToDate()}`);

//It adds one more year - Brazil
console.log("\nIt adds 3 years - Brazil");
console.log(`Current date: ${currentBrDate}`);
//It sets the parameters
brazilianParameters.brazil = true;
brazilianParameters.fullDate = currentBrDate;
brazilianParameters.sumYear = 3
br = new DateManipulator(brazilianParameters);
console.log(`3 more years: ${br.addYearsToDate()}`);

//It adds 5 days - USA
console.log("\nIt adds 5 days - USA");
usaParameters.usa = true;
usaParameters.sumDay = 5
usa = new DateManipulator(usaParameters);
console.log(`Current date: ${currentUSAdate}`);
console.log(`5 more days: ${usa.addDaysToDate()}`);

//It adds 5 days - Brazil
console.log("\nIt adds 5 days - Brazil");
brazilianParameters.brazil = true;
brazilianParameters.sumDay = 5;
br = new DateManipulator(brazilianParameters);
console.log(`Current date: ${currentBrDate}`);
console.log(`5 more days: ${br.addDaysToDate()}`);

//It adds 5 months when date is 05/09/2022 - USA
console.log("\nIt adds 5 months - USA");
usaParameters.usa = true;
usaParameters.sumMonth = 5;
usa = new DateManipulator(usaParameters);
console.log(`Current date: ${currentUSAdate}`);
console.log(`5 more months: ${usa.addMonthsToDate()}`);

//It adds 5 months when date is 09/05/2022 - Brazil
console.log("\nIt adds 5 months - Brazil");
brazilianParameters.brazil = true;
brazilianParameters.sumMonth = 5
usa = new DateManipulator(brazilianParameters);
console.log(`Current date: ${currentBrDate}`);
console.log(`5 more months: ${usa.addMonthsToDate()}`);

//It adds 6 months whend date is 12/21/2022 and returns 06/21/2023
/*console.log("\nIt adds 6 months when date is 12/21/2022 and returns 06/21/2023 - USA");
usa = new DateManipulator(true, false, "12-21-2022", 0, 6);
console.log(`Current date: "12-21-2022"`);
console.log(`6 more months: ${usa.addMonthsToDate()}`);

//It adds 6 months whend date is 21/12/2022 and returns 21/06/2023
console.log("\nIt adds 6 months when date is 21/12/2022 and returns 21/06/2023 - Brazil");
usa = new DateManipulator(false, true, "21-12-2022", 0, 6);
console.log(`Current date: "21-12-2022"`);
console.log(`6 more months: ${usa.addMonthsToDate()}`);

//It adds 12 months and adds one more year in the USA format
console.log("\nIt adds 12 months and adds 1 more year - USA");
usa = new DateManipulator(true, false, currentUSAdate, 0, 12, 0);
console.log(`Current date: ${currentUSAdate}`);
console.log(`12 more months: ${usa.addMonthsToDate()}`);

//It adds 12 months and adds one more year in the Brazil format
console.log("\nIt adds 12 months and adds 1 more year - Brazil");
br = new DateManipulator(false, true, currentBrDate, 0, 12, 0);
console.log(`Current date: ${currentBrDate}`);
console.log(`12 more months: ${br.addMonthsToDate()}`);

//If the the current month has 31 days and the next one has 30 days or less, it gets the last day of the next month
console.log("\nIt adds 1 month when date is 05/31/2022 and returns 06/30/2022 - USA");
usa = new DateManipulator(true, false, "05-31-2022", 0, 1, 0);
console.log(`Current date: 06-30-2022`);
console.log(`1 more month: ${usa.addMonthsToDate()}`);

//If the the current month has 31 days and the next one has 30 days or less, it gets the last day of the next month
console.log("\nIt adds 1 month when date is 31/05/2022 and returns 30/06/2022 - Brazil");
br = new DateManipulator(false, true, "31-05-2022", 0, 1, 0);
console.log(`Current date: 31-05-2022`);
console.log(`1 more month: ${br.addMonthsToDate()}`);

//Should add 5 months when month is equal 11/15/2022 and return 04/15/2023
console.log("\nIt adds 5 months when month is equal 11/15/2022 and return 04/15/2023 - USA");
usa = new DateManipulator(true, false, "11-15-2022", 0, 5, 0);
console.log(`Current date: "11-15-2022"`);
console.log(`5 more months: ${usa.addMonthsToDate()}`);

//Should add 5 months when month is equal 15/11/2022 and return 15/04/2023
console.log("\nIt adds 5 months when month is equal 15/11/2022 and return 15/04/2023 - Brazil");
usa = new DateManipulator(false, true, "15,11,2022", 0, 5, 0);
console.log(`Current date: "15-11-2022"`);
console.log(`5 more months: ${usa.addMonthsToDate()}`);*/