// Demo : Operators

// 1 - Can ve Zeynep 'nın boy ve kg bilgilerini alın.
let indexCan
let indexZeynep

const kgCan=60
const kgZeynep=75

const boyCan=1.70
const boyZeynep=1.75

// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
indexCan=kgCan/(boyCan*boyCan)
indexZeynep=kgZeynep/(boyZeynep*boyZeynep)


// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
console.log(indexCan.toFixed(1),indexZeynep.toFixed(1))
console.log("Can'ın kilo indeksi Zeynep'in kilo indeksinden büyük :"+(indexCan>indexZeynep))
console.log("Zeynep'in kilo indeksi Can'ın kilo indeksinden büyük :"+(indexZeynep>indexCan))

// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let zayifZeynep=(indexZeynep>=0) && (indexZeynep<=18.4)
let normalZeynep=(indexZeynep>=18.5) && (indexZeynep<=24.9)
let kiloluZeynep=(indexZeynep>=25) && (indexZeynep<=29.9)
let sismanZeynep=(indexZeynep>=30) && (indexZeynep<=34.9)
console.log("Zeynep zayıf :"+zayifZeynep)
console.log("Zeynep normal mi :"+normalZeynep)
console.log("Zeynep kilolu :"+kiloluZeynep)
console.log("Zeynep şişman :"+sismanZeynep)