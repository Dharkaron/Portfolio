import { smoothScroll } from "./customScroll.js";


// Main Page Landing - Welcome button (scroll/direct to first section)
export function welcomeLink(){

  const rippleOne = document.querySelector('.ripple-1')
  const rippleTwo = document.querySelector('.ripple-2')

  // Select the "welcome" buttons (desktop/mobile), and listen to the 'click' event
  document.querySelectorAll('.welcome_link').forEach(link => {

    link.addEventListener('click', (e) => {
      //e.preventDefault()

      rippleOne.classList.add('animateOnClick')
      rippleTwo.classList.add('animateOnClick-2')
      link.classList.replace('welcome_btn-light', 'welcome_btn-dark')

      // call the scroll function, with the 'id' of the targeted element, and the 'duration'
      //smoothScroll('id', duration in seconds)
      setTimeout(()=>{       
        smoothScroll('about_me', 2000)
      },500)
      
      setTimeout(()=>{
        rippleOne.classList.remove('animateOnClick')
        rippleTwo.classList.remove('animateOnClick-2')
        link.classList.replace('welcome_btn-dark', 'welcome_btn-light')
      },2000)
    })
  }) 
}



export function welcomeTest(){
  const landingPic = document.querySelector('.landing-introduction-picture')
  const landingTitle = document.querySelector('.landing-introduction-title')
  const landingSub = document.querySelector('.landing-introduction-subtitle')

  document.querySelectorAll('.welcome_link').forEach(link => {

    link.addEventListener('click', (e) => {
      landingPic.classList.add('animationTest')
      landingTitle.classList.add('animationTest')
      landingSub.classList.add('animationTest')
      setTimeout(() => {
        link.style.setProperty('transform', 'translateY(-200px)')
        link.style.setProperty('transition', 'transform 0.8s')
        
      }, 600);
  
    })
  })
}

