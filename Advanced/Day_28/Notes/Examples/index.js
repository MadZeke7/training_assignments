const jsConvert = require('js-convert-case');
const empModule =  require("./emp-module");

console.log("Working with Modules in Node JS");

let  str = empModule.getData();
console.log(str);
console.log("---------------------------------");

  
let  empObj =  empModule.getEmployee();
str =  `Employee Details -->  Id : ${empObj.empno}, Name : ${empObj.ename}, Job : ${empObj.job}, Deptno : ${empObj.deptno}`;
console.log(str);
console.log("---------------------------------");
 
 
 let  empsArray =  empModule.getEmployees();
 
for(let item  of  empsArray)
{
			str =  `Employee Details -->  Id : ${item.empno}, Name : ${item.ename}, Job : ${item.job}, Deptno : ${item.deptno}`;
		console.log(str);	
}
