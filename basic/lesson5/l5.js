// // let elementById = document.getElementById('divka');
// //
// // // let elementsByClassName = document.getElementsByClassName('boldText');
// // //
// // // let elementsByTagName = document.getElementsByTagName('p');
// // //
// // //
// // // console.log(elementsByClassName);
// // // console.log(elementsByTagName);
// // // console.log(elementById);
// // //
// // //
// // // elementById.style.background = '#0636c2'
// // // // elementById.innerText = '<hr>'
// // // elementById.innerHTML = '<hr>'
// //
// // let boldText = document.getElementsByClassName('boldText');
// //
// // // console.log(boldText);
// // //
// // // boldText.style.color = 'red';
// //
// // for (const boldElement of boldText) {
// //   boldElement.style.color = 'red'
// // }
// //
// //
// // let element = document.querySelector('p span')
// // // let element = document.querySelector('#divka p.myclass');
// //
// // let pes = document.querySelector('div.divochka div p');
// //
// // console.log(element);
// // console.log(pes);
// //
// //
// //
// //
// //
// // pes.classList.add('myOwnClass')
// // pes.classList.add('Hello')
// // pes.classList.add('resr')
// //
// //
// // pes.classList.remove('myOwnClass')
// //
// // console.log(pes.classList);
// //
// //
// //
// //
// //
// // let createdElement = document.createElement('p');
// // createdElement.innerText = 'I AM FROM JS';
// // createdElement.style.color = 'pink';
// //
// // pes.appendChild(createdElement)
// //
// //
// //
// //
// // let students = [
// //   {name: 'Dimas', age: 24},
// //   {name: 'Karina', age: 15},
// //   {name: 'Olenka', age: 20},
// //   {name: 'Oleg', age: 29},
// //   {name: 'Ellen', age: 19},
// // ];
// //
// //
// // for (const student of students) {
// //   const studentDiv = document.createElement('div');
// //
// //   studentDiv.style.backgroundColor = '#948';
// //   studentDiv.style.margin = '25px';
// //
// //   studentDiv.innerHTML = `Hello my name is ${student.name} <br>
// // I am ${student.age} years old`
// //
// //
// //   studentDiv.setAttribute('test', 'I-am-your-father');
// //   studentDiv.setAttribute('id', `${student.name}_${student.age}`);
// //
// //   studentDiv.removeAttribute('test')
// //
// //   document.body.appendChild(studentDiv)
// // }
//
//
// // console.log(document.forms.myForm2);
//
// const form = document.forms.myForm2;
//
// console.log(form.someText.value)
// console.log(form.check1)
// console.log(form.rad)
// console.log(form.okBtn)
//
//
// // for (const checkBox of form.check1) {
// //   console.log(checkBox.checked);
// // }
//
// for (const checkBox of form.rad) {
//   console.log(checkBox.checked);
// }
//
// console.log(form.someText);
//
// // form.someText.oninput = () => {
// //   console.log(form.someText.value);
// // }
// //
// //
// let divka = document.getElementById('divka');
// divka.onclick = () => {
//   divka.style.backgroundColor = 'yellow'
// }
//
// //
// // document.body.onmousemove = (ev) => {
// //   console.log(ev.target);
// // }
//
// // divka.onmouseover = (ev) => {
// //   console.log(ev.target);
// // }
// //
// // divka.onmouseleave = (ev) => {
// //   console.log(ev.target);
// // }
//
// divka.onmousemove = (ev) => {
//   const red = ev.x;
//   const green = ev.y;
//   const blue = (green + red) / 2;
//
//   ev.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
// }
//
//
//
//
//
// let peshka = document.querySelector('div.divochka div p');
//
//
// console.log(peshka);
//
//
// peshka.oncopy = () => {
//   // alert('NO WAY');
//
//   return false;
// }
//



let form = document.forms.myForm2;

const submitButton = form.okBtn;

submitButton.onclick = (ev) => {
  ev.preventDefault();
}


let user = {
  name: `Karina`,
  age: 15,
  children: undefined,
  payment: NaN,
  goToSchool: () => {
    console.log('La-la-la')
  }
}


let s = JSON.stringify(user);

console.log(s);

console.log(user);

localStorage.setItem('girl', user);
localStorage.setItem('girlJSON', s);


let girl2 = localStorage.getItem('girlJSON');

let parsedGirl = JSON.parse(girl2);

localStorage.removeItem('girl');


localStorage.clear()

console.log(parsedGirl);























