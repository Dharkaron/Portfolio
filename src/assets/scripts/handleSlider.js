//import { renderSvgIcon } from "./svgMaker.js";
import { fetchJsonData } from "./fetchJsonData.js";
import { setMultipleAttributes } from "./setAttributes.js";


const jsonArray = await fetchJsonData("slidesData")


export function projectSlider(){
  const slider = document.querySelector('.slide-container')
  slider.innerHTML = ""
    
  for (let i=0; i < jsonArray.length; i++) {
    //console.log(jsonArray[i])

    const slide = document.createElement('li')
    const content = document.createElement('div')
    const title = document.createElement('h2')
    const desc = document.createElement('p')
    const spec = document.createElement('p')

    // Container, with img in background
      slide.classList.add('slide')
      setMultipleAttributes(slide, {"style": `background-image:${jsonArray[i].img}`, 'id':jsonArray[i].id})
      if(i === 1){
        slide.classList.add('active')
      }

    // content (text & button) wrapper
      content.classList.add('content', 'unselectable')

    // title of the slide
      title.classList.add('title')
      title.innerHTML = `"${jsonArray[i].title}"`

      content.appendChild(title)

    // short description
      desc.classList.add('description')
      desc.innerHTML = jsonArray[i].description

      content.appendChild(desc)
    
    // skills & tools used
      spec.classList.add('specification')
      spec.innerHTML = jsonArray[i].specification

      content.appendChild(spec)

    
    // Add the slide and its content to the container
      slide.appendChild(content)
      slider.appendChild(slide)
    
  }
}



// slides change on click
export function nextSlide(){
  
  const slider = document.querySelector('.slide-container');
  const sliderBtn = document.querySelector('.next-slide')
  
  sliderBtn.addEventListener('click', () =>{
    let items = document.querySelectorAll('.slide');
    slider.append(items[0])

    // Add the 'active' class to current slide
    items.forEach(item => {
      item.classList.remove('active')
    })
    items[2].classList.add('active')
    
  }, false)
}