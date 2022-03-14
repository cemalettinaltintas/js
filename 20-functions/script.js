// 1- Function Declarations

// function sum(a,b) {
//     var c=a+b
//     return c
// }
// console.log(sum(10,20));

// 2- Function Expressions

// const sum = function (a, b) {
//   if (typeof a==='undefined') {a=0}
//   if (typeof b==='undefined') {b=0}
//   var c = a + b;
//   return c;
// };
// console.log(sum(20,30));

// 3- Anonymous Function
//   const sayHello=function() {
//     console.log('Hello');
//   }
// sayHello()

// 4- Arrow Function

// function kareAl(n) {
//   return n*n
// }
// console.log(kareAl(4));

 //const karesi= n => {return n*n}
//  const karesi= n => n*n
//  console.log(karesi(4));
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

// let buyukHarfeCevir= dizi =>{
//   const yeniDizi=[]
//   for (const item of dizi) {
//     yeniDizi.push(item.toUpperCase())
//   }
//   return yeniDizi
// }

// function buyukHarfeCevir(dizi){
//   const yeniDizi=[]
//   for (const item of dizi) {
//     yeniDizi.push(item.toUpperCase())
//   }
//   return yeniDizi
// }
//console.log(buyukHarfeCevir(countries));

// const tamAdYaz=(ad,soyad)=>{
//   return `${ad} ${soyad}`
// }
// console.log(tamAdYaz('Erdem','Demirgöz'))

const agirlikHesapla=(m,g=10)=>m*g+' N'


console.log(agirlikHesapla(20));
console.log(agirlikHesapla(20,2));

// ES6 Default Parameters
// const sum = function (a=0, b=0) {
//   var c = a + b;
//   return c;
// };
// console.log(sum(10,20,30));
// function sumAll() {
//     var total=0
//     for (let i = 0; i < arguments.length; i++) {
//         total+=arguments[i]
//     }
//     return total
// }
// console.log(sumAll(10,20,30,5,5));