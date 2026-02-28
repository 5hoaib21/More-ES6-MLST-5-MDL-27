// // const numbers = [1, 2, 3, 4, 5];
// // // const doubled = [];
// // // for(const num of numbers){
// // //   doubled.push(num * 2);
// // // }

// // // const doubleIt = num => num * 2;
// // // const doubled = numbers.map(doubleIt)

// // const doubled = numbers.map((num) => num * 2);
// // const squared = numbers.map((num) => num * num);

// const friends = ["zaved", "naved", "khaled", "sajed"];
// const firstLetters = friends.map((frd) => frd[0]);

// const prices = products.map(pd => pd.price*2)



// const name = products.map((pd) => pd.name.toUpperCase())
// console.log(name);

// const products = [
//   { name: "laptop", price: 45000 },
//   { name: "phone", price: 15000 },
//   { name: "tablet", price: 25000 },
// ];
// const result = products.forEach(pd=> console.log(pd.price));
// console.log(result);

// // console.log(prices);
// // console.log(firstLetters);





// numbers array 
const numbers = [5, 10, 15, 20, 25];
// ১.
const triple = numbers.map(num=>num *3)

// ২.
const subW2 = numbers.map(num=> num-2);

// ৩.
numbers.forEach(num => console.log(num));
// console.log(triple, subW2, result);




// String Array 
const fruits = ["apple", "banana", "mango", "orange"];
// ১.
const upperCaseLetter = fruits.map((UCName)=> UCName.toUpperCase());
// ২.
const lnght = fruits.map(ln => ln.length );
// ৩.
const Print = fruits.forEach(fruit => console.log("I like",fruit));
// console.log(upperCaseLetter, Print, lnght);