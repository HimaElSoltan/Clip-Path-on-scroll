// clipPath img
let img = document.querySelector(".imgScrol")
window.addEventListener("scroll", () =>{
  let gds = window.scrollY;
  img.style.clipPath =`circle(${gds +70}px at center)`
  // img.style.opacity =`${gds -100})`
}) 
// navgthion
let nav = document.querySelector("nav")
let sec = document.querySelector(".last")
window.addEventListener("scroll", () =>{
  let gds = window.scrollY;
  img.style.clipPath =`circle(${gds +70}px at center)`
  // img.style.opacity =`${gds -100})`
})



// change-fontSize
let text = document.querySelector(".crol")
window.addEventListener("scroll", () =>{
  let gds = window.scrollY;
  // console.log(gds);
  text.style.fontSize = `clamp(1.5rem, ${gds}px, 5rem)`
})














































