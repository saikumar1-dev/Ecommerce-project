let loginbtn=document.getElementById('loginbtn');
let cartblock=document.getElementById('cart');
let mainblock=document.querySelector('.main');
loginbtn.addEventListener('click',()=>{
    cartblock.classList.add('hide');
    mainblock.classList.add('hide');
})