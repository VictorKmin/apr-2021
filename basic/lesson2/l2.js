// const isRoadClear = confirm('Is road clear');
// // TRUE : FALSE
// // const color = prompt('Enter color');
// //
// // switch (color) {
// //   case 'green':
// //     isRoadClear ? console.log('GO G') : console.log('NE GO G')
// //     break;
// //   case 'yellow':
// //     isRoadClear ? console.log('GO Y') : console.log('NE GO Y')
// //     break;
// //   case 'red':
// //     isRoadClear ? console.log('GO R') : console.log('NE GO R')
// //     break;
// //   default:
// //     alert('Wrong color');
// // }
//
// console.log('____________________');
// console.log(isRoadClear);
// console.log('____________________');
//
//
// if (isRoadClear === true) {
//   console.log('TRUE 1')
// }
//
// if (isRoadClear) {
//   console.log('TRUE 2')
// }
//
// if (!isRoadClear) {
//   console.log('FALSE 1')
// }
//
// if (isRoadClear === false) {
//   console.log('FALSE 2')
// }
//
//
//
//
//
//
// const color = prompt('Enter color');
//
// if (!color) {
//   console.log('EMPTY')
// }







//______________________________________________


const names = ['Ellen', 'Rostik', 'Lenovo', 'Marta', 'Maks', 'DIMAS'];

// //
// // // console.log(names);
// // //
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i])
// }
// // //
// for (const name of names) {
//   console.log(name);
// }
//
// for (const name in names) {
//   console.log(name);
// }
//
// let i = 0;
//
// while (i < names.length) {
//   console.log(names[i]);
//
//   i++;
// }

//
// // let obj = {
// //   name: 'Viktor',
// //   age: 25,
// //   girl: false,
// // }
// //
// // obj.car = 'Lacetti';
// // obj.phone = 'Samsung';
// //
// // obj.age = 33;
// //
// // delete obj.name;
// //
// // console.log(obj);
//
// // for (const key in obj) {
// //   console.log(key);
// //
// //   console.log(obj[key]);
// // }
//
// // let a = 0;
// // let x = 0;
// //
// // let b = a++;
// // let z = ++x;
// //
// // console.log(a, b);
// // console.log(x, z);
// //
// //
// // let enteredKey = prompt('Enter key');
// //
// // console.log(obj[enteredKey]);
// //
// //
// // let key = prompt('Enter key');
// //
// // if (obj[key] === undefined) {
// //   let value = prompt('Enter value');
// //
// //   obj[key] = value;
// // }
// //
// // console.log(obj);
// //
//
// // ___________________________________
// // Reference vs Primitives
//
// let name = 'Doma';
//
// let nameC = name;
//
// nameC = 'Ivan';
//
// console.log(name);
// console.log(nameC);
//
//
// const obj = {
//   name: 'Viktor',
//   age: 25,
//   girl: false,
//   job: {
//     title: 'XXX'
//   }
// }
// //
// // // const obj2 = {
// // //   name: 'Viktor',
// // //   age: 25,
// // //   girl: false,
// // // }
// // //
// // // console.log(obj === obj2)
// //
// // const objC = obj; // !!!!
// //
// // objC.age = 99;
// //
// // console.log(obj);
// // console.log(objC);
//
//
// let keys = Object.keys(obj);
// let values = Object.values(obj);
// let entries = Object.entries(obj);
//
// console.log(keys);
// console.log('_)))');
// console.log(values);
// console.log('_)))');
// console.log(entries);
//
//
//
//
// names[99999] = 'Ihor';
// console.log(names[900]);
//
//
// names[names.length] = 'Ihor' // NE OK
// names[names.length] = 'Anna' // NE OK
//
// names.push('Ihor');
// names.unshift('Nadia');
//
// const deletedItem = names.pop();
// let shift = names.shift();
//
// console.log(names);
// console.log(deletedItem);
// console.log(shift);

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'Lenovo') {
    // continue;
    break;
  }

  document.write(`<div style="background-color: green"> ${names[i]}  </div>`)
}


let x = 2;

while (x < 10) {
  if (x === 5) {
    continue;
  }

  console.log(x);
  x++
}
