// Demo : Strings

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business.  ";

var url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye";

// cümle kaç karakterlidir ?
console.log('Karakter sayısı :'+sentence.length);

// kaç kelimeden oluşuyor ?
console.log('Kelime sayısı :'+sentence.trim().split(' ').length);

// Tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

// Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim());
// '-' karakterini silin.
console.log(sentence.replace('-',''));

// url'nin içinden str kısmını çıkarınız.
var str = 'http://';
//console.log(url.replace(str,''));
//console.log(url.substring(str.length));
console.log(url.slice(str.length));

// url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith('https'));

// url, '.com' ifadesini içeriyor mu?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

// url string ifadesini geçerli bir url olarak düzenleyiniz.
console.log(url.toLowerCase()
            .replace(/ /g,'-')
            .replace(/ı/g,'i')
            .replace(/ü/g,'u')
            .replace(/ö/g,'o')
            .replace(/ğ/g,'g')
            .replace(/ş/g,'s')
            .replace(/ç/g,'c')
);
            
