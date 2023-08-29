// уведомление о неработающих ссылках
document.querySelectorAll('.nwork').forEach(function(i){
  i.addEventListener('click',function(){
    alert('эта ссылка пока не работает(')
  })
})





// работа появления формы входа
let auth = document.querySelector('.form');

let authBtn = document.querySelector('.fff');
let start = document.querySelector('.start');


const cross = document.querySelector('.cross')


start.addEventListener('click', function(){
  auth.style.display = 'flex';
  body.style.position = 'fixed';
  field.innerHTML = '<p class="sub">логин</p><input type="text" class="login" ><p class="sub">пароль</p><input type="password" class="password"><p class="sub">подтверждение пароля</p><input type="password" class="password"> '
  login.style.color = '#848484';
  signUp.style.color = 'black'
  formBTN.value = 'зарегистрироваться'
})

authBtn.addEventListener('click', function(){
    auth.style.display = 'flex';
    body.style.position = 'fixed';
    field.innerHTML = '<p class="sub">логин</p><input type="text" class="login" ><p class="sub">пароль</p><input type="password" class="password">'
    signUp.style.color = '#848484';
    login.style.color = 'black'
    formBTN.value = 'войти'
})

cross.addEventListener('click', function(){
    auth.style.display = 'none';
    body.style.position = 'relative';
})

// смена режима формы
const login = document.querySelector('.login')
const signUp = document.querySelector('.sign-up')

let field = document.querySelector('.fields')

let formBTN = document.querySelector('.form-btn')

let body = document.querySelector('.page')
signUp.addEventListener('click',function(){
    field.innerHTML = '<p class="sub">логин</p><input type="text" class="login" ><p class="sub">пароль</p><input type="password" class="password"><p class="sub">подтверждение пароля</p><input type="password" class="password"> '
    login.style.color = '#848484';
    signUp.style.color = 'black'
    formBTN.value = 'зарегистрироваться'

}) 

login.addEventListener('click',function(){
    field.innerHTML = '<p class="sub">логин</p><input type="text" class="login" ><p class="sub">пароль</p><input type="password" class="password">'
    signUp.style.color = '#848484';
    login.style.color = 'black'
    formBTN.value = 'войти'
}) 

// анимация чисел в том блоке



let leftSec = document.querySelector("#counter");
let leftMiddle = document.querySelector("#float");
let thirdBlock = document.querySelector("#dollars");

function outNum(num,time,e,step) {
  
  let n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

function out(number,ttt,e,step) {
  
    let x = 0;
    let t = Math.round(ttt / (number / step));
    let interval = setInterval(() => {
      x = x + step;
      if (Math.floor(x * 10) / 10 == number) {
        clearInterval(interval);
      }
      e.innerHTML = Math.floor(x * 10) / 10;
    }, t);
  }

function again(chislo,vremya,e,step) {
  
    let x = 0;
    let t = Math.round(vremya / (chislo / step));
    let interval = setInterval(() => {
      x = x + step;
      if (Math.floor(x * 10) / 10 == chislo) {
        clearInterval(interval);
      }
      e.innerHTML = Math.floor(x * 10) / 10;
    }, t);
  }



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        outNum(280,1000,leftSec,1);
        out(10.7,1200,leftMiddle,0.1);
        again(14560,1200,thirdBlock,80)
      }
      
      
    });
  });
observer.observe(document.querySelector('.color-container'));

// попытки анимации остальной части того блока
let square = document.querySelectorAll('.square');
let ca = document.querySelectorAll('.circle')
let rotate = document.querySelectorAll('.rotatable');
let qq = document.querySelectorAll('.qq');
let ww = document.querySelectorAll('.ww');
let ee = document.querySelectorAll('.ee');
let rr = document.querySelectorAll('.rr');
let tt = document.querySelectorAll('.tt');



let circles = ['.elA','.elB']

let circScale = 9;
let squaScale = 10;
const observ = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        for(let i=0; i < ca.length;i++){
            ca[i].style.transform = 'scale(1)'
        }
        anime({
            targets:ca,
            duration:3000,
            scale:circScale,
            delay: function(el, i, l) {
                return i * 150;
            }, 
        })
        for(let j=0; j < square.length;j++){
            square[j].style.transform = 'scaleY(1)'
        }
        anime({
          targets:square,
          duration:2000,
          scaleY:squaScale,
          delay: function(el, j, l) {
            return j * 150 + 200;
          }, 
         
        })   
        
        for(let k = 0; k < rotate.length;k++){
          rotate[k].style.transform = 'rotate(45deg)'
        }
        anime({
          targets:rr,
          duration:500,
          rotate: 185,
          
          easing: 'linear'
        })
        anime({
          targets:ee,
          duration:500,
          rotate: 135,
          
          easing: 'linear'
        })
        anime({
          targets:qq,
          duration:500,
          rotate: 270,
          delay: 200,

          easing: 'linear'
        })
        anime({
          targets:ww,
          duration:500,
          rotate: 315,
          delay: 400,

          easing: 'linear'
        })
        
      }            
    });
  });
observ.observe(document.querySelector('.down-section'));



// плавный скролл
let links = document.querySelectorAll('.scroll')
let targerID;
links.forEach(function (element){
    element.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = element.getAttribute('href')
        document.querySelector(targetID).scrollIntoView({
            behavior:'smooth',
            block: 'start'
        })
    })})

// бургер-меню
let menuIcon = document.querySelector('.menu_icon')
let burgerMenu = document.querySelector('.burger-menu')

let sticks = document.querySelectorAll('.stick')


let bool = true

function moveLeft(){
  anime({
    targets:burgerMenu,
    duration:1000,
    translateX:['100%', '0'],
    easing:'easeInOutQuad'
  })
  
  anime({
    targets:sticks[1],
    translateY:20,
    rotate:45,
    duration:1000,
    
    
  })
  anime({
    targets:sticks[3],
    rotate:-45,
    duration:1000
    
  })
  sticks[2].style.display = 'none'
  body.style.position = 'fixed';
  bool = false
}

function moveRight(){
  anime({
    targets:burgerMenu,
    duration:1000,
    translateX:['0', '100%'],
    easing:'easeInOutQuad'
  })

  anime({
    targets:sticks[1],
    translateY:0,
    rotate:0,
    duration:1000,
    
    
  })

  anime({
    targets:sticks[3],
    rotate:0,
    duration:1000
    
  })

  sticks[2].style.display = 'block'



  body.style.position = 'relative';
  bool = true

}

menuIcon.addEventListener('click',function(){
  if(bool){
    moveLeft()
  }
  else{
    moveRight()
  }
})

// адаптивный scale()

document.addEventListener("DOMContentLoaded", function(event) { 
  var widthwind = document.querySelector('body').offsetWidth;
  if(widthwind >1200){
    circScale = 9;
    squaScale = 10;
  }
  else if(widthwind <= 581){
    circScale = 3;
    squaScale = 3;
  }
  else if(widthwind <= 781){
    circScale = 4;
    squaScale = 4.5;
  }
  else if(widthwind <=992){
    circScale = 6;
    squaScale = 6;
  }
  else if(widthwind <=1200){
    circScale = 8;
    squaScale = 8;
  }
});

