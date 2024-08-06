export function emailMe() {
  document.getElementById('mailto-link').addEventListener("click", (e)=>{
    //// add the email on click, to use the mailto link
    e.target.href = "mailto:pierregasse.pro@protonmail.com"
    //// Remove the address after a short interval (100ms)
    setTimeout(()=>{
      e.target.href = ""
    },100)
  })
}