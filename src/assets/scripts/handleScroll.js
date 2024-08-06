export function handleSCroll() {
  const BackTopBtn = document.querySelector('.go-back-top')
  const navbar = document.querySelector(".navbar")
  const landingSection = document.querySelector(".landing-introduction")
  
  // Listen to the window scrolling event
  window.addEventListener("scroll", (e)=>{
    e.preventDefault()

    ////console.log(window.innerWidth);
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