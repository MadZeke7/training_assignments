
exports.getData =  function()
{
		return "Hello from Employee Module --  getData()";
};

exports.getEmployee =  function()
{
		let  empObj = {empno :  15454,  ename  : "Scott",  job :  "Manager", deptno : 10};
		return empObj; 
};

exports.getEmployees =  function(    )
{
		let  empsArray = [
					{empno :  15454,  ename  : "Scott",  job :  "Manager", deptno : 10},
					{empno :  15455,  ename  : "Smith",  job :  "Lead", deptno : 20},
					{empno :  15456,  ename  : "Sandy",  job :  "Manager", deptno : 30},
					{empno :  15457,  ename  : "Sam",  job :  "TestLead", deptno : 10},
					{empno :  15458,  ename  : "Stephen",  job :  "Lead", deptno : 40},
					{empno :  15459,  ename  : "Santosh",  job :  "Tester", deptno : 50}
		   ];
		   
		return empsArray; 
};



	