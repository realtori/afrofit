


// sidebar
let removesidebar = document.querySelector('.fa-xmark')
let sidebar = document.querySelector('.sidebar')
let hamburg = document.querySelector('.hamburg')
let dropIcon = document.querySelector('.fa-caret-down')
removesidebar.addEventListener('click',()=>{
    sidebar.classList.toggle('hide')
})
hamburg.addEventListener('click',()=>{
    sidebar.classList.toggle('hide')
})

let drop = document.querySelector('.drop')
let dropclick = document.querySelector('.sidebar .textt')
drop.addEventListener('click',()=>{
    dropclick.classList.toggle('reduce')
    dropIcon.classList.toggle('rotee')
})



// pop- up 
let pop = document.querySelector('.pop-up')

pop.addEventListener('click',()=>{
    pop.classList.add('pop-remove')
})

let width = document.querySelector('.know')
console.log(width.offsetWidth);
