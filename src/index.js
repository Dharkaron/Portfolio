import { welcomeLink, welcomeTest } from "./assets/scripts/welcomeBtn.js";
import { nextSlide, projectSlider } from "./assets/scripts/handleSlider.js";
import { handleModal } from "./assets/scripts/modal.js";
import { handleSCroll } from "./assets/scripts/handleScroll.js";
import { emailMe } from "./assets/scripts/handleMailTo.js";
import { handleNavbarMenu, hideMenuOnLink } from "./assets/scripts/handleMenu.js";
import { handleLink } from "./assets/scripts/handleLink.js";


// Landing - Welcome Button Animation
  welcomeLink()
  ////welcomeTest()


// Main Page Projects Slider 
  projectSlider()
  nextSlide()


// Main Page Modals display
  handleModal()


// Handle the display of the goBackTop-button, & the navbar
  handleSCroll()


// Inject and remove email address for the contact section
  emailMe()


// Navigation Menu
//// Hide the Navigation Menu when a link is clicked
  hideMenuOnLink()
//// Prevent navMenu interaction when opening/closing
  handleNavbarMenu()

// custom scroll speed on link
  handleLink()