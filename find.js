const students = [
  { name: "Topu1", age: 21 },
  { name: "tipu2", age: 32 },
  { name: "dipu3", age: 23 },
  { name: "nipu4", age: 34 },
  { name: "dipu5", age: 25 },
  { name: "Topu6", age: 36 },
  { name: "popu7", age: 27 },
];
const findStudent = students.find(std => std.name[0] === 'T')
const filterStudent = students.filter(std => std.name[0] === 'T')
console.log(findStudent, filterStudent);