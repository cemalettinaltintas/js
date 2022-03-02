// Arrays
let isimler=['salih','erdem','hamza','zilan','diyana']
let yillar=[2017,2018,2019,2020,2022]
let mix=['hamza','çalkan',2004,null,undefined,['sinema','spor','kitap']]
// get array item

// console.log(isimler[isimler.length-1]);
// console.log(isimler[0]);
// console.log(mix[2]);

// set array item
// isimler[isimler.length]='rümeysa'
// console.log(isimler[5]);

// add item
yillar[3]=2000
yillar.push(2021)
yillar.unshift(2016)


// // remove item
yillar.pop()
yillar.shift()

 //indexof
let index=isimler.indexOf('hamza')
//console.log('index :'+index);
// reverse
isimler.reverse()

// sort
yillar.sort()
isimler.sort()

//concat
let val=yillar.concat(isimler)
//console.log(val);
// splice

isimler.splice(2,2)
console.log(isimler);
// find


// filter


