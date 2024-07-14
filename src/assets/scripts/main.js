
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


// Landing Page Welcome button (scroll/direct to first section)
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


// Adress for the contact section

function emailMe() {
  document.getElementById('mailto-link').addEventListener("click", (e)=>{
    console.log('button has been clicked');
    e.target.href = "mailto:pierregasse.pro@protonmail.com"
    setTimeout(()=>{
      e.target.removeAttribute("href")
    },100)
  })
}