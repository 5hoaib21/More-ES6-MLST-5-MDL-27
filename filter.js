const numbers = [1,2,3,4,5];
const evenNumbers = numbers.filter(num => num % 2 === 0);


const friends = ["zaved", "naved", "khaled","mohiuddin", "sajed","nahid","nasib"]
const nFriends = friends.filter(frd => frd[0]=== 'n')
const bigFrd = friends.filter(bgfrd => bgfrd.length > 5)



const students = [
  {name : 'Topu1', age: 21},
  {name : 'dipu2', age: 32},
  {name : 'dipu3', age: 23},
  {name : 'dipu4', age: 34},
  {name : 'dipu5', age: 25},
  {name : 'Topu6', age: 36},
  {name : 'Topu7', age: 27},
]
const olderStudents = students.filter(std=> std.age >25)
 

console.log( olderStudents);