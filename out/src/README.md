This package was developed to manipulate dates in the USA and Brazilian format.<br />

<h1>Instructions:</h1>

First of all, create a package.json:<br />
npm init -y<br />

Install the package:<br />
npm i date_operations_manipulator2<br />

Run the following command:<br />
npm install @types/node --save-dev<br />

<p>NOTE: You can just copy and paste the following codes to see how each one works.</p>

<h2>After this, you can import the package into your project</h2>
<p>const dateManipulator = require('date_operations_manipulator2');</p>

<h4>Now you can use the series of available methods in the package. Available operations:</h4>

<h2>DateManipulator parameters</h2>

<b>Note: This package does not use parameters, it contains a property called<br />"parameters" which is used to pass the values to the class.</b>

<p>usa: boolean      //true for USA date format </p>
<p>brazil: boolean   //true for Brazilian date format</p>
<p>fullDate: string  //It receives a date in a string format</p>
<p>sumYear: number   //It receives an integer representing how many years will be added into the date</p>
<p>sumMonth: number  //It receives an integer representing how many months will be added into the date</p>
<p>sumDay: number    //It receives an integer representing how many days will be added into the date</p>

<h3>It creates an object to get the USA date format</h3>
let usa = new dateManipulator.DateManipulator();<br />
usa.parameters.usa = true;<br />
let currentUSAdate = usa.getNewDate();<br />

<h3>It creates an object to get the Brazilian date format</h3>
let br = new dateManipulator.DateManipulator();<br />
br.parameters.brazil = true;<br />
let currentBrDate = br.getNewDate();<br />

<h3>It adds three more years in the USA date format</h3>
usa.parameters.fullDate = currentUSAdate;<br />
usa.parameters.sumYear = 3;<br />
console.log(`3 more years: ${usa.addYearsToDate()}`);<br />

<h3>It adds one more year at Brazilian date format</h3>
br.parameters.brazil = true;<br />
br.parameters.fullDate = currentBrDate;<br />
br.parameters.sumYear = 1;<br />
console.log(`3 more years: ${br.addYearsToDate()}`);<br />

<h3>It adds 5 days in the USA date format</h3>
usa.parameters.usa = true;<br />
usa.parameters.fullDate = currentUSAdate;<br />
usa.parameters.sumDay = 5;<br />
console.log(`5 more days: ${usa.addDaysToDate()}`);<br />

<h3>It adds 5 days at Brazilian date format: </h3>
br.parameters.brazil = true;<br />
br.parameters.fullDate = currentBrDate;<br />
br.parameters.sumDay = 5;<br />
console.log(`5 more days: ${br.addDaysToDate()}`);<br />

<h3>It adds 5 months in the USA date format</h3>
usa.parameters.usa = true;<br />
usa.parameters.sumMonth = 5;<br />
usa.parameters.fullDate = currentUSAdate;<br />
console.log(`5 more months: ${usa.addMonthsToDate()}`);<br />

<h3>It adds 5 months when at Brazilian date format</h3>
br.parameters.brazil = true;<br />
br.parameters.sumMonth = 5;<br />
br.parameters.fullDate = currentBrDate;<br />
console.log(`5 more months: ${br.addMonthsToDate()}`);