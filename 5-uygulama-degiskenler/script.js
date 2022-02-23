// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

var customerName='Ali'
var customerLastName='Kul'
var customerTc='1234567890'
var total=205.6
var gender=true
var address={
    city:'Ankara',
    district:'Çankaya',
    body:'Atatürk Mahallesi No:24/10'

}
var hobies=['Spor','Sinama','Kitap'];

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
var order1=Number('100.5')
var order2=Number('200.2')

var totalOrder=order1+order2
// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
var order3=parseFloat('100.5')
var order4=parseFloat('200.2')

var totalOrder2=order3+order4
// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

var order3=parseInt('100.5')
var order4=parseInt('200.2')

var totalOrder2=order3+order4
// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.
const yearOfBirth=2000
// yearOfBirth=2002
console.log(new Date().getFullYear()-yearOfBirth);
// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.
let dersAdi="Web Tasarım ve Programlama"
console.log(dersAdi.length);
console.clear()


