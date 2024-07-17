
nextSlide()
welcomeLink()
hideMenuOnLink()
emailMe()

// Main Page Slider
function nextSlide(){
  
  const slider = document.querySelector('.slide-container');
  const sliderBtn = document.querySelector('.next-slide')
  
  sliderBtn.addEventListener('click', () =>{
    const items = document.querySelectorAll('.slide');
    slider.append(items[0])
  }, false)

}


// Main Page Landing - Welcome button (scroll/direct to first section)
function welcomeLink(){

  document.querySelectorAll('.welcome_link').forEach(link => {

    link.addEventListener('click', (e) => {
      e.preventDefault()

      document.getElementById('about_me').scrollIntoView({
        behavior: "smooth",
      }); 
    })
  }) 
}



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


/* 
Ideas for the welcome button:
onclic, change the background to ":hover" properties, 
make an inset ripple effect, 
move to first section, 
reset background to default

=> See how to slow down scroll speed on anchor link
*/


// show adn hide the goBackTop button (work in progress)
function revealButton() {
  const BackTopBtn = document.querySelector('.go-back-top')
  const navbar = document.querySelector(".navigation")
  
  BackTopBtn.addEventListener("click", (e)=>{
    //e.preventDefault()
    console.log(document.scrollY)
  })

 /*  if (window.scrollY > 600) {
    BackTopBtn.classList.remove('hidden')
  } else if(window.scrollY < 590){
    BackTopBtn.classList.add('hidden')
  } */
  if (window.scrollY > 600) {
    navbar.style.display = "none"
  } else if(window.scrollY < 590){
    navbar.style.display ="flex"
  }
}
