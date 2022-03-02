// Template literals

const ad='Salih'
const soyad='Ceylan'
const dt=2004
const sehir='Tokat'
let deger

deger='My name is '+ad+' '+soyad+'. I\'m '+(2022-dt)+' years old'+' and I live in '+sehir;

deger=`My name is ${ad} ${soyad}. I'm ${(2022-dt)>=18 ? 'over 18':'under 18'} years old and I live in ${sehir}` 
console.log(deger);

