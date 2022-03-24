// Scopes

// Global Scopes

var name='Oğuz'
var age=4

function logName() {
    var name='Sude'
    var age=5
    var lastName='Altıntaş'
    console.log('Function scope :',name,age);
}

// logName()
// console.log(name);
// if (true) {
//     var age=10
//     console.log('Block scope :',name,age);
// }

// Local Scopes
//Fonksiyonlar kendi scopelarını oluşturur.
//**Bloklar yeni scope oluşturmaz */
//ES6 ile gelen let ve const block scope oluşturur.
if (true) {
    var model='opel'
    let year=2016
    const color='white'
    console.log('Block scope :',model,year,color);
}
//console.log(model);
//console.log(year);
//console.log(lastName);
//console.log(color);
var i=0
for (let i = 0; i < 10; i++) {
    console.log('i :'+i);
}
console.log(i);