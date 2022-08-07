'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');


const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


const message = document.createElement('div');
message.classList.add('cookie-message');  
//message.textContent = 'fkfj';
message.innerHTML = 'fdf<button class="btn btn--close--cookie">Got it! </button>';


//message.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';


//document.documentElement.style.setProperty('--color-primary', 'orangered');

const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', function(e){
  const slcoords = section1.getBoundingClientRect();
  //console.log(slcoords);

  //window.scrollTo(slcoords.left + window.scrollX, slcoords.top + scrollY);

  // window.scrollTo({
  // left: slcoords.left + window.pageXOffset,
  // top: slcoords.top + window.pageYOffset,
  // behavior: 'smooth',
  // })
  
    section1.scrollIntoView({behavior: 'smooth'})

})

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function(e){
//   alert('added');
// })


const randomInt = (min, max) => Math.floor(Math.random() * (max-min+1)+min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
//console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener
('click', function(e){
  //this.style.backgroundColor = randomColor();
})

document.querySelector('.nav__links').addEventListener
('click', function(e){
  //console.log("vjhb");
})

document.querySelector('.nav').addEventListener
('click', function(e){
 // this.style.backgroundColor = randomColor();
})


document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click', function(e){
    e.preventDefault();
    
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'});

    })
})


//doubt

// document.querySelector('.nav__links').addEventListener
// ('click', function(e){
//   e.preventDefault();

//   if(e.target.classList.contains('.nav__link')){
//       const id = e.target.getAttribute('href');
//       console.log(id);
//       document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'});
//   }
// });



//tabs.forEach(t=>t.addEventListener('click',()=>console.log('nbjbjh')));


tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  //console.log(clicked);

  if(!clicked)return;

  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.
    dataset.tab}`)
    .classList.add('operations__content--active');
})

nav.addEventListener('mouseover', function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').
    querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.img');

    siblings.forEach(el=>{
      if(el !== link)el.style.opacity=0.5;
    })

  }

})

nav.addEventListener('mouseout', function(e){

  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').
    querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.img');

    siblings.forEach(el=>{
      if(el !== link)el.style.opacity=1;
    })

  }
  
})

//Sticky navigation

const initialCoords = section1.getBoundingClientRect();
//console.log(initialCoords);
window.addEventListener('scroll', function(e){
  //console.log(window.scrollY);
if(this.window.scrollY  > initialCoords.top){
  nav.classList.add('sticky');
}else{
  nav.classList.remove('sticky');
}

})



//API

// const obsCallback = function(entries, observer){
//   entries.forEach(entry =>{
//     console.log(entry);
//   })
// }

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);


const header  = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries){
  const [entry] = entries;
  //console.log(entry);

  if(!entry.isIntersecting){
    nav.classList.add('sticky');
  }else{
    nav.classList.remove('sticky');
  }
  
}

const headerObserver = new IntersectionObserver
(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
})

headerObserver.observe(header);

//Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting){
    return;
  }
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver
(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})


//Image loading

const imgTargets = document.querySelectorAll('img[data-src]');

const loading = function(entries, observer){
  const [entry] = entries;

  if(!entry.isIntersecting){
    return;
  }

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  })

  observer.unobserve(entry.target);

};

const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img=>imgObserver.observe(img));

//Slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

 


btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();