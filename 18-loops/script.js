// Döngüler - Loops

// for loop 


// for (let i = 0; i < 10; i++) {
//     if (i==3) {
//         console.log('en sevdiğim sayı '+i);
//         continue;
//     }
//     if (i==6) {
//         console.log('en sevmediğim sayı '+i);
//         break;
//     }    
//     console.log(i);
// }

// for (let i = 0; i < 30; i++) {
//     if (i%3==0) {
//         console.log(i);
//     }   
// }

// while loop

// for (let i = 0; i <10; i++) {
//     console.log(i);
// }

//let i=10
// while (i<10) {
//     console.log(i);
//     i++
// }

// do while loop

// do {
//     console.log(i);
//     i-=2
// } while (i>=0);

// for of loops

var isimler=['Ali','Ahmet','Sude','Hilal']

// for (let i = 0; i < isimler.length; i++) {
//     console.log(isimler[i]);
// }

for (const isim of isimler) {
    console.log(isim);
}