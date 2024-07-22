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