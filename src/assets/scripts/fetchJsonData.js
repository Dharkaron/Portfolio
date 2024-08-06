
export async function fetchJsonData(fileName){ 
  
  try{
    let response = await fetch(`/src/assets/data/${fileName}.json`)
    .then(response => {
        if(!response.ok){
          throw new Error (`HTTP error! Status: ${response.status}`)
        }
      return response.json()
    })

    const responseString = JSON.stringify(response)
    sessionStorage.setItem("JsonData", responseString)

  }catch(err) {
    console.error(err.message)
  }

  return JSON.parse(sessionStorage.getItem("JsonData"))
}