function StudentDetails(){
    
    const students = [
        {"sid": 1, "sname": "Hugh", "course": "Acting", "age": 50, "total": 70},
        {"sid": 2, "sname": "Reynolds", "course": "Acting", "age": 50, "total": 50},
        {"sid": 3, "sname": "Chris", "course": "Acting", "age": 50, "total": 80},
        {"sid": 4, "sname": "Johhny", "course": "Medical", "age": 35, "total": 100},
        {"sid": 5, "sname": "Tate", "course": "Traffic", "age": 51, "total": 20},
    ]
    return(
        <table border="2">
            <tbody>
                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Total</th>
                </tr>
                {students.map(item => {
                    return (<tr key={students.indexOf(item)}>
                        <td>{item.sid}</td>
                        <td>{item.sname}</td>
                        <td>{item.age}</td>
                        <td>{item.course}</td>
                        <td>{item.total}</td>
                    </tr>)
                })}
            </tbody>
      </table>
    )
}

export default StudentDetails;