// let sonuc=1
// for (let i = 0; i < 10; i++) {
//    if (i%2==1) {
//        sonuc=sonuc*i
//    }
// }
// console.log(sonuc);

// let sayi=Number(prompt("Sayı giriniz :"))
// let faktoriyel=1

// for (let i = 2; i <=sayi; i++) {
//     faktoriyel*=i//faktoriyel=faktoriyel*i
// }
// console.log(faktoriyel);


// Rasgele üretilecek olan 1-10 arasındaki 10'dan 
// 5'ten büyük olanlarının karesini alacak js kodlarını yazınız.
// let i=0
// let uretilen
// while (i<10) {
//     uretilen=Math.ceil(Math.random()*10)
//     if (uretilen>5) {
//         console.log("Üretilen :"+uretilen+" Karesi :"+uretilen*uretilen);
//     }
//     i++
    
// }

//
// iç içe for
// let val=""
// for (let i = 0; i < 6; i++) {//satır
//     for (let j = 0; j <6; j++) {//sütun
//         val+="* "
//     }
//     val+="\n"
// }
// console.log(val);

let carpim=1
for (let i = 1; i < 5; i++) {//satır
    for (let j = 1; j <5; j++) {//sütun
        carpim=i*j
        console.log(`${i} x ${j} = ${carpim}`);
    }
    console.log('----------------');
}