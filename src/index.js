const buttonLocation = document.querySelector("#add-one")
const paraContent = document.querySelector("#results")
const incrementUp = () => {
    let num = parseInt(paraContent.textContent)
    num++
    paraContent.textContent = num
}
buttonLocation.addEventListener("click",incrementUp)