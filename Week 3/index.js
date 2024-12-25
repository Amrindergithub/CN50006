// Function definition
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + ". Your monthly Salary is " + Salary);
}

// Display a greeting
console.log("This is my first program in Node.js");

// Variables for function call
var EmpName = "James";
var EmpSalary = 1000000;

// Function call
EmployeeInfo(EmpName, EmpSalary);

// Arrow function definition
const EmpSkills = (skills) => {
    console.log("Professional in " + skills);
};

// Function call
EmpSkills("Java");

const student = require('./StudentInfo');
const Person = require('./Person');

console.log("Amrinder: " + student.getName());
console.log("Campus: " + student.Location());
console.log("Date of Birth: " + student.dob);
console.log("Grade: " + student.Studentgrade(55));

const person1 = new Person("James", 25, "j007@gmail.com");
console.log("Using Person Module: ", person1.getPersonInfo());

const os = require("os");
const util = require("util");

console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + " Release: " + os.release());
console.log("Uptime: " + os.uptime() / 3600 + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + os.totalmem() / 1e9 + " GB");
console.log("Free Memory: " + os.freemem() / 1e9 + " GB");
console.log("CPU Info: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));