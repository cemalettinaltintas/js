// 1- Declare a function fullName and it print out your full name.

// function fullName(name) {
//   return 'Hi, '+name
// }
// console.log(fullName('Ogün Can'));

// 2-Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function fullName(firstName, lastName) {
//   return `${firstName} - ${lastName}`;
// }

// console.log(fullName("Alican", "Öztürk"));

// 3-Declare a function addNumbers and it takes two two parameters and it returns sum.

// function addNumbers(a,b){
//   var c=a + b
//   return c
// }
// console.log(addNumbers(30,40))

// 4- An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// function areOfRectangle(l,w){
//   let area = l*w
//   return area
// }
// console.log(areOfRectangle(4,8));

// 5- A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// function perimeterOfRectangle(a, b) {
//   let cevre = 2 * (a + b);
//   return cevre;
// }
// console.log(perimeterOfRectangle(5,6));

// 6- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// function volumeOfRectPrism(a,b,c) {
//   let volume = a*b*c
//   return volume
// }
// console.log(volumeOfRectPrism(10,5,20))

// 7- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// function areaOfCircle(r) {
//   let area = Math.PI*r*r
//   return area
// }
// console.log(areaOfCircle(5));
// 8- Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// function checkSeason(ay) {
//   switch (ay) {
//     case 11:
//     case 0:
//     case 1:
//       return "Winter"
//       break;
//     case 2:
//     case 3:
//     case 4:
//       return "Spring"
//       break;
//     case 5:
//     case 6:
//     case 7:
//       return "Summer"
//       break;
//     case 8:
//     case 8:
//     case 10:
//       return "Autumn"
//       break;
//   }
// }
// console.log(checkSeason(new Date().getMonth()));

// 9- Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// function randomHexaNumberGenerator() {
//   let hexadecimalSayi = "#";
//   let sayi;
//   for (let i = 0; i < 6; i++) {
//     sayi = Math.floor(Math.random() * 16);
//     if (sayi == 10) {
//       hexadecimalSayi += "a";
//     } else if (sayi == 11) {
//       hexadecimalSayi += "b";
//     } else if (sayi == 12) {
//       hexadecimalSayi += "c";
//     } else if (sayi == 13) {
//       hexadecimalSayi += "d";
//     } else if (sayi == 14) {
//       hexadecimalSayi += "e";
//     } else if (sayi == 15) {
//       hexadecimalSayi += "f";
//     } else {
//       hexadecimalSayi += sayi.toString();
//     }
//   }
//   return hexadecimalSayi;
// }
// console.log(randomHexaNumberGenerator());

// function randomHexaNumberGenerator2() {
//   let sayi
//   sayi=Math.floor(Math.random() * 16777215).toString(16)
//   return '#'+sayi
// }

// console.log(randomHexaNumberGenerator2());


// function topla(a=0,b=0) {
//   return a+b 
// }
const topla=(a=0,b=0) => a+b 

// console.log(topla(10,5));
console.log(topla(10));