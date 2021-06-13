// // let numbers = [10, 60, 90, 100, 17, 2200, 99];
// // let names = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew', 'Stepan'];
// //
// //
// // // let numbers1 = numbers.sort((a, b) => {
// // //   console.log(a, 'a');
// // //   console.log(b, 'b');
// // //   return b - a;
// // // });
// // //
// // // let names1 = names.sort((a, b) => {
// // //   console.log(a);
// // //   console.log(b);
// // //   if (a > b) {
// // //     return -1
// // //   }
// // //
// // //   return 1;
// // // });
// // //
// // // let names1 = names.sort((a, b) => {
// // //   return a.length - b.length;
// // // });
// // //
// // // console.log(numbers1);
// // // console.log(names1);
// //
// // // numbers.filter((value, index, array) => {
// // //   console.log(value);
// // //   console.log(index);
// // //   console.log(array);
// // //   console.log('______________');
// // // })
// // //
// // //
// // // let numbers1 = numbers.filter(value => {
// // //   return value < 10;
// // // });
// // //
// // //
// // // console.log(numbers1);
// //
// // // let numbers1 = numbers.reverse();
// // // console.log(numbers1);
// //
// // //
// // // let some = numbers.some(value => {
// // //   return value > 10
// // // });
// // //
// // // let every = numbers.every(value => {
// // //   return value > 10
// // // });
// // //
// // // console.log(some);
// // // console.log(every);
// //
// // // let s = names.find((name) => {
// // //   return name.startsWith('S')
// // // });
// // //
// // // let index = names.findIndex((name) => {
// // //   return name.startsWith('S')
// // // });
// // //
// // // console.log(s);
// // // console.log(index);
// //
// // // names.forEach(value => {
// // //   if (value.startsWith('S')) {
// // //     return; //continue
// // //   }
// // //
// // //   console.log(value);
// // // })
// //
// // // let map = names.map((value, index) => {
// // //   console.log(value);
// // //   console.log(index);
// // //
// // //   return {
// // //     id: index + 1,
// // //     name: value
// // //   }
// // // });
// // //
// // // console.log(map);
// // //
// // //
// // // let users = [
// // //   { name: 'Viktor', car: true },
// // //   { name: 'Fima', car: false },
// // //   { name: 'Olga', car: true },
// // // ]
// // //
// // // users.map((value, index) => {
// // //   value.id = index + 1;
// // //
// // //   return value;
// // // });
// // //
// // // console.log(users);
// // //
// // //
// // // // {id: 1, name: 'Dima'}
// // // // {id: 2, name: 'Sergio'}
// //
// // // // DEEP COPY
// // // let user = { name: 'Viktor', car: true }
// // //
// // //
// // // let copy = JSON.parse(JSON.stringify(user));
// // //
// // // copy.age = 77;
// // //
// // // console.log(user);
// // // console.log(copy);
// //
// //
// // // let number = numbers.reduce((acc, value) => {
// // //   console.log(acc);
// // //   console.log(value);
// // //   console.log('_________________________');
// // //
// // //   return acc + value
// // // });
// // //
// // //
// // // console.log(number);
// // //
// //
// //
// // let users = [
// //   { name: 'Dima', age: 10 },
// //   { name: 'Nastya', age: 22 },
// //   { name: 'Karina', age: 15 },
// //   { name: 'Volodya', age: 19 },
// //   { name: 'Yarko', age: 39 },
// //   { name: 'Yevhen', age: 14 },
// //   { name: 'Taras', age: 4 }
// // ];
// //
// // //
// // // let reduce = users.reduce((acc, value) => {
// // //   console.log(acc);
// // //   console.log(value);
// // //   console.log('_________________');
// // //   console.log(acc);
// // //   console.log(value.age);
// // //   console.log('**************************');
// // //
// // //   return acc + value.age
// // // }, 0);
// // //
// // // console.log(reduce);
// //
// // // let filter = users.filter(user => {
// // //   return user.age > 18
// // // });
// // //
// // // let map = filter.map(oldUser => {
// // //   oldUser.car = true
// // //   return oldUser
// // // });
// // //
// // // console.log(map);
// //
// // let usersWithCars = users.reduce((acc = [], user) => {
// //
// //   console.log(acc);
// //   console.log(user);
// //   console.log('_____________');
// //   // if (user.age > 18) {
// //   //   user.car = true;
// //   //
// //   //   acc.push(user);
// //   // }
// //   //
// //   // return acc;
// // }, []);
// //
// //
// // console.log(usersWithCars);
//
//
// function getTaxi(address, cb) {
//   console.log(`Замоленнян на ${address} прийнято`);
//
//   setTimeout(() => {
//     cb()
//   }, 2000)
// }
//
// getTaxi('BB', () => {
//   console.log('Bip bip');
// })
//
// getTaxi('Наукова 12', () => {
//   console.log('Наберіть на номер 3131312');
// })
//
// getTaxi('Героїв Упа 73', () => {
//   console.log('Напишіть СМС');
// })
//
//


let p1 = function () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('p1')
    }, 3000)
  })
}

let p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2')
    }, 1000)
  })
}

let p3 = function () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('p3')
    }, 5000)
  })
}

// Promise.all([p1(), p2().catch(reason => {}), p3()])
//   .then(value => {
//     console.log(value);
//   })
//   .catch(reason => {
//     console.error('___________')
//     console.error(reason)
//     console.error('___________')
//   });
//
// Promise.allSettled([p1(), p2(), p3()])
//   .then(value => {
//     console.log(value);
//   })
//
//
// Promise.race([p1(), p2(), p3()])
//   .then(value => {
//     console.log(value);
//   })


