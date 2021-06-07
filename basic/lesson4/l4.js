// // let krista = {
// //   name: 'Kristi',
// //   age: 20,
// //   payment: 1000,
// //   greening: () => {
// //     console.log('Hello')
// //   }
// // }
// //
// // let karina = {
// //   name: 'Karina',
// //   age: 15,
// //   payment: 2000,
// //   greening: () => {
// //     console.log('Hello')
// //   }
// // }
// //
// // let dimas = {
// //   name: 'Dioms',
// //   age: 25,
// //   payment: 4000,
// //   greening: () => {
// //     console.log('Hello')
// //   }
// // }
//
//
// function User(name, age, gender, skill) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.skill = skill;
//
//   this.sayHello = function () {
//     console.log(`Hello. My name is ${this.name}`);
//   }
// }
//
// const karina = new User('Karisha', 15, 'female', 'React');
//
// const oleg = new User('Oleg', 25, 'male', 'Nude J Ass');
//
// console.log(karina);
//
// karina.sayHello();
// oleg.sayHello()
//
//
// class Human {
//   constructor(age, name, gender) {
//     this.age = age;
//     this.name = name;
//     this.gender = gender;
//     this.money = 0;
//   }
//
//   eat() {
//     console.log('Om nom nom')
//   }
//
//   goWork() {
//     this.money += 100;
//   }
// }
//
//
// class Developer extends Human {
//   constructor(age, name, gender, skill) {
//     super(age, name, gender);
//     this.skill = skill;
//   }
//
//   goWork() {
//     this.money += 99999999;
//   }
//
//   coding() {
//     console.log(`I am codding on ${this.skill}`)
//   }
// }
//
// class TeamLead extends Developer {
//   constructor(age, name, gender, skill, slaves = []) {
//     super(age, name, gender, skill);
//     this.slaves = slaves;
//   }
//
//   showSlaves() {
//     for (const slave of this.slaves) {
//       console.log(`Morning boss. Slave ${slave.name} listen to you!`);
//       console.log('________________________-')
//     }
//   }
// }
//
//
// const dimas = new Human(24, 'Dimasik', 'male');
// const leon = new Developer(25, 'Leon', 'male', ' JS');
//
// const lerka = new TeamLead(32, 'Lera', 'famale', ['JS', 'TS', 'React', 'Node'], [leon, dimas]);
//
// console.log(leon);
//
// leon.goWork();
// leon.coding();
//
// lerka.showSlaves();
//
//
//
// function Animal(name) {
//   this.name = name;
//
//
//   // TO NE OK !!!
//   // this.run = function () {
//   //   console.log(`${this.name} is running`);
//   // }
// }
//
// function Hamster(name, speed) {
//   this.name = name;
//   this.speed = speed;
// }
//
// Animal.prototype.run = function () {
//   console.log(`${this.name} is running`);
// }
//
// // Hamster.prototype = Animal.prototype;
// // Hamster.prototype.__proto__ = Animal.prototype;
// Hamster.prototype = Object.create(Animal.prototype);
//
// Hamster.prototype.run = function () {
//   console.log('Daba-daba-du')
// }
//
//
// let semka = new Animal('Semka');
// let grushka = new Animal('Grusha');
// let zakolka = new Hamster('Zakolka');
//
// semka.run();
// grushka.run();
// zakolka.run()



function Hamster(name) {
  this.name = name;
  this.stomach = [];
}

// Hamster.prototype.stomach = [];

Hamster.prototype.findFood = function (food) {
  this.stomach.push(food);
}

let zakolka = new Hamster('Zakolka');
let barabaskha = new Hamster('Barabashka');

zakolka.findFood('Apple');
zakolka.findFood('Peach');

console.log(zakolka.stomach);
console.log('____________');
console.log(barabaskha.stomach);
