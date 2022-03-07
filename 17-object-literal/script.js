// Object Literals

let val


// let person={
//     firstName:'oğuz',
//     lastName:'Altıntaş',
//     age:4,
//     hobies:['spor','sinema','kitap'],
//     address:{
//         city:'Tokat',
//         country:'Türkiye'
//     },
//     getBirthOfYear:function() {
//         return 2022-this.age
//     }
// }


// val =person
// val =person.firstName
// val =person.lastName
// val =person['firstName']
// val=person.age
// val=person.hobies
// val=person.hobies.length
// val=person.address
// val=person.address.city
// val=person.address['city']
// val=person.getBirthOfYear()

let people=[
    {firstName:'zeynep',lastName:'Şarlayan'},
    {firstName:'diyana',lastName:'cabo'},
    {firstName:'zilan',lastName:'sütçü'},
    {firstName:'erdem',lastName:'demirgöz'}
]

// val=people[2]
// val=people[2].firstName

for (let i = 0; i < people.length; i++) {
    console.log(people[i].lastName);
}

// console.log(val)
// console.log(typeof val)