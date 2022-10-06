/*==================== WİNDOW SCROLL ====================*/

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList
    .toggle('window-scroll', window.scrollY > 100)})

/*==================== FAQ ICON CHANGE ====================*/

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {faq.addEventListener('click', () => 
{faq.classList.toggle('open');
const icon = faq.querySelector('.faq__icon i');

if(icon.className === 'fi fi-rr-plus'){
icon.className = "fi fi-rr-minus";
}
else{
icon.className = "fi fi-rr-plus";
}})})

/*==================== SCROLL TOP BUTTON ====================*/

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*==================== CHANGE MENU BUTON ====================*/

const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
  menu.style.display='flex';
  closeBtn.style.display='inline-block';
  menuBtn.style.display=' none';
})

const closeNav = () => {
  menu.style.display='none';
  closeBtn.style.display='none';
  menuBtn.style.display=' inline-block';
}

closeBtn.addEventListener('click', closeNav)

/*==================== LOAD MENU BUTTON ====================*/
const loadmore = document.querySelector('#loadmore');
let currentItems = 6;

  loadmore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.courses__container article')];
    for (let i = currentItems; i < currentItems + 3; i++) {
          if (elementList[i]) {
              elementList[i].style.display = 'block';
          }
      }
      currentItems += 3;
      if (currentItems >= elementList.length) {
          event.target.style.display = 'none';
      }
  })

/*==================== END ====================*/