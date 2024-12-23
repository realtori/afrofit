let image1 = '../images/1a.jpg'
let image2 = '../images/1b.jpg'
let image3 = '../images/1c.jpg'
let image4 = '../images/1d.jpg'
console.log("hi");

let productImgCon = document.querySelector('.product-con .img')
let productImg = document.querySelector('.big')
let litteImg = document.querySelectorAll('.little-img img')
litteImg.forEach(img=>{
    img.addEventListener('click',()=>{
        productImgCon.classList.add('trans');
        setTimeout(()=>{

            productImg.src = img.src
            productImgCon.classList.remove('trans');

        },500)
        
    })
    
})

