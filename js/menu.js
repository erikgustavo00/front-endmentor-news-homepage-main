const menuIcon = document.querySelector('.mobile_menu img');
const menuMobile = document.querySelector('.mobile_menu div');
var p = document.querySelector('p');
var body = document.querySelector('body');
menuIcon.addEventListener('click', (e)=>{
  menuMobile.classList.add('show_menu');
  body.style.backgroundColor = 'rgba(0, 0, 0,0.8)';
  body.style.overflow= 'hidden';
  p.style.color = 'rgba(0, 0, 0,0.9)';

   
});

const menuClose = document.querySelector('.menu img');
menuClose.addEventListener('click', ()=>{
  if(menuMobile.classList.contains('show_menu')){
    menuMobile.classList.remove('show_menu');
    body.style.backgroundColor = '';
    body.style.overflow= '';
    p.style.color = '';
  }
});