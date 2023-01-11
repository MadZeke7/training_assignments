import { useState } from "react";

function StudentCrud() { 

    const  [studentArray, setStudentArray]  =  useState([]);
    const [sid, setSid] = useState("");
    const [sname, setSname] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [email, setEmail] = useState("");

    function  getStudents()
    {
        let studentArray = [
            {sid:1, sname:"Ankeet", age:22, course: "Computers", email:"ankanil@deloitte.com"},
            {sid:2, sname:"Shravan", age :22, course: "Electronics", email:"shlingala@deloitte.com"},
            {sid:3, sname:"Mitalee", age :22, course: "Electronics", email:"mitsawant@deloitte.com"},
            {sid:4, sname:"Evin", age :21, course: "Mechanical", email:"erenji@deloitte.com"},
            {sid:5, sname:"Renji", age :54, course: "IT", email:"rdaniel@deloitte.com"}
        ];

      setStudentArray( studentArray );
    }

    function  addStudent()
    {
        let studentObj = {};
        studentObj.sid = sid; 
        studentObj.sname = sname; 
        studentObj.age = age; 
        studentObj.course = course; 
        studentObj.email = email; 

        let tempArray = [...studentArray];
        tempArray.push( studentObj );  
         
        setStudentArray( tempArray );
    }

    function updateStudent(){
        let tempArray = [...studentArray];

        let item = tempArray.find(item => item.sid === sid);
        item.sid = sid;
        item.sname = sname;
        item.age = age;
        item.course = course;
        item.email = email;

        setStudentArray(tempArray);
    }
    
    function  deleteStudent(sno)
    {
         let tempArray = [...studentArray];

         let index = tempArray.findIndex(item => item.sid === sno);
         tempArray.splice(index, 1);
         
         setStudentArray( tempArray );
    }

    function  selectStudent(sno)
    {
         let studentObj = studentArray.find(item => item.sid === sno);
         setSid(studentObj.sid);
         setSname(studentObj.sname);
         setAge(studentObj.age);
         setCourse(studentObj.course);
         setEmail(studentObj.email);
    }


    let result = studentArray.map( item => 
        <tr>
            <td> {item.sid}  </td>  
            <td> {item.sname}  </td>                
            <td> {item.age}  </td> 
            <td> {item.course}  </td>
            <td> {item.email}  </td> 
            <td>
                <a href="javascript:void(0);"  onClick={() => deleteStudent(item.sid)}>Delete</a> |
                <a href="javascript:void(0);"  onClick={() => selectStudent(item.sid)}>Select</a>
            </td>
        </tr>);

  
  return (
      <>
          <h3>Dynamic Operations (CRUD) on Array of Object</h3>
          <hr/>

          <input placeholder="Student ID"  value={sid}  onChange={event => setSid(event.target.value)}  />
          <input placeholder="Name"  value={sname} onChange={event => setSname(event.target.value)}  />
          <input placeholder="Age" value={age}  onChange={event => setAge(event.target.value)}  />
          <input placeholder="Course" value={course}  onChange={event => setCourse(event.target.value)}  />
          <input placeholder="Email" value={email}  onChange={event => setEmail(event.target.value)}  />
        <br/><br/>

          <input type="button" value="Get Students" onClick={getStudents} />
          <input type="button" value="Add Student" onClick={addStudent} />
          <input type="button" value="Update Student" onClick={updateStudent} />

        <br/><br/>
          <table border="2"  width="500">
              <tr>
                <th>Student ID</th>
                <th>Name</th>               
                <th>Age</th>
                <th>Course</th>
                <th>Email</th>
                <th></th>
              </tr>  

                {result}

            </table>

      </>   
  );
}

export default StudentCrud;