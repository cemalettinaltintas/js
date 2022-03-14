// Functions

function yasHesapla(dogumYili) {
    return 2022-dogumYili
}

let hamza=yasHesapla(2004)
let huseyin=yasHesapla(2005)
let sefa=yasHesapla(2000)
//console.log(sefa);

function emekliligeKacYilKaldi(isim,dogumYili) {
    let yas=yasHesapla(dogumYili)
    let emeklilik=65-yas

    if (emeklilik>0) {
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı.`);
    }else{
        console.log(`${Math.abs(emeklilik)} yıldır zaten emeklisiniz.`);
    }
}

emekliligeKacYilKaldi('Diyana',2004)
emekliligeKacYilKaldi('Arda',1940)