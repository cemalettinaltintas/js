// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
var dt=new Date()

// console.log(dt)
// console.log(dt.getDate())
// console.log(dt.getDay())
// console.log(dt.getMonth())
// console.log(dt.getFullYear())


// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
// var dtA=new Date('8/18/2000 12:30:40')
// console.log(dtA)
// console.log(dtA.getDate())
// console.log(dtA.getDay())
// console.log(dtA.getMonth()+1)
// console.log(dtA.getFullYear())
// console.log(dtA.getHours())
// console.log(dtA.getMinutes())
// console.log(dtA.getSeconds())

// 1/1/1990 tarihinden bir gün öncesini gösteriniz. 
var dtB=new Date('1/1/1990')

var dayOfMonth=dtB.getDate()
dtB.setDate(dayOfMonth-1)
//console.log(dtB.getDate())
// iki tarih arasındaki geçen zamanı bulunuz.
var bas=new Date('2/24/2022')
var bitis=new Date('2/26/2022 13:30:00')

let fark=bitis-bas

let gunSayisi=Math.floor(fark/1000/60/60/24)
//console.log(gunSayisi)
// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2022 yılında ne zaman kutlanacaktır ?
var annelerGunu=new Date(2021,4,1)

// annelerGunu.setHours(0,0,0)
// annelerGunu.setFullYear(2022)
// annelerGunu.setDate(1)
// annelerGunu.setMonth(4)

// while(annelerGunu.getDay() !=0){
//     annelerGunu.setDate(annelerGunu.getDate()+1)
// }

// annelerGunu.setDate(annelerGunu.getDate()+7)
// console.log(annelerGunu)
// let i=0
// while(i<5){
//     console.log(i)
//     i++
// }

// ** Yaş hesaplama nasıl yapılır ?

var dogumTarihi=new Date('4/16/2003')

var yasFarkMs=Date.now()- dogumTarihi.getTime()

var yasTarih=new Date(yasFarkMs)

console.log(yasTarih.getFullYear()-1970)