export function hideMenuOnLink(){
  //// input type checkbox
  const menuInput = document.querySelector(".navbar-menu-toggle")
  //// Recup of all menu-link
  document.querySelectorAll('.navbar-menu-item').forEach((link) => {
    link.addEventListener("click", () => {
      //// Change checked value from input
      menuInput.checked = false
    })
  })
}

export function handleNavbarMenu(){

// menu list, bouton (label), input
const menu = document.querySelector('.navbar-menu')
const menuInput = document.querySelector(".navbar-menu-toggle")
const menuBtn = document.querySelector('.navbar-menu-btn')

  menuBtn.addEventListener("click", ()=>{

    if(!menuInput.checked){
        setTimeout(()=>{
          menu.classList.remove('unselectable')
        },400)
		}else if (menuInput.checked){
			  menu.classList.add('unselectable')
		}
  })

}