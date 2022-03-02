// Strings

const firstName='Arda'
const lastName='Canel'
let hobies='sinema spor kitap tiyatro'
const age=16

let val

// string concatenation

//val=firstName+' '+lastName
val='Arda'
val+=' Canel'

val='Benim adım '+firstName+' '+lastName+ ' ve yaşım '+age+' İstanbul\'da yaşıyorum'

// string concat
val=firstName.concat(' ',lastName)

// string uppercase lowercase
val=val.toUpperCase()
val=val.toLowerCase()

// string replace

val='    '+val.replace('arda','ahmet')+'    '

// trim
val=val.trim()

// substring

//val=val.substring(6,9)

// slice
//val=val.slice(6)
//val=val.indexOf('a')

//val=val[1]
//val=val.length

val=hobies.split(' ')

console.log(val)
console.log(typeof val);