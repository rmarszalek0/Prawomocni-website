import anime from "/lib/anime.es.js";

const leftText = document.querySelector(".text-left");
const rightText = document.querySelector(".text-right");

const contentBox = document.querySelectorAll('.content-box')


/* document.querySelector('.text-right').addEventListener
  ('mouseover', function () {
  anime({
    targets: '.text-right',
      
    opacity: 1,
    easing: 'easeInOutQuad'
});
  })  */


//deletes image if screen small
const viewportWidth = window.innerWidth 
console.log(viewportWidth)

if (viewportWidth <= 1023) {
  document.querySelector('.img-section1-2').classList.add('hidden')
};


//Section2 box hover animations

document.querySelector('.cb1').addEventListener
  ('mouseover', () => {
    anime({
      targets: '.cb1',
      translateY: -25,
   
    });
  })
document.querySelector('.cb1').addEventListener
  ('mouseout', () => {
    anime({
      targets: '.cb1',
      translateY: 0,
     
    });
  })

document.querySelector('.cb2').addEventListener
  ('mouseover', () => {
    anime({
      targets: '.cb2',
      translateY: -25,

    });
  })
document.querySelector('.cb2').addEventListener
  ('mouseout', () => {
    anime({
      targets: '.cb2',
      translateY: 0,
      duration: 2000
    });
})
document.querySelector('.cb3').addEventListener
  ('mouseover', () => {
    anime({
      targets: '.cb3',
      translateY: -25,

    });
  })
document.querySelector('.cb3').addEventListener
  ('mouseout', () => {
    anime({
      targets: '.cb3',
      translateY: 0,
      duration: 2000
    });
})
document.querySelector('.cb4').addEventListener
  ('mouseover', () => {
    anime({
      targets: '.cb4',
      translateY: -25,

    });
  })
document.querySelector('.cb4').addEventListener
  ('mouseout', () => {
    anime({
      targets: '.cb4',
      translateY: 0,
      duration: 2000
    });
})


//Section2 content box click events


document.querySelector('.cb1').addEventListener
  ('click', () => {
   
       anime({
      
      targets: '.cb1',
    /*   rotateY: {
        value: 180,
        duration: 1000,
        easing: 'easeInOutSine'
      } */
         rotateY:360,
         duration: 1000,
 
   
    });
    setTimeout(() => {
       document.querySelector('.content-box-header1').classList.add('hidden')
    document.querySelector('.content-box-text1').classList.remove('hidden')

   }, 500)
  
  })

document.querySelector('.cb2').addEventListener
  ('click', () => {
    document.querySelector('.content-box-header2').classList.add('hidden')
    document.querySelector('.content-box-text2').classList.remove('hidden')

  })

document.querySelector('.cb3').addEventListener
  ('click', () => {
    document.querySelector('.content-box-header3').classList.add('hidden')
    document.querySelector('.content-box-text3').classList.remove('hidden')

  })

document.querySelector('.cb4').addEventListener
  ('click', () => {
    document.querySelector('.content-box-header4').classList.add('hidden')
    document.querySelector('.content-box-text4').classList.remove('hidden')
    
  })
