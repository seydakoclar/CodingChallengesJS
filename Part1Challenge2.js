/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/

let marksMass = 78, marksHeight = 1.69, johnsMass = 92, johnsHeight = 1.95;
let marksBmi = marksMass / (marksHeight ** 2);
let johnsBmi = johnsMass / (johnsHeight ** 2);

if (marksBmi > johnsBmi) {
    console.log(`Mark's BMI (${marksBmi}) is higher than John's (${johnsBmi})`);
}
else if (marksBmi < johnsBmi) {
    console.log(`John's BMI (${johnsBmi}) is higher than Mark's (${marksBmi})`);
}
else {
    console.log(`John's BMI (${johnsBmi}) is equal to Mark's (${marksBmi})`);
}