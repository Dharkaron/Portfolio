
import { welcomeLink } from "./assets/scripts/welcomeLink.js";

// Landing Button Animation 
welcomeLink()




// Main Page Slider (Projects Overview)
function nextSlide(){
  
  const slider = document.querySelector('.slide-container');
  const sliderBtn = document.querySelector('.next-slide')
  
  sliderBtn.addEventListener('click', () =>{
    const items = document.querySelectorAll('.slide');
    console.log(items, items[0])
    slider.append(items[0])
  }, false)
}
nextSlide()



// Hide the Menu when an anchor's link is clicked
function hideMenuOnLink(){
  //// input type checkbox
  const menuInput = document.querySelector(".navigation-dropdown_input")
  //// Recup of all menu-link
  document.querySelectorAll('.navigation-menu-btn').forEach((button) => {
    button.addEventListener("click", () => {
      //// Change checked value from input
      menuInput.checked = false
    })
  })
}
hideMenuOnLink()



// Inject and remove email address for the contact section
function emailMe() {
  document.getElementById('mailto-link').addEventListener("click", (e)=>{
    //// add the email on click, to use the mailto link
    e.target.href = "mailto:pierregasse.pro@protonmail.com"
    //// Remove the address after a short interval (100ms)
    setTimeout(()=>{
      e.target.href = ""
    },100)
  })
}
emailMe()




// show and hide the goBackTop button, & the navbar
const handleSCroll = () => {
  const BackTopBtn = document.querySelector('.go-back-top')
  const navbar = document.querySelector(".navigation")
  const landingSection = document.querySelector(".landing-introduction")
  
  // Listen to the window scrolling event
  window.addEventListener("scroll", (e)=>{
    e.preventDefault()

    // Condition to hide or show the elements

    if (window.scrollY > 400) {
      BackTopBtn.classList.remove('hidden')
    } else {
      BackTopBtn.classList.add('hidden')
    }

    if(window.scrollY > 100){
      navbar.classList.add('fixed-top')
      landingSection.style.marginTop = `calc(15vh + 50px)`  
    } else {
      navbar.classList.remove('fixed-top')
      landingSection.style.marginTop = `15vh`
    }

  })
}
handleSCroll()

