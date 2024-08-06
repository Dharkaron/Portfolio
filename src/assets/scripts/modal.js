import { fetchJsonData } from "./fetchJsonData.js";
import { setMultipleAttributes } from "./setAttributes.js";
import { renderSvgIcon } from "./svgMaker.js";

const jsonArray = await fetchJsonData("modalData")


export function handleModal() {
  const modalContainer = document.querySelector('.modal-container')
  const openModal = document.querySelectorAll('.slide')

  // close the modal if the user click outside of it
  modalContainer.addEventListener("click", e => {
    if(e.target === modalContainer){
      console.log("you clicked outside the modal")
      e.preventDefault()
      e.stopPropagation()
      modalContainer.classList.add('hidden')
    }else{
      return
    }
  })

  // Open the modal when clicking on the active Slide
   openModal.forEach(slide => {   
    slide.addEventListener("click", () =>{
      if(slide.classList.contains('active')){
        let currentSlideID = slide.id

        console.log("you clicked the active slide");
        displayModalContent(modalContainer, currentSlideID)
        modalContainer.classList.remove("hidden")
      }
    })
  }) 
}



function displayModalContent(container, slideId){
  const modal = document.querySelector('.modal')
  modal.innerHTML = ""
  console.log(jsonArray)


  for (let i=0; i < jsonArray.length; i++) {
    if(slideId == jsonArray[i].id){
      console.log(jsonArray[i], jsonArray[i].description, jsonArray[i].description[0])

      // Close Button, to hide the modal
        const closeBtn = document.createElement('button')
        closeBtn.classList.add('close-modal')
        closeBtn.innerText = 'X'

        
      // Modal Title
        const modalTitle = document.createElement('h2')
          modalTitle.classList.add('modal-title')
          modalTitle.innerText = `"${jsonArray[i].title}"`
        
      // Modal Subtitle
        const modalSubtitle = document.createElement('h3')
          modalSubtitle.innerHTML += `<span class="modal-subtitle">${jsonArray[i].subtitle}</span>`
        
      // Modal content
        const modalContent = document.createElement('div')
          modalContent.classList.add('modal-content')

        // Description
        const modalDescription = document.createElement('ul')
          modalDescription.classList.add('modal-content-description')
        
        jsonArray[i].description.forEach(element => {
          const listElement = document.createElement('li')
            listElement.innerHTML = element
            modalDescription.appendChild(listElement)
        })

        modalContent.appendChild(modalDescription)
        
        // Picture
        const modalImg = document.createElement('img')
        setMultipleAttributes(modalImg, {'class':'modal-content-picture', 'src':jsonArray[i].picture, 'alt':'image du site'})

        modalContent.appendChild(modalImg)
        
      // Modal Hyperlinks
        const linkwrapper = document.createElement('div')
        linkwrapper.classList.add('modal-links-wrapper')

        const githubLink = document.createElement('a')
        const githubLinkTitle = document.createElement('p')
          renderSvgIcon(githubLink, true)
          setMultipleAttributes(githubLink, {'class':'hyperlink', 'href': jsonArray[i].github, "target": "_blank", "rel": "noopener noreferrer" })
    
          githubLinkTitle.classList.add('hyperlink-title')
          githubLinkTitle.innerHTML = "Code du projet"
          githubLink.appendChild(githubLinkTitle)
          linkwrapper.appendChild(githubLink)

        const websiteLink = document.createElement('a')
        const websiteLinkTitle = document.createElement('p')
          if(jsonArray[i].website !== ""){
            renderSvgIcon(websiteLink, false)
            setMultipleAttributes(websiteLink, {'class':'hyperlink', 'href': jsonArray[i].website, "target": "_blank", "rel": "noopener noreferrer" })
    
            websiteLinkTitle.classList.add('hyperlink-title')
            websiteLinkTitle.innerHTML = "Visiter le site"
            websiteLink.appendChild(websiteLinkTitle)
            linkwrapper.appendChild(websiteLink)
          }

        
      // Adding the modal content to the DOM
        modal.appendChild(closeBtn)
        modal.appendChild(modalTitle)
        modal.appendChild(modalSubtitle)
        modal.appendChild(modalContent)
        modal.appendChild(linkwrapper)


      // Event when clicking the 'close' button
      closeBtn.addEventListener("click", e => {
        if(e.target === closeBtn){
          console.log("you clicked the close button")
          e.preventDefault()
          e.stopPropagation()
          container.classList.add('hidden')
        }else{
          console.error('an error occured when closing the modal')
        }
      })
    }
  }


}