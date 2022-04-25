// Operatörler
let deger;
const a=10;
const b=5;
const c=5;
let   d=3;

// 1- Aritmetik Operatörler
deger=a+b
deger=a-b
deger=a*b
deger=a/b
deger=a%b
deger=d++ //deger=3 d=4
deger=++d //deger=5 d=5
deger=--d //deger=4 d=4
deger=d-- //deger=4 d=3

// 2- Atama Operatörleri
deger=a
deger+=a //deger=deger+a
deger-=a //deger=deger-a
deger*=a //deger=deger-a
deger/=a //deger=deger-a
deger%=a //deger=deger-a


// 3- Karşılaştırma Operatörleri
deger=(a==b)
deger=b==c
deger=5=='5'
deger=5==='5'//deger ve tip kontrolü
deger=a!=b
deger=a>b
deger=a<b
deger=a>=b
deger=a<=b
deger=b>=c
deger=5<=5


// 4- Mantıksal Operatörler
   // && (And-Ve)
   // true  && true  => true
   // true  && false => false
   // false && false => false
   deger=a>b && a<=b && a==b

   // || (Or-Veya)
   // true  || true  => true
   // true  || false => true
   // false || false => false
   deger=a<b || a<=b || a==b

   // ! (Not)

   // !true  => false
   // !false => true
   deger=!(a>b)
   deger=!(b<c)
   
   console.log(deger);
   console.log(typeof deger);
