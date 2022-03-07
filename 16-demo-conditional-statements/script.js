var trafigeCikis=new Date('4/20/2019')
var trafiktekiMs=Date.now()-trafigeCikis.getTime()
var trafiktekiGun=Math.floor(trafiktekiMs/(1000*60*60*24))
if (trafiktekiGun<=365) {
    console.log('1. servis bakım süreniz geldi');
}
else if(trafiktekiGun>365 && trafiktekiGun<=2*365){
    console.log('2. servis bakım süreniz geldi');
}
else if(trafiktekiGun>2*365 && trafiktekiGun<=3*365){
    console.log('3. servis bakım süreniz geldi');
}
else{console.log('Bilinmeyen süre');}

// var result=prompt("Kullanıcı adınız :")

// if (result=='cancel') {
//     console.log("İptal edildi");
// }else if (result=='admin'){

//     var password=prompt("Şifrenizi giriniz :")
//     if (password=='cancel') {
//         console.log("İptal edildi");
//     }else if(password=='1234'){
//         console.log('Hoş geldin Admin');
//     }else{
//         console.log('Yanlış şifre');
//     }
// }
// else{
//     console.log('Kullanıcı adı hatalıali.');
// }
