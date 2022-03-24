// Selecting Elements

// Single Elemens

// document.getElementById()
let val
val=document.getElementById('header')
// val=document.getElementById('header').id
// val=document.getElementById('header').className

val.style.fontSize='45px'
val.style.color='red'
//val.style.fontWeight='bold'
// val.style.display='none'

document.getElementById('header').innerHTML='My Todo App'
document.getElementById('header').innerHTML='<b>My Todo App</b>'



val=document.querySelector('#header')
val=document.querySelector('.card-header')
val=document.querySelector('div')

document.querySelector('li').style.color='red'
document.querySelector('li:last-child').style.color='red'
document.querySelector('li:nth-child(2)').style.color='red'
document.querySelector('li').className='list-group-item list-group-item-primary'

//console.log(val);