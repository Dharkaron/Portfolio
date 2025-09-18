import { fetchJsonData } from "./fetchJsonData.js";
import { setMultipleAttributes } from "./setAttributes.js";

const jsonArray = await fetchJsonData("slidesData")



export function displayproject(){
  
  const projectContainer = document.querySelector('.projects-grid')
  projectContainer.innerHTML = ""
    
  for (let i=0; i < jsonArray.length; i++) {
    //console.log(jsonArray[i])

    const card = document.createElement('figure')
    const picture = document.createElement('img')
    const content = document.createElement('div')
    const title = document.createElement('h3')
    const desc = document.createElement('p')

    // Individual Card
      card.classList.add('projects-grid-card')
      card.id = `${jsonArray[i].id}`

    // Image
    setMultipleAttributes(picture, {"src": `${jsonArray[i].img}`, 'alt':"aperçu du projet"})
      
    // content (text & button) wrapper
      content.classList.add('projects-grid-card-content', 'unselectable')

    // title of the slide
      title.classList.add('card-title')
      title.innerHTML = `${jsonArray[i].title}`

      content.appendChild(title)

    // short description - skills & tolls used
      desc.classList.add('card-description')
      desc.innerHTML = jsonArray[i].specification

      content.appendChild(desc)

    
    // Add the card and its content to the container
      card.appendChild(picture)
      card.appendChild(content)
      projectContainer.appendChild(card)
    
  }
}