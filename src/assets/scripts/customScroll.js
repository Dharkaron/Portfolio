


export function smoothScroll(target, duration){

  //init of all variables
  const currentTarget = document.getElementById(target)
  const targetPosition = currentTarget.getBoundingClientRect().top 
  const startPosition = window.scrollY
    ////const distance = targetPosition - startPosition
  let startTime = null

  const animation = (currentTime) => {
    if(startTime === null){
      startTime = currentTime
    }
    
    const timeElapsed = currentTime - startTime

    // replaced "distance" with "targetPostion"
    // "element.getBoundingClientRect().top" already returns the distance to the element based on the window.y position
    const run = easeInOut(timeElapsed, startPosition, targetPosition, duration)
    window.scrollTo(0, run)

    if(timeElapsed < duration){
      requestAnimationFrame(animation)
    }
  } 


  function easeInOut(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
  }

  requestAnimationFrame(animation)
}
