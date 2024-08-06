import { smoothScroll } from "./customScroll.js"

export function handleLink() {
  const backTopBtn = document.querySelector('.go-back-top')
  const navLinks = document.querySelectorAll('.navbar-menu-item')

  navLinks.forEach(link => {
    link.addEventListener("click", (e) =>{
      e.preventDefault()
      //console.log(e.target, e.target.hash.replace('#', ''), e.target.hash.slice(1))
      let targetAnchor = e.target.hash.replace("#", "")
      smoothScroll(targetAnchor, 1500)
    })
  })

  backTopBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    smoothScroll('landing-top', 2000)
  })

}