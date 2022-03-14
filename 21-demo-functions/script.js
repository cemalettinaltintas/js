// Demo : Functions

var hesapA={
  ad:'Oğuz Altıntaş',
  hesapNo:'123456',
  bakiye:2000,
  ekHesap:1000
}
var hesapB={
  ad:'Emre Altıntaş',
  hesapNo:'12345678',
  bakiye:3000,
  ekHesap:2000
}

function paraCek(hesap,miktar) {
  console.log(`Merhaba ${hesap.ad}`);
  if (hesap.bakiye>=miktar) {
    hesap.bakiye=hesap.bakiye-miktar
    console.log('Paranızı alabilirsiniz.');
  }else{
    var toplam=hesap.bakiye+hesap.ekHesap
    if (toplam>=miktar) {
      if (confirm('Ek hesabınız kullanmak ister misiniz?')) {
        console.log('Paranızı alabilirsiniz.')
        var kalan=miktar-hesap.bakiye
        hesap.bakiye=0
        hesap.ekHesap=hesap.ekHesap-kalan
        console.log(`Ek hesap : ${hesap.ekHesap}`)
      }
      else{
        console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmaktadır.`);
      }
    }else{
      console.log('Üzgünüz bakiye yetersiz.');
    }

  }
}

// paraCek(hesapA,2500)
// paraCek(hesapA,300)
paraCek(hesapB,3000)