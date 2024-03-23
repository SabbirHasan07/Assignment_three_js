function groupStudentsByName(students) {
    const groupedStudents = {};
  
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      const name = student.name;
      if (!groupedStudents.hasOwnProperty(name)) {
        groupedStudents[name] = [];
      }
      groupedStudents[name].push(student);
    }
  
    return groupedStudents;
  }
  const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Alice", age: 23 },
    { name: "Charlie", age: 21 },
  ];
  
  console.log("Grouped Students:", groupStudentsByName(students));
  